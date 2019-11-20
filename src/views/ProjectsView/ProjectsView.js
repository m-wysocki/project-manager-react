import React from 'react';
import PropTypes from 'prop-types';
import ViewHeading from '../../components/organisms/ViewHeading/ViewHeading';
import ProjectsList from '../../components/organisms/ProjectsList/ProjectsList';
import AddButton from '../../components/atoms/AddButton/AddButton';

const ProjectsView = ({openModalFn}) => (
  <>
    <AddButton onClick={openModalFn}/>
    <ViewHeading head="Projects" description="Here you can manage your projects" />
    <ProjectsList />
  </>
);

ProjectsView.propTypes = {
  openModalFn: PropTypes.func.isRequired
};

export default ProjectsView;