/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import WeatherForecastPage from 'containers/WeatherForecastPage/Loadable';
import HourlyForecast from 'containers/HourlyForecast/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={WeatherForecastPage} />
        <Route exact path="/daily" component={HourlyForecast} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
