import React from 'react';
import styled from 'styled-components';
import MenuItem from 'components/atoms/MenuItem/MenuItem';
import projectsIcon from 'assets/images/icons/projects.svg';
import tasksIcon from 'assets/images/icons/tasks.svg';
import usersIcon from 'assets/images/icons/users.svg';


const StyledWrapper = styled.div`
  padding: 0 5px;
`;
const StyledMenuItem = styled(MenuItem)`
  margin-bottom: 8px;
`;

const SidebarMenu = () => (
  <StyledWrapper>
    <StyledMenuItem isActive icon={projectsIcon}>Projects</StyledMenuItem>
    <StyledMenuItem icon={tasksIcon}>Tasks</StyledMenuItem>
    <StyledMenuItem icon={usersIcon}>Users</StyledMenuItem>
  </StyledWrapper>
);
export default SidebarMenu;