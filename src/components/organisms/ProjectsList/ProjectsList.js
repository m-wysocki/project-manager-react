import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../../molecules/ProjectCard/ProjectCard';

const StyledProjectsList = styled.div`
  margin-top: 50px;
  > div {
    margin-bottom: 30px;
  }
`;
const ProjectsList = () => (
  <StyledProjectsList>
    <ProjectCard logo="https://source.unsplash.com/120x120/?logo+" />
    <ProjectCard logo="https://source.unsplash.com/130x130/?logo" />
    <ProjectCard logo="https://source.unsplash.com/200x200/?logo" />
  </StyledProjectsList>
);

export default ProjectsList;