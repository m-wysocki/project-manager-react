import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {removeItem as removeItemAction} from '../../../actions';
import ProjectDetail from '../../atoms/ProjectDetail/ProjectDetail';

const CardWrapper = styled.div`
  position:relative;
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

const RemoveItem = styled.a`
  display:inline-block;
  position:absolute;
  top: 15px;
  right: 15px;
  svg{
   transition: fill .3s ease-in-out;
  }
  :hover svg{
    fill: darkred;
  }
`;

const ProjectCard = ({ id, name, type, maxTime, goalTime, currentTime, logo, removeItem }) => (
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
      <RemoveItem onClick={() => removeItem('projects', id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z"/></svg>
      </RemoveItem>
    </Content>
  </CardWrapper>
);

const mapDispatchToProps = dispatch => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id))
});

export default connect(null, mapDispatchToProps)(ProjectCard);

ProjectCard.propTypes = {
  currentTime: PropTypes.string,
  goalTime: PropTypes.string,
  id: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  maxTime: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
}

ProjectCard.defaultProps = {
  currentTime: 0,
  goalTime: 0,
  maxTime: 0
}