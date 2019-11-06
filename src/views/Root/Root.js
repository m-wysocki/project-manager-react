import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProjectsView from '../ProjectsView/ProjectsView';
import TasksView from '../TasksView/TasksView';
import UsersView from '../UsersView/UsersView';

const ViewsContainer = styled.div`
  padding: 0 0 0 260px;
`;

const Root = ()=>(
  <BrowserRouter>
    <div>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle/>
          <Sidebar />
          <ViewsContainer>
            <Switch>
              <Route path="/projects" component={ProjectsView} />
              <Route path="/tasks" component={TasksView} />
              <Route path="/users" component={UsersView} />
            </Switch>
          </ViewsContainer>
        </>
      </ThemeProvider>
    </div>

  </BrowserRouter>
)
export default Root;