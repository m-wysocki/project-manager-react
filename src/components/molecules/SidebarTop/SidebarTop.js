import React from 'react';
import styled from 'styled-components';
import Avatar from 'components/atoms/Avatar/Avatar';
import UserName from 'components/atoms/UserName/UserName';

const StyledWrapper = styled.div`
  padding: 0 15px;
`;
const UserNameWrapper = styled.div`
  margin-top: 15px;
`;

const SidebarTop = () => (
  <StyledWrapper>
    <Avatar />
    <UserNameWrapper>
      <UserName />
    </UserNameWrapper>
  </StyledWrapper>
);
export default SidebarTop;