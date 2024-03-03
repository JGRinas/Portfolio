import styled from "styled-components";

export const Button = styled.button<{ width?: string }>`
  margin: 0 10px;
  background-color: rgba(0, 0, 0, 0.2);
  width: ${(props) => (props.width ? props.width : "150px")};
  color: #fff;
`;
