import styled from "styled-components";

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: "100%";
  gap: 70px;
  padding: 7rem;
`;

export const VerticalLine = styled.div`
  height: 150px;
  width: 1px;
  border-left: 1px solid;
`;

export const HorizontalLine = styled.div`
  margin: 50px 0 40px 0;
  width: 80%;
  height: 1px;
  border-bottom: 1px solid;
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 10%;
  gap: 1rem;
  padding-top: 1rem;
`;
