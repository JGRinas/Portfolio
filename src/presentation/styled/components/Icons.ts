import styled from 'styled-components';

const StyledIcon = styled.div`
  svg {
    fill: ${(props) => props.theme.colors.icon};
    transition: fill 0.25s ease-in-out;

    &:hover {
      fill: ${(props) => props.theme.colors.hover.icon};
    }
  }
`;

export default StyledIcon;