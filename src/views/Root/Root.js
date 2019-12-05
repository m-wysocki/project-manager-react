import React, { Component } from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from 'store';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from '../../templates/MainTemplate';
import ProjectsView from '../ProjectsView/ProjectsView';
import TasksView from '../TasksView/TasksView';
import UsersView from '../UsersView/UsersView';
import Modal from '../../components/organisms/Modal/Modal';


import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


const ViewsContainer = styled.div`
  padding: 60px 60px 60px 320px;
  
  &.isModalOpen::after{
    content: '';
    background-color: rgba(0,0,0,0.7);
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

class Root extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MainTemplate>
                <Sidebar />
                <ViewsContainer className={isModalOpen && 'isModalOpen'} onClick={isModalOpen ? (this.closeModal) : undefined}>
                  <Switch>
                    <Route path="/projects" component={() => <ProjectsView openModalFn={this.openModal} />} />
                    <Route path="/tasks" component={() => <TasksView openModalFn={this.openModal} />} />
                    <Route path="/users" component={() => <UsersView openModalFn={this.openModal} />} />
                  </Switch>
                </ViewsContainer>
                {isModalOpen && <Modal closeModalFn={this.closeModal} />}
          </MainTemplate>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default Root;
