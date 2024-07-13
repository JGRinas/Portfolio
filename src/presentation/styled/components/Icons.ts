import styled from "styled-components";
import { ArrowBottom } from "~/assets/icons";

const StyledIcon = styled.div`
  svg {
    fill: ${(props) => props.theme.colors.icon};
    transition: fill 0.25s ease-in-out;

    &:hover {
      fill: ${(props) => props.theme.colors.hover.icon};
    }
  }
`;

export const StyledArrowBottom = styled(ArrowBottom)`
  display: flex;
  stroke: ${(props) => props.theme.colors.text};
  justify-content: "center";
  width: 100%;
`;

export default StyledIcon;
