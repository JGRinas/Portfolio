import React, { createContext, useState, ReactNode, useMemo } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "~/presentation/styled/themes";
import { GlobalStyles } from "~/presentation/styled/GlobalStyles";
import { StyledContainer } from "~/presentation/styled/components/Container";

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
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme((prevTheme) => !prevTheme);

  const value = useMemo(() => ({ isDarkTheme, toggleTheme }), [isDarkTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <StyledContainer>
          <GlobalStyles />
          {children}
        </StyledContainer>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
