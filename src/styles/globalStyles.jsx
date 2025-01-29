import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color : #F2F2F5;
    overflow: hidden;
  }
  @font-face {
    font-family: 'MyCustomFont';
    src: url('../assets/fonts/SFpro.woff2') format('woff2');
  }

  body {
    font-family: 'MyCustomFont', sans-serif; 
  }

`;

export default GlobalStyle;
