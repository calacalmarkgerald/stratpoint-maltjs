/*
 *
 * WeatherForecastPage reducer
 *
 */
import produce from 'immer';
import { isUndefined } from 'lodash';
import {
  DEFAULT_COUNT,
  DEFAULT_UNITS,
  GET_WEATHER_FORECAST_START,
  GET_WEATHER_FORECAST_FAILED,
  GET_WEATHER_FORECAST_SUCCESS,
} from './constants';

export const initialState = {
  city: '',
  count: DEFAULT_COUNT,
  units: DEFAULT_UNITS,
  loading: false,
  error: null,
  forecasts: null,
};

/* eslint-disable default-case, no-param-reassign */
const weatherForecastPageReducer = (state = initialState, action) =>
  produce(state, draftState => {
    switch (action.type) {
      case GET_WEATHER_FORECAST_START:
        draftState.city = !isUndefined(action.payload.city)
          ? action.payload.city
          : 'null';

        draftState.count = !isUndefined(action.payload.count)
          ? action.payload.count
          : DEFAULT_COUNT;

        draftState.units = !isUndefined(action.payload.units)
          ? action.payload.units
          : DEFAULT_UNITS;

        draftState.loading = true;
        draftState.error = null;
        break;
      case GET_WEATHER_FORECAST_SUCCESS:
        draftState.loading = false;
        draftState.forecasts = action.payload;
        break;
      case GET_WEATHER_FORECAST_FAILED:
        draftState.loading = false;
        draftState.forecasts = null;
        draftState.error = action.payload;
        break;
    }
  });

export default weatherForecastPageReducer;
