import React from 'react';
import PropTypes from 'prop-types';
import ViewHeading from '../../components/organisms/ViewHeading/ViewHeading';
import AddButton from '../../components/atoms/AddButton/AddButton';
import TasksList from '../../components/organisms/TasksList/TasksList';

const TasksView = ({openModalFn}) => (
  <>
    <AddButton onClick={openModalFn}/>
    <ViewHeading head="Tasks" description="Here you can manage your tasks" />
    <TasksList />
  </>
);

TasksView.propTypes = {
  openModalFn: PropTypes.func.isRequired
};

export default TasksView;