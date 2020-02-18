import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import TaskCard from '../../molecules/TaskCard/TaskCard';
import { fetchItems } from '../../../actions';

const StyledTasksList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;



class TasksList extends React.Component {
    componentDidMount() {
        const { fetchTasks, fetchProjects, fetchUsers } = this.props;
        fetchUsers();
        fetchProjects();
        fetchTasks();

    };

    getFilteredNameById = (items, id) => {
        // eslint-disable-next-line no-underscore-dangle
        const filteredItem = items.filter(item => item._id === id);
        if (Array.isArray(filteredItem) && filteredItem.length) {
            return filteredItem[0].name;
        }
        return false;
    }


    render() {
        const { tasks, projects, users } = this.props;
        return (
            <StyledTasksList>
                {tasks.map(({ _id: id, name, userID, projectID, taskTime}) => (
                    <TaskCard
                        key={id}
                        id={id}
                        name={name}
                        user={this.getFilteredNameById(users, userID)}
                        project={this.getFilteredNameById(projects, projectID)}
                        taskTime={taskTime}
                    />
                ))}
            </StyledTasksList>
        );
    }
}

TasksList.propTypes = {
    fetchProjects: PropTypes.func.isRequired,
    fetchTasks: PropTypes.func.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            taskTime: PropTypes.string.isRequired,
            projectID: PropTypes.string.isRequired,
            userID: PropTypes.string.isRequired,
        }),
    ),
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
    users: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired
        }),
    ),
};
TasksList.defaultProps = {
    projects: [],
    tasks: [],
    users: []
};

const mapStateToProps = state => {
  const { tasks, projects, users } = state;
  return { tasks, projects, users };
};
const mapDispatchToProps = dispatch => ({
    fetchProjects: () => dispatch(fetchItems('projects')),
    fetchTasks: () => dispatch(fetchItems('tasks')),
    fetchUsers: () => dispatch(fetchItems('users'))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TasksList);