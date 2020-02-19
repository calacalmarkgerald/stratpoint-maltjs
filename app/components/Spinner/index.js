/**
 *
 * Spinner
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Spinner() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Spinner.propTypes = {};

export default Spinner;
