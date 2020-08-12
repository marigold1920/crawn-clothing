import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Open Sans Condensed", sans-serif;
        font-weight: 500;
        padding: 20px 60px;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    a {
        text-decoration: none;
        color: #000;
    }

    * {
        box-sizing: border-box;
        font-weight: 500;
    }
`;
