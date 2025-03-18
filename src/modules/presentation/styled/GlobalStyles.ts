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
    transition: all 0.25s linear;
    min-height: 100vh;
    margin: 0 5rem;
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    background: ${(props) => props.theme.colors.secondary};
    background-image: ${(props) => `url(${props.theme.background})`}; 
    background-position: center;
    background-repeat: repeat-y;
    background-size: cover;
    background-attachment: fixed;

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
