import React from 'react';
import ViewHeading from '../../components/organisms/ViewHeading/ViewHeading';
import ProjectsList from '../../components/organisms/ProjectsList/ProjectsList';

const ProjectsView = () => (
  <>
    <ViewHeading head="Projects" description="Here you can manage your projects" />
    <ProjectsList />
  </>
);

export default ProjectsView;