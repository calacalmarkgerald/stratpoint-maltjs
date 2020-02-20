/**
 *
 * Input
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { CustomInput, Container, ErrorMessage } from './styles';

function Input({ onSearch, error, ...props }) {
  const onChangeHandler = debounce(onSearch, 300);

  return (
    <Container>
      <CustomInput {...props} onChange={e => onChangeHandler(e.target.value)} />
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </Container>
  );
}

Input.propTypes = {
  error: PropTypes.string,
  onSearch: PropTypes.func,
};

export default Input;
