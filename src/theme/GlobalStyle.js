import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  
  *, *::before, *::after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
  }

`;

export default GlobalStyle;