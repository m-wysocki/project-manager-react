import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ProjectCard from '../../molecules/ProjectCard/ProjectCard';

const StyledProjectsList = styled.div`
  margin-top: 50px;
  > div {
    margin-bottom: 30px;
  }
`;
class ProjectsList extends React.Component {
    getCurrentTime = (projectID) => {
        const {tasks} = this.props;
        const tasksInProject = tasks.filter(task => task.projectID === projectID);

        let hours = 0;
        let minutes = 0;

        tasksInProject.forEach(task => {
            const time = task.taskTime.split(':');
            hours += Number(time[0]);
            minutes += Number(time[1]);
        });

        hours += (Math.floor(minutes/60));
        minutes =+ minutes % 60;

        return `${hours}h ${minutes}min`;
    };

    render() {
        const {projects} = this.props;
        return (
            <StyledProjectsList>
                {projects.map(({ id, name, type, maxTime, goalTime, logo }) => (
                    <ProjectCard
                        key={id}
                        id={id}
                        name={name}
                        type={type}
                        maxTime={maxTime}
                        goalTime={goalTime}
                        currentTime={this.getCurrentTime(id)}
                        logo={logo}
                    />
                ))}
            </StyledProjectsList>
        );
    }
}

const mapStateToProps = state => {
  const { projects, tasks } = state;
  return { projects, tasks };
};
export default connect(mapStateToProps)(ProjectsList);

ProjectsList.propTypes = {
    projects: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    ]).isRequired,
    tasks: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
    ]).isRequired
};
