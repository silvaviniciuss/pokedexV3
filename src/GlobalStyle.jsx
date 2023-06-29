import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 16px;
        /* overflow: hidden; */
        font-family: 'Poppins';
        font-weight: 700;
    }

    html {
        font-size: 62.5%;
    }
`