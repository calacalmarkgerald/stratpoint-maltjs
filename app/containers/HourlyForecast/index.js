/**
 *
 * HourlyForecast
 *
 */

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  WeatherContainer,
  Container,
  Layout,
  Header,
  SubHeader,
  BackButton,
} from './styles';
import Weather from '../../components/Weather';

import makeSelectHourlyForecast, { selectDateFromRouter } from './selectors';

export function HourlyForecast({ history, hourlyForecast, date }) {
  const onClickHandler = useCallback(() => {
    history.push('/');
  }, [history]);

  if (!date) {
    history.push('/');
  }

  const displayDate = new Date(date).toDateString();

  return (
    <Layout>
      <Container>
        <Header>Hourly Forecast</Header>
        <SubHeader>{displayDate}</SubHeader>
        <BackButton onClick={onClickHandler}>Back</BackButton>
        <WeatherContainer>
          {hourlyForecast.map(forecast => (
            <Weather
              key={forecast.day + forecast.time}
              day={forecast.day}
              time={forecast.time}
              icon={forecast.icon}
              minTemp={forecast.minTemp}
              maxTemp={forecast.maxTemp}
              mode="HOURLY"
            />
          ))}
        </WeatherContainer>
      </Container>
    </Layout>
  );
}

HourlyForecast.propTypes = {
  history: PropTypes.object.isRequired,
  hourlyForecast: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  hourlyForecast: makeSelectHourlyForecast(),
  date: selectDateFromRouter,
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

export default compose(withConnect)(HourlyForecast);
