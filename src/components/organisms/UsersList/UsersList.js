import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import UserCard from '../../molecules/UserCard/UserCard';

const StyledUsersList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 30px;
  margin: 50px 0;
`;
const UsersList = ({ users }) => (
  <StyledUsersList>
    {users.map(({ id, name, email, avatar}) => (
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

const mapStateToProps = state => {
  const { users } = state;
  return { users };
};
export default connect(mapStateToProps)(UsersList);

UsersList.propTypes = {
  users: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired
}