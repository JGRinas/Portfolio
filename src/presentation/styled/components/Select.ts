import styled from "styled-components";

export const Select = styled.select`
  padding: 8px 16px;
  border: 1px solid ${(props) => props.theme.colors.button.outline};
  background-color: ${(props) => props.theme.colors.background2};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.text};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  &:hover {
    border-color: ${(props) => props.theme.colors.hover.button.outline};
  }
  &:focus {
    border-color: ${(props) => props.theme.colors.hover.button.outline};
    outline: none;
    box-shadow: 0 0 1px 1px
      ${(props) => props.theme.colors.hover.button.outline};
  }
`;

export const Option = styled.option`
  background-color: ${(props) => props.theme.colors.background1};
  color: ${(props) => props.theme.colors.text};
`;
