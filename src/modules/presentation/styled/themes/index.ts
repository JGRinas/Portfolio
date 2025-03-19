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
  gradients: {
    mobileBackground: "linear-gradient(135deg, #ffffff,#aca6a6)", // 🔹 Fondo claro para móviles
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
  gradients: {
    mobileBackground: "linear-gradient(135deg,#151e27,#0c0b0b)", // 🔹 Fondo oscuro para móviles
  },
};
