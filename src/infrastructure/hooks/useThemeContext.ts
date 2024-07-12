import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "../providers/ThemeContext";

export const useThemeContext = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
