import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({theme}) => theme.colorLightGrey};
  margin: 20px 0;
`;

const SidebarLine = ()=>(
  <StyledLine/>
);

export default SidebarLine;