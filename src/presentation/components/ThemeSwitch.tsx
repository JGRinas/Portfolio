import React from "react";
import { useTheme } from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

import { SwitchContainer } from "../styled/components/SwitchContainer";

interface ThemeSwitchProps {
  toggleTheme: () => void;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ toggleTheme }) => {
  const theme = useTheme();
  const isDarkTheme = theme.colors.background1 === "#121212";

  return (
    <SwitchContainer onClick={toggleTheme}>
      {isDarkTheme ? <FaSun size={24} /> : <FaMoon size={24} />}
    </SwitchContainer>
  );
};

export default ThemeSwitch;
