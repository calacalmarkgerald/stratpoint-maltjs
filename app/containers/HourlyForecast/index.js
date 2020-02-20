/**
 *
 * HourlyForecast
 *
 */

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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

import makeSelectHourlyForecast, {
  selectDateFromRouter,
  selectCity,
} from './selectors';

export function HourlyForecast({ history, hourlyForecast, date, city }) {
  const onClickHandler = useCallback(() => {
    history.push('/');
  }, [history]);

  if (!date || !hourlyForecast) {
    return <Redirect to="/" />;
  }

  const displayDate = new Date(date).toDateString();
  return (
    <Layout>
      <Container>
        <Header>{city}</Header>
        <SubHeader>Hourly Forecast - {displayDate}</SubHeader>
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
  hourlyForecast: PropTypes.array,
  date: PropTypes.string,
  city: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  hourlyForecast: makeSelectHourlyForecast(),
  date: selectDateFromRouter,
  city: selectCity,
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
