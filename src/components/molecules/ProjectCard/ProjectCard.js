import React from 'react';
import ProjectDetail from 'components/atoms/ProjectDetail/ProjectDetail';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
  height: 120px;
  display: flex;
  justify-content: flex-start;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  overflow: hidden;
`;
const ProjectLogo = styled.div`
  width: 120px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 120px;
  }
`;
const Content = styled.div`
  padding: 15px 30px;
`;
const Head = styled.h2`
  font-size: 24px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: ${({ theme }) => theme.light};
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  margin-top: 0;
  margin-bottom: 15px;
`;
const ProjectDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ProjectCard = ({ id, name, type, maxTime, goalTime, currentTime, logo }) => (
  <CardWrapper>
    <ProjectLogo>
      <img src={logo} alt="" />
    </ProjectLogo>
    <Content>
      <Head>{name}</Head>
      <ProjectDetails>
        <ProjectDetail label="ID" value={id} />
        <ProjectDetail label="Type" value={type}/>
        <ProjectDetail label="Max time" value={maxTime} />
        <ProjectDetail label="Goal time" value={goalTime}/>
        <ProjectDetail label="Current time" value={currentTime}  />
      </ProjectDetails>
    </Content>
  </CardWrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  currentTime: PropTypes.string,
  goalTime: PropTypes.string,
  id: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  maxTime: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

ProjectCard.defaultProps = {
  currentTime: 0,
  goalTime: 0,
  maxTime: 0
}