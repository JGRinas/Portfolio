import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
  min-height: 70vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
  overflow-x: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    padding: 0;
  }
`;
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid;
  margin-bottom: 50px;
  overflow-x: hidden;

  padding: 50px 0;
`;
