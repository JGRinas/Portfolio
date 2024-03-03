import React from "react";
import { StyledSpaceBackground } from "../styled-components/space-background";
import { useSpaceBackground } from "../providers/hooks/use-space-background";

const SpaceBackground: React.FC = () => {
  const { containerRef } = useSpaceBackground();

  return <StyledSpaceBackground ref={containerRef} />;
};

export default SpaceBackground;
