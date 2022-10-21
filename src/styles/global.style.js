import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        font-size: 16px;
        line-height: normal;
        letter-spacing: 1px;
        color: #051524;
    }
    body{
        font-family: 'Open Sans', sans-serif;
        display: flex;
        justify-content: center;
    }
`;

export default GlobalStyle;
