import styled from "styled-components";

export const PresentationContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background1};
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 7rem;
`;

export const VerticalLine = styled.div`
  height: 150px;
  width: 1px;
  border-left: 1px solid;
`;

export const SocialContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background1};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
`;
