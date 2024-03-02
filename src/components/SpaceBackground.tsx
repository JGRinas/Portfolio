import React from "react";
import { StyledSpaceBackground } from "../styled-components/SpaceBackground";
import useSpaceBackground from "../hooks/useSpaceBackground";

const SpaceBackground: React.FC = () => {
  const containerRef = useSpaceBackground();

  return <StyledSpaceBackground ref={containerRef} />;
};

export default SpaceBackground;
