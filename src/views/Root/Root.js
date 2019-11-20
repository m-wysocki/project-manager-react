import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProjectsView from '../ProjectsView/ProjectsView';
import TasksView from '../TasksView/TasksView';
import UsersView from '../UsersView/UsersView';
import Modal from '../../components/organisms/Modal/Modal';

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
      isModalOpen: true,
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
      <BrowserRouter>
        <div>
          <ThemeProvider theme={theme}>
            <>
              <GlobalStyle />
              <Sidebar />
              <ViewsContainer className={isModalOpen && 'isModalOpen'} onClick={isModalOpen && this.closeModal}>
                <Switch>
                  <Route path="/projects" component={() => <ProjectsView openModalFn={this.openModal} />} />
                  <Route path="/tasks" component={() => <TasksView openModalFn={this.openModal} />} />
                  <Route path="/users" component={() => <UsersView openModalFn={this.openModal} />} />
                </Switch>
              </ViewsContainer>
              {isModalOpen && <Modal closeModalFn={this.closeModal} />}
            </>
          </ThemeProvider>
        </div>
      </BrowserRouter>
    );
  }
}
export default Root;
