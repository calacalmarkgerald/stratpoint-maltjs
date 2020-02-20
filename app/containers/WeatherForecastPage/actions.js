/*
 *
 * WeatherForecastPage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_WEATHER_FORECAST_START,
  GET_WEATHER_FORECAST_SUCCESS,
  GET_WEATHER_FORECAST_FAILED,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getWeatherForecast(city, units, count) {
  return {
    type: GET_WEATHER_FORECAST_START,
    payload: {
      city,
      units,
      count,
    },
  };
}

export function getWeatherForecastSuccess(forecasts) {
  return {
    type: GET_WEATHER_FORECAST_SUCCESS,
    payload: forecasts,
  };
}

export function getWeatherForecastFailed(error) {
  return {
    type: GET_WEATHER_FORECAST_FAILED,
    payload: error,
  };
}
