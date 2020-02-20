/**
 *
 * WeatherForecastPage
 *
 */

import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Typography } from 'antd';
import makeSelectWeatherForecastPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import { Layout, WeatherContainer, SpinnerContainer } from './styles';

import Weather from '../../components/Weather';
import Spinner from '../../components/Spinner';
import { getWeatherForecast } from './actions';
import { Header } from '../HourlyForecast/styles';

const { Title } = Typography;

export function WeatherForecastPage({
  dispatch,
  weatherForecastPage,
  history,
}) {
  useInjectReducer({ key: 'weatherForecastPage', reducer });
  useInjectSaga({
    key: 'weatherForecastPage',
    saga,
  });

  useEffect(() => {
    dispatch(getWeatherForecast());
  }, []);

  const onClickHandler = useCallback(
    date => {
      history.push({
        pathname: '/daily',
        search: `?date=${date}`,
      });
    },
    [history],
  );

  const { loading, forecasts } = weatherForecastPage;

  let dynamicComponent;

  if (loading || forecasts === null) {
    dynamicComponent = (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
  } else {
    dynamicComponent = (
      <WeatherContainer>
        {Object.keys(forecasts).map(key => (
          <Weather
            key={key}
            day={forecasts[key].day}
            icon={forecasts[key].icon}
            minTemp={forecasts[key].minTemp}
            maxTemp={forecasts[key].maxTemp}
            onClick={() => onClickHandler(key)}
          />
        ))}
      </WeatherContainer>
    );
  }

  return (
    <Layout>
      <div>
        <Header>Weather Forecast</Header>
        {dynamicComponent}
      </div>
    </Layout>
  );
}

WeatherForecastPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  weatherForecastPage: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  weatherForecastPage: makeSelectWeatherForecastPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(WeatherForecastPage);
