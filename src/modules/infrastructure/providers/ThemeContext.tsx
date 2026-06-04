import React, {
  createContext,
  useState,
  useLayoutEffect,
  ReactNode,
  useMemo,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "~/modules/presentation/styled/themes";

export interface ThemeContextProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // 🔹 Obtener el tema guardado en `localStorage` o el del sistema
  const getStoredTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";
    return true;
  };

  // 🔹 Estado del tema
  const [isDarkTheme, setIsDarkTheme] = useState(getStoredTheme);

  // 🔹 Función para cambiar el tema y guardarlo
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  // Sync Tailwind dark mode class with theme state
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  const value = useMemo(() => ({ isDarkTheme, toggleTheme }), [isDarkTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
