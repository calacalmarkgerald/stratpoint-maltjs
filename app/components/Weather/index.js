/**
 *
 * Weather
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { DAYS } from './constants';

import {
  Container,
  Icon,
  TemperatureRange,
  MaxTemperature,
  MinTemperature,
  Time,
  Day,
} from './styles';

function Weather({ mode, day, time, icon, minTemp, maxTemp, onClick }) {
  return (
    <Container onClick={onClick}>
      {mode === 'HOURLY' ? <Time>{time}</Time> : <Day>{DAYS[day]}</Day>}

      <Icon src={icon} />
      <TemperatureRange>
        <MaxTemperature>{minTemp} &deg;</MaxTemperature>
        <MinTemperature>{maxTemp} &deg;</MinTemperature>
      </TemperatureRange>
    </Container>
  );
}

Weather.propTypes = {
  mode: PropTypes.string,
  day: PropTypes.number.isRequired,
  time: PropTypes.string,
  icon: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

Weather.defaultProps = {
  mode: 'DEFAULT',
};

export default Weather;
