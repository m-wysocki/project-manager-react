import React from 'react';
import PropTypes from 'prop-types';
import ViewHeading from '../../components/organisms/ViewHeading/ViewHeading';
import AddButton from '../../components/atoms/AddButton/AddButton';

const TasksView = ({openModalFn}) => (
  <>
    <AddButton onClick={openModalFn}/>
    <ViewHeading head="Tasks" description="Here you can manage your tasks" />
  </>
);

TasksView.propTypes = {
  openModalFn: PropTypes.func.isRequired
};

export default TasksView;