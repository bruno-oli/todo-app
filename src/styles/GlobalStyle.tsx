import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Josefin Sans", sans-serif;
    transition: all .3s;
  }
  body {
    background-color: ${props => props.theme.colors.bodyBackground};
    display: flex;
    justify-content: center;
    min-height: 100vh;
    padding-top: 70px;
    overflow-x: hidden;
  }
`

export default GlobalStyle