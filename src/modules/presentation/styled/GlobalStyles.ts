import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${(props) => props.theme.colors.primary};
    font-family: "Montserrat", sans-serif;
    transition: all 0.25s linear;
    min-height: 100vh;
    margin: 0;
    margin: 0 30px;
  }
  .icon {
    fill: ${(props) => props.theme.colors.primary};
    &:hover {
      fill: ${(props) => props.theme.colors.hover.primary};
    }
  }
  h1, h2, h3, p {
  color: ${(props) => props.theme.colors.primary};
  }
`;
