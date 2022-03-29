import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        font-size: 16px;
        line-height: normal;
    }
    body{
        font-family: 'Open Sans', sans-serif;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ddd;
    }
`;

export default GlobalStyle;
