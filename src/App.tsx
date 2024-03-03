import { I18nextProvider } from "react-i18next";

import "./App.css";
import i18 from "./i18";
import Home from "./pages";

function App() {
  return (
    <I18nextProvider i18n={i18}>
      <Home />
    </I18nextProvider>
  );
}

export default App;
