import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  colors: {
    background1: "#f0f0f0",
    background2: "#e0e0e0",
    text: "#171717",
    primary: "#00bfff",
    secondary: "#171717",
    icon: "#171717",
    button: {
      full: "#121827",
      outline: "#ffffff",
    },
    hover: {
      icon: "#000000",
      text: "#0a0a0a",
      button: {
        full: "#0a0a0a",
        outline: "#e0e0e0",
      },
    },
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    background1: "#161616",
    background2: "#181f20",
    text: "#a7a9a9",
    primary: "#00bfff",
    secondary: "#e0e0e0",
    icon: "#e0e0e0",
    button: {
      full: "#ffffff",
      outline: "#121212",
    },
    hover: {
      icon: "#f5f5f5",
      text: "#fafafa",
      button: {
        full: "#e0e0e0",
        outline: "#2e2e2e",
      },
    },
  },
};
