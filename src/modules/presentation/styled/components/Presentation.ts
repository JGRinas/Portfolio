import styled from "styled-components";

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  gap: 70px;
  padding: 2rem 0 15rem 0;
`;

export const VerticalLine = styled.div`
  height: 150px;
  width: 1px;
  border-left: 1px solid;
`;

export const HorizontalLine = styled.div`
  margin: 10px 0 40px 0;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid;
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 100%;
  justify-content: space-around;
  gap: 1rem;
  padding-top: 1rem;
`;
