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
  align-items: start;
  flex-direction: column;
  justify-content: center;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid;
  margin-bottom: 50px;
  padding: 50px 0;
`;
