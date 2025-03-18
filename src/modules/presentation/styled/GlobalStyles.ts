import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${(props) => props.theme.colors.primary};
    font-family: "Montserrat", sans-serif;
    transition: all 0.25s linear;
    min-height: 100vh;
    margin: 0 5rem;
    @media (max-width: 768px) {
    margin: 0;
  }
  }
  .icon {
    fill: ${(props) => props.theme.colors.primary};
    &:hover {
      fill: ${(props) => props.theme.colors.hover.primary};
    }
  }
`;
