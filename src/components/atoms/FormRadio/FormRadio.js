import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const StyledInput = styled.input`
      display: none;
      &:checked + label:before {
          border-color: rgb(51, 122, 183);
      }
      &:checked + label:after {
          transform: scale(1);
      }
`;
const StyledLabel = styled.label`
      display: inline-block;
      min-height: 20px;
      position: relative;
      padding: 0 30px;
      margin-bottom: 0;
      cursor: pointer;
      vertical-align: bottom;
      &:before, &:after {
          position: absolute;            
          content: '';  
          border-radius: 50%;
          transition: all .3s ease;
          transition-property: transform, border-color;
      }
      &:before {
          left: 0;
          top: 0;
          width: 20px;
          height: 20px;
          border: 2px solid rgba(0, 0, 0, 0.54);
      }
      &:after {
          top: 5px;
          left: 5px;
          width:10px;
          height:10px;
          transform: scale(0);
          background:rgb(51, 122, 183);
      }
`;

const FormRadio = ({id,checked,changeFn, children}) => (
  <div>
    <StyledInput
      type='radio'
      className='form-check-input'
      id={id}
      onChange={changeFn}
      checked={checked}
    />
    <StyledLabel htmlFor={id}>{children}</StyledLabel>
  </div>
);

FormRadio.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  changeFn: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default FormRadio;