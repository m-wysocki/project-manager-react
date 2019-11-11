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
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  margin-top: 0;
  margin-bottom: 15px;
`;
const ProjectDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ProjectCard = ({ logo }) => (
  <CardWrapper>
    <ProjectLogo>
      <img src={logo} alt="" />
    </ProjectLogo>
    <Content>
      <Head>Project name</Head>
      <ProjectDetails>
        <ProjectDetail label="Type" value="Onepage" />
        <ProjectDetail label="Max time" value="155h" />
        <ProjectDetail label="Goal time" value="120h" />
        <ProjectDetail label="Current time" value="20h 35min" />
      </ProjectDetails>
    </Content>
  </CardWrapper>
);

ProjectCard.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default ProjectCard;
