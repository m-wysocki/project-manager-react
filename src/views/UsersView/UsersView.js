import React from 'react';
import PropTypes from 'prop-types';
import ViewHeading from '../../components/organisms/ViewHeading/ViewHeading';
import AddButton from '../../components/atoms/AddButton/AddButton';

const UsersView = ({openModalFn}) => (
  <>
    <AddButton onClick={openModalFn}/>
    <ViewHeading head="Users" description="Here you can manage your users" />
  </>
);
UsersView.propTypes = {
  openModalFn: PropTypes.func.isRequired
};
export default UsersView;