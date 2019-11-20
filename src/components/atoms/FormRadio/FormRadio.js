import React from 'react';
import PropTypes from "prop-types";

const FormRadio = ({id,checked,changeFn, children}) => (
  <div className="form-check form-check-inline">
    <input
      type='radio'
      className='form-check-input'
      id={id}
      onChange={changeFn}
      checked={checked}
    />
    <label className="form-check-label" htmlFor={id}>{children}</label>
  </div>
);

FormRadio.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  changeFn: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default FormRadio;