import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: #F2F2F5;
    overflow-y: auto; 

    ::-webkit-scrollbar {
      display: none;
    }
  
    scrollbar-width: none;
    scrollbar-color: transparent transparent;
  }
`;

export default GlobalStyle;
