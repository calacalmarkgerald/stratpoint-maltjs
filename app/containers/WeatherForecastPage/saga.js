import { takeLatest, put, all, select } from 'redux-saga/effects';
import axios from 'axios';

import { selectWeatherForecastPageDomain } from './selectors';
import { getFormattedDate, getFormattedTime } from '../../utils/dateFormatter';
import {
  WEATHER_API_URL,
  WEATHER_API_ICON_URL,
  APP_ID,
  GET_WEATHER_FORECAST_START,
} from './constants';

import { getWeatherForecastSuccess, getWeatherForecastFailed } from './actions';

// Individual exports for testing
export default function* weatherForecastPageSaga() {
  yield all([takeLatest(GET_WEATHER_FORECAST_START, getWeatherForecasts)]);
}

export function* getWeatherForecasts() {
  const { city, units, count } = yield select(selectWeatherForecastPageDomain);

  try {
    const response = yield axios.get(
      `${WEATHER_API_URL}?q=${city}&units=${units}&cnt=${count}&appid=${APP_ID}`,
    );

    const newWeatherForecasts = {};
    response.data.list.reduce((prev, curr) => {
      const date = getFormattedDate(new Date(curr.dt * 1000));
      const time = getFormattedTime(new Date(curr.dt * 1000));
      /* eslint-disable no-prototype-builtins, no-param-reassign */
      if (!prev.hasOwnProperty(date)) {
        prev[date] = mapWeatherForecastResponse(curr);
        prev[date].hourlyForecasts = [];
        prev[date].hourlyForecasts.push({
          ...mapWeatherForecastResponse(curr),
          time,
        });
      } else {
        prev[date].hourlyForecasts.push({
          ...mapWeatherForecastResponse(curr),
          time,
        });
      }

      return prev;
    }, newWeatherForecasts);

    yield put(getWeatherForecastSuccess(newWeatherForecasts));
  } catch (error) {
    yield put(getWeatherForecastFailed(error));
  }
}

function mapWeatherForecastResponse(forecast) {
  return {
    day: new Date(forecast.dt * 1000).getDay(), // convert to milliseconds
    icon: `${WEATHER_API_ICON_URL}/${forecast.weather[0].icon}@2x.png`,
    minTemp: forecast.main.temp_min,
    maxTemp: forecast.main.temp_max,
  };
}
