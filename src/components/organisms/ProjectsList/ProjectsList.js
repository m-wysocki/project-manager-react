import PropTypes from 'prop-types'
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ProjectCard from '../../molecules/ProjectCard/ProjectCard';

const StyledProjectsList = styled.div`
  margin-top: 50px;
  > div {
    margin-bottom: 30px;
  }
`;
const ProjectsList = ({ projects }) => (
  <StyledProjectsList>
    {projects.map(({ id, name, type, maxTime, goalTime, currentTime, logo }) => (
      <ProjectCard
        key={id}
        id={id}
        name={name}
        type={type}
        maxTime={maxTime}
        goalTime={goalTime}
        currentTime={currentTime}
        logo={logo}
      />
      ))}
  </StyledProjectsList>
);

const mapStateToProps = state => {
  const { projects } = state;
  return { projects };
};
export default connect(mapStateToProps)(ProjectsList);

ProjectsList.propTypes = {
  projects: PropTypes.objectOf(PropTypes.object()).isRequired
}