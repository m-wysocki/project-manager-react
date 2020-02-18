import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ProjectCard from '../../molecules/ProjectCard/ProjectCard';
import { fetchItems } from '../../../actions';

const StyledProjectsList = styled.div`
  margin-top: 50px;
  > div {
    margin-bottom: 30px;
  }
`;
class ProjectsList extends React.Component {
    componentDidMount() {
        const { fetchProjects, fetchTasks } = this.props;
        fetchProjects();
        fetchTasks();
    };

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
                {projects.map(({ _id: id, name, type, maxTime, goalTime, logo }) => (
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

ProjectsList.propTypes = {
    fetchProjects: PropTypes.func.isRequired,
    fetchTasks: PropTypes.func.isRequired,
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            maxTime: PropTypes.number.isRequired,
            goalTime: PropTypes.number.isRequired,
            logo: PropTypes.string.isRequired,
        }),
    ),
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            taskTime: PropTypes.string.isRequired,
            projectID: PropTypes.string.isRequired,
        }),
    )
};

ProjectsList.defaultProps = {
    projects: [],
    tasks: []
};
const mapStateToProps = state => {
    const { projects, tasks } = state;
    return { projects, tasks };
};
const mapDispatchToProps = dispatch => ({
    fetchProjects: () => dispatch(fetchItems('projects')),
    fetchTasks: () => dispatch(fetchItems('tasks'))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectsList);