import React from 'react';
import styled from 'styled-components';
import { MDBInput } from "mdbreact";
import PropTypes from "prop-types";

const StyledInput = styled(MDBInput)`
  :focus{
      box-shadow: none !important;
      border-width: 2px !important;
  }
`;

const FormItem = ({name,placeholder,type, maxLength}) => (
   <StyledInput name={name} label={placeholder} type={type} maxLength={maxLength} />
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