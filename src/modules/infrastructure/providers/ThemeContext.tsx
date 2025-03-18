import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "~/modules/presentation/styled/themes";
import { StyledContainer } from "~/modules/presentation/styled/components/Container";

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
  // 🔹 Detectar el tema del navegador por defecto
  const getPreferredTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // 🔹 Inicializa el estado con el tema del sistema
  const [isDarkTheme, setIsDarkTheme] = useState(getPreferredTheme);

  const toggleTheme = () => setIsDarkTheme((prevTheme) => !prevTheme);

  // 🔹 Agregar listener para detectar cambios de tema en tiempo real
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = (e: MediaQueryListEvent) => {
      setIsDarkTheme(e.matches);
    };

    mediaQuery.addEventListener("change", handleThemeChange);
    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  const value = useMemo(() => ({ isDarkTheme, toggleTheme }), [isDarkTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <StyledContainer>{children}</StyledContainer>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
