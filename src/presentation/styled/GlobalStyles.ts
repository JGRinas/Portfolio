import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.text};
    font-family: 'Roboto', sans-serif;
    transition: all 0.25s linear;
    min-height: 100vh;
  }
  .icon {
    fill: ${(props) => props.theme.colors.icon};
    &:hover {
      fill: ${(props) => props.theme.colors.hover.icon};
    }
  }
`;
