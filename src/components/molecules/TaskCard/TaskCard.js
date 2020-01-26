import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {removeItem as removeItemAction} from '../../../actions';
import ItemDetail from '../../atoms/ItemDetail/ItemDetail';

const CardWrapper = styled.div`
  display: flex;
  position:relative;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 30px;
  justify-content: flex-start;
  min-height: 50px;
`;
const ID = styled.span`
  font-size: 20px;
  background-color: ${({theme}) => theme.colorMain};
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 0 15px;
  color: #fff;
`;
const Head = styled.h2`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: ${({ theme }) => theme.light};
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  display:flex;
  align-items:center;
  margin: 0 50px 0 15px;
`;
const UserDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const RemoveItem = styled.a`
  display:inline-block;
  height: 100%;
  align-self: center;
  margin-left: auto;
  margin-right: 15px;
  svg{
   transition: fill .3s ease-in-out;
  }
  :hover svg{
    fill: darkred;
  }
`;

const TaskCard = ({ id, name, project, user, taskTime, removeItem }) => (
  <CardWrapper>
    <ID>{id}</ID>
    <Head>{name}</Head>
    <UserDetails>
      <ItemDetail directionRow label="project" value={project}  />
      <ItemDetail directionRow label="user" value={user}  />
      <ItemDetail directionRow label="task time" value={taskTime}  />
    </UserDetails>
    <RemoveItem onClick={() => removeItem('tasks', id)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z"/></svg>
    </RemoveItem>
  </CardWrapper>
);

const mapDispatchToProps = dispatch => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id))
});

export default connect(null, mapDispatchToProps)(TaskCard);

TaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  taskTime: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
}