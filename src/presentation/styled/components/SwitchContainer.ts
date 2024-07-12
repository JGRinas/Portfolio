import styled from "styled-components";

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.icon};
  &:hover {
    color: ${(props) => props.theme.colors.hover.icon};
  }
  background-color: ${(props) => props.theme.colors.background2};
  padding: 8px;
  border-radius: 5px;
`;
