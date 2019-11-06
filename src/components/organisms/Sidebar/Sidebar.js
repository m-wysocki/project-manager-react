import React from 'react';
import styled from 'styled-components';
import SidebarTop from '../../molecules/SidebarTop/SidebarTop';
import SidebarLine from '../../atoms/SidebarLine/SidebarLine';
import SidebarMenu from '../../molecules/SidebarMenu/SidebarMenu';

const StyledSidebar = styled.div`
  position: fixed;
  width: 260px;
  height: 100vh;
  border-right: solid 1px ${({theme}) => theme.colorLightGrey};
  padding: 20px 0;
`;
export default function Sidebar() {
  return (
    <StyledSidebar>
      <SidebarTop/>
      <SidebarLine/>
      <SidebarMenu/>
    </StyledSidebar>
  );
}
