import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme.colors.primary};
    font-family: "Montserrat", sans-serif;
    transition: color 0.25s linear;
    min-height: 100vh;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  .icon {
    fill: ${(props) => props.theme.colors.primary};
    &:hover {
      fill: ${(props) => props.theme.colors.hover.primary};
    }
  }
`;
