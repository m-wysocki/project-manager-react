import React from 'react';
import Arrow from 'components/atoms/Arrow/Arrow';
import styled from 'styled-components';

const StyledLink = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const StyledName = styled.h4`
  font-weight: ${({theme}) => theme.bold};
  font-size: 20px;
  letter-spacing: 0.15px;
  color: #000;
  margin: 0;
`;


const UserName = ()=>(
  <StyledLink>
    <StyledName>Mateusz Wysocki</StyledName>
    <Arrow />
  </StyledLink>
);

export default UserName;