import { useTranslation } from "react-i18next";

import { Nav, NavLink } from "../styled/components/Nav";
import ThemeSwitch from "./ThemeSwitch";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = ["aboutMe", "projects", "experience", "skills", "contact"];

const Navbar: React.FC = () => {
  const { t } = useTranslation("common", { keyPrefix: "nav" });

  return (
    <Nav>
      {navItems.map((item) => (
        <NavLink key={item} href={`#${item}`}>
          {t(item)}
        </NavLink>
      ))}
      <ThemeSwitch />
      <LanguageSwitcher />
    </Nav>
  );
};

export default Navbar;
