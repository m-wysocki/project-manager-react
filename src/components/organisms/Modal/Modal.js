import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
import Form from "../../molecules/Form/Form";



const Wrapper = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  background: #f8f9fa;
  box-shadow:  0 20px 40px -10px rgba(0,0,0,0.2);
  width: 75%;
  margin: 0 auto;
  height: auto;
  padding: 50px 80px;
  display: flex;
  flex-direction: column;
`;
const CloseButton = styled.a`
  align-self: flex-end;
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: #af2626;
  border-radius: 100%;
  box-shadow: 0.5px 3px 4px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;
const Modal = ({closeModalFn}) => (
  <Wrapper>
    <CloseButton onClick={closeModalFn} className="btn btn-danger"><FontAwesomeIcon icon={faTimes} /></CloseButton>
     <Form/>
  </Wrapper>
);
Modal.propTypes = {
  closeModalFn: PropTypes.func.isRequired
};

export default Modal;