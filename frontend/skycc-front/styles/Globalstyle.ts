import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "210_Sueopsigan_Regular";
        src: url("public/210_Sueopsigan_Regular.ttf") format("truetype");
    }

    body {
        background-color: #d9d9d9;
    }
`;

export default GlobalStyle;
