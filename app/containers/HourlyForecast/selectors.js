import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the hourlyForecast state domain
 */

const selectHourlyForecastDomain = state =>
  state.hourlyForecast || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HourlyForecast
 */

const makeSelectHourlyForecast = () =>
  createSelector(
    selectHourlyForecastDomain,
    substate => substate,
  );

export default makeSelectHourlyForecast;
export { selectHourlyForecastDomain };
