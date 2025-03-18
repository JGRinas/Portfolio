import styled from "styled-components";

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
  &:hover {
    color: ${(props) => props.theme.colors.hover.primary};
  }
  padding: 8px;
  border-radius: 5px;
`;
