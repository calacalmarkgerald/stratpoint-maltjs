/**
 *
 * HourlyForecast
 *
 */

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHourlyForecast from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function HourlyForecast({ history }) {
  useInjectReducer({ key: 'hourlyForecast', reducer });
  useInjectSaga({ key: 'hourlyForecast', saga });

  const onClickHandler = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <div>
      <button onClick={onClickHandler}>Back</button>
    </div>
  );
}

HourlyForecast.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  hourlyForecast: makeSelectHourlyForecast(),
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
