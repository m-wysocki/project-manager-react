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
const TaskList = ({ tasks }) => (
  <StyledTasksList>
    {tasks.map(({ id, name, userID, projectID, taskTime}) => (
      <TaskCard
        key={id}
        id={id}
        name={name}
        user={userID}
        project={projectID}
        taskTime={taskTime}
      />
    ))}
  </StyledTasksList>
);

const mapStateToProps = state => {
  const { tasks } = state;
  return { tasks };
};
export default connect(mapStateToProps)(TaskList);

TaskList.propTypes = {
  tasks: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired
}