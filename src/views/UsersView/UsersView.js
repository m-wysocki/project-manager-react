import React from 'react';
import PropTypes from 'prop-types';
import ViewHeading from '../../components/organisms/ViewHeading/ViewHeading';
import AddButton from '../../components/atoms/AddButton/AddButton';
import UsersList from '../../components/organisms/UsersList/UsersList';

const UsersView = ({openModalFn}) => (
  <>
    <AddButton onClick={openModalFn}/>
    <ViewHeading head="Users" description="Here you can manage your users" />
    <UsersList />
  </>
);
UsersView.propTypes = {
  openModalFn: PropTypes.func.isRequired
};
export default UsersView;