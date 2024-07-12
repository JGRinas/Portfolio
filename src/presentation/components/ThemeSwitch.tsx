import { FaSun, FaMoon } from "react-icons/fa";

import { SwitchContainer } from "../styled/components/SwitchContainer";
import { useThemeContext } from "~/infrastructure/hooks/useThemeContext";

const ThemeSwitch = () => {
  const { toggleTheme, isDarkTheme } = useThemeContext();

  return (
    <SwitchContainer onClick={toggleTheme}>
      {isDarkTheme ? <FaSun size={24} /> : <FaMoon size={24} />}
    </SwitchContainer>
  );
};

export default ThemeSwitch;
