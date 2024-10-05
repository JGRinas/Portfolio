import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${(props) => props.theme.colors.text};
    font-family: "Montserrat", sans-serif;
    transition: all 0.25s linear;
    min-height: 100vh;
    margin: 0;
  }
  .icon {
    fill: ${(props) => props.theme.colors.icon};
    &:hover {
      fill: ${(props) => props.theme.colors.hover.icon};
    }
  }
  h1, h2, h3 {
    font-weight: 'bold';
  }
  p {
    font-weight: 500;
  }
`;
