import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:500,700&display=swap');
  
  *, *::before, *::after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
  }
  
  body {
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
  }
  
  a{
    text-decoration: none;
  }

`;


export default GlobalStyle;