import React from 'react';
import styled  from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const StyledMenuItem = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  color: ${({theme}) => theme.colorText};
  font-size: 16px;
  padding: 10px;
  letter-spacing: 0.3px;
  font-weight: ${({theme}) => theme.light};
  cursor: pointer;
  transition: color .3s, background-color .3s;
  
  :hover, &.active{
    color: ${({theme}) => theme.colorMain};
    background-color: #E3F2FD;
  }
`;
const IconWrapper = styled.div`
  min-width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

const MenuItem = ({slug, icon, children})=>(
  <StyledMenuItem to={slug} activeClassName="active">
    <IconWrapper><img src={icon} alt=""/></IconWrapper>
    {children}
  </StyledMenuItem>
);

MenuItem.propTypes = {
  slug: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired
};
export default MenuItem;