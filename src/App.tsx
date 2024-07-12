import { I18nextProvider } from "react-i18next";

import Home from "./presentation/pages";
import i18 from "~/infrastructure/config/i18";
import { ThemeProvider } from "./infrastructure/providers/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18}>
        <Home />
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
