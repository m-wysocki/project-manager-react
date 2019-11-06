import React from 'react';
import { ThemeProvider } from 'styled-components';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = ()=>(
  <div>
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyle/>
      <Sidebar />
      </>
    </ThemeProvider>
  </div>
)
export default Root;