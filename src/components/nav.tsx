import React from "react";

import { NavButton, NavContainer } from "../styled-components/nav";
import { useSpaceBackground } from "../providers/hooks/use-space-background";

const NavSection: React.FC = () => {
  const { travelToSection } = useSpaceBackground();

  return (
    <NavContainer>
      <NavButton onClick={() => travelToSection(-1000)}>Home</NavButton>
      <NavButton onClick={() => travelToSection(-600)}>Contacto</NavButton>
      <NavButton onClick={() => travelToSection(-200)}>Proyectos</NavButton>
      <NavButton onClick={() => travelToSection(200)}>Sobre mi</NavButton>
      <NavButton onClick={() => travelToSection(600)}>Experiencia</NavButton>
    </NavContainer>
  );
};

export default NavSection;
