import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
`;

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.background1};
  display: flex;
`;
