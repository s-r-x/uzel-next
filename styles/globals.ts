import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #75B79E;
  }
  @font-face {
    font-family: "Gilroy";
    src: url("/fonts/Gilroy-Regular.woff") format("woff");
    font-weight: 400;
  }
  @font-face {
    font-family: "Gilroy";
    src: url("/fonts/Gilroy-Black.woff") format("woff");
    font-weight: 900;
  }
  @font-face {
    font-family: "Gilroy";
    src: url("/fonts/Gilroy-Medium.woff") format("woff");
    font-weight: 500;
  }
  html,
  body {
    font-family: Gilroy, sans-serif;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    outline: none;

    background: transparent;
    color: inherit;
    font: inherit;
    cursor: pointer;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  }

`;
