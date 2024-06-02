import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "./presentation/styled/themes";
import { GlobalStyles } from "./presentation/styled/GlobalStyles";
import Home from "./presentation/pages";
import { I18nextProvider } from "react-i18next";
import i18 from "~/infrastructure/config/i18";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme((prevTheme) => !prevTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <I18nextProvider i18n={i18}>
        <GlobalStyles />
        <Home toggleTheme={toggleTheme} />
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
