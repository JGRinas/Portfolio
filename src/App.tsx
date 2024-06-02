import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "./presentation/styled/themes";
import { GlobalStyles } from "./presentation/styled/GlobalStyles";
import Home from "./presentation/pages";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme((prevTheme) => !prevTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Home toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
