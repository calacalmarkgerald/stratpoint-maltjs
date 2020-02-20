import { createSelector } from 'reselect';
import { selectWeatherForecastPageDomain } from '../WeatherForecastPage/selectors';

/**
 * Other specific selectors
 */
export const selectDateFromRouter = state => {
  const queryParams = new URLSearchParams(state.router.location.search);
  return queryParams.get('date');
};
/**
 * Default selector used by HourlyForecast
 */

const makeSelectHourlyForecast = () =>
  createSelector(
    selectWeatherForecastPageDomain,
    selectDateFromRouter,
    (weatherForecastPage, date) => {
      let forecasts;
      if (date && weatherForecastPage.forecasts) {
        forecasts = weatherForecastPage.forecasts[date].hourlyForecasts;
      }

      return forecasts;
    },
  );

export default makeSelectHourlyForecast;
