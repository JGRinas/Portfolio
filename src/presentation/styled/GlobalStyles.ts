import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.background1} 0%,
      ${(props) => props.theme.colors.background1} 85%,
      ${(props) => props.theme.colors.background2} 100%
    );
    color: ${(props) => props.theme.colors.text};
    font-family: 'Roboto', sans-serif;
    transition: all 0.25s linear;
    min-height: 100vh;
    margin: 0;
  }
  pre {
    font-family: 'Courier New', Courier, monospace;
  }
  .icon {
    fill: ${(props) => props.theme.colors.icon};
    &:hover {
      fill: ${(props) => props.theme.colors.hover.icon};
    }
  }
`;
