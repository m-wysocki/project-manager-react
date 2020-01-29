import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import TaskCard from '../../molecules/TaskCard/TaskCard';

const StyledTasksList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
const TaskList = ({ tasks, projects, users }) => {
    function getFilteredNameById(items, id){
        const filteredItem = items.filter(item => item.id === id);
        return filteredItem[0].name;
    }
    return(
  <StyledTasksList>
    {tasks.map(({ id, name, userID, projectID, taskTime}) => (
      <TaskCard
        key={id}
        id={id}
        name={name}
        user={getFilteredNameById(users, userID)}
        project={getFilteredNameById(projects, projectID)}
        taskTime={taskTime}
      />
    ))}
  </StyledTasksList>
)};

const mapStateToProps = state => {
  const { tasks, projects, users } = state;
  return { tasks, projects, users };
};
export default connect(mapStateToProps)(TaskList);

TaskList.propTypes = {
    tasks: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    ]).isRequired,

    projects: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
    ]).isRequired,

    users: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
    ]).isRequired
}