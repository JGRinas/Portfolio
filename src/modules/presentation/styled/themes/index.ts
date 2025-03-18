import { DefaultTheme } from "styled-components";
import backgroundLight from "~/assets/images/background.jpg";
import backgroundDark from "~/assets/images/background-black.jpg";

export const lightTheme: DefaultTheme = {
  background: backgroundLight,
  colors: {
    primary: "#252B42",
    secondary: "#f1f1f1",
    hover: {
      primary: "#252B42",
      secondary: "#171717",
    },
  },
};

export const darkTheme: DefaultTheme = {
  background: backgroundDark,
  colors: {
    primary: "#E4E4E4",
    secondary: "#171717",
    hover: {
      primary: "#2C3E50",
      secondary: "#3A506B",
    },
  },
};
