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
  // 🔹 Obtener el tema guardado en `localStorage` o el del sistema
  const getStoredTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
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

  // 🔹 Solo cambiar el tema del sistema si **no** hay preferencia guardada
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setIsDarkTheme(e.matches);
      }
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
