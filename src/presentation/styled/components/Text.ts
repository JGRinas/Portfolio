import styled from "styled-components";

export const TitleXXL = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
  position: relative;
`;

export const HighlightedTitle = styled(TitleXXL)`
  color: ${(props) => props.theme.colors.primary};
  &::after {
    content: "";
    position: absolute;
    bottom: -0.2rem;
    left: 0;
    width: 3.5rem;
    height: 0.25rem;
    background-color: ${(props) => props.theme.colors.secondary};
    transform: translateX(0.5rem);
  }
`;

export const Subtitle = styled.h1`
  font-size: 1.2rem;
`;

export const TitleXL = styled.h3`
  font-size: 1rem;
`;
