import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import UserCard from '../../molecules/UserCard/UserCard';
import { fetchItems } from '../../../actions';

const StyledUsersList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 30px;
  margin: 50px 0;
`;


class UsersList extends React.Component {
    componentDidMount() {
        const { fetchUsers } = this.props;
        fetchUsers();
    };

    render() {
        const { users } = this.props;
        return (
            <StyledUsersList>
                {users.map(({ _id: id, name, email, avatar}) => (
                    <UserCard
                        key={id}
                        id={id}
                        name={name}
                        email={email}
                        avatar={avatar}
                    />
                ))}
            </StyledUsersList>
        );
    }
}
UsersList.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired
        }),
    ),
};

UsersList.defaultProps = {
    users: []
};
const mapStateToProps = state => {
  const { users } = state;
  return { users };
};
const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchItems('users'))
});
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);