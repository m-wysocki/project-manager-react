import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.div`
  width: 80px;
  height: 80px;
  display: inline-block;
  overflow: hidden;
  border-radius: 1000px;
  img{
    max-width: 100%;
  }
`;

const Avatar = ()=>(
  <StyledAvatar>
    <img src="https://source.unsplash.com/150x150/?portrait+man" alt="Mateusz Wysocki"/>
  </StyledAvatar>
);

export default Avatar;