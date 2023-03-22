import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;        
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    body {font-family: 'Roboto', sans-serif}
    
    main {margin-top: 60px;}

    #root {min-height: 100vh}
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 30px;
  padding-left: 30px;

  /* Media Query */
  ${(props) => props.theme.media.desktop} {
    margin-right: auto;
    margin-left: auto;
    width: 1185px;
  }
`;
