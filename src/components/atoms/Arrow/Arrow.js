import React from 'react';
import styled from 'styled-components';

const StyledArrow = styled.div`
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid ${({theme}) => theme.colorText};
`;

const Arrow = ()=>(
  <StyledArrow/>
);

export default Arrow;