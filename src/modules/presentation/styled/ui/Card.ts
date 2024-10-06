import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100px;
  height: 140px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;

  svg,
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
