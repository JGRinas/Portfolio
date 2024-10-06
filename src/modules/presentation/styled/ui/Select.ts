import styled from "styled-components";

export const Select = styled.select`
  padding: 8px 16px;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.primary};
  background: transparent; /* Hace el fondo transparente */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  align-self: flex-end;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    border-color: ${(props) => props.theme.colors.hover.primary};
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.hover.primary};
    outline: none;
    box-shadow: 0 0 1px 1px ${(props) => props.theme.colors.hover.primary};
  }
`;

export const Option = styled.option`
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  background: transparent;
`;
