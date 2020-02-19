/*
 *
 * WeatherForecastPage reducer
 *
 */
import produce from 'immer';
import {
  GET_WEATHER_FORECAST_START,
  GET_WEATHER_FORECAST_FAILED,
  GET_WEATHER_FORECAST_SUCCESS,
} from './constants';

export const initialState = {
  loading: false,
  error: null,
  forecasts: null,
};

/* eslint-disable default-case, no-param-reassign */
const weatherForecastPageReducer = (state = initialState, action) =>
  produce(state, draftState => {
    switch (action.type) {
      case GET_WEATHER_FORECAST_START:
        console.log('ACTION RECEIVED BY REDUCER');
        draftState.loading = true;
        draftState.error = null;
        break;
      case GET_WEATHER_FORECAST_SUCCESS:
        draftState.loading = false;
        draftState.forecasts = action.payload;
        break;
      case GET_WEATHER_FORECAST_FAILED:
        draftState.loading = true;
        draftState.error = action.payload;
        break;
    }
  });

export default weatherForecastPageReducer;
