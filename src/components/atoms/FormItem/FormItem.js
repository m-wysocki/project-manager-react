import React from 'react';
import PropTypes from "prop-types";

const FormItem = ({name,placeholder,type, maxLength}) => (
  <div className="form-group">
    <label htmlFor={name}>{placeholder}</label>
    <input
      type={type}
      className="form-control"
      name={name} id={name}
      placeholder={placeholder}
      maxLength={maxLength}
      required
    />
  </div>
);

FormItem.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
};
FormItem.defaultProps = {
  maxLength: 30
};

export default FormItem;