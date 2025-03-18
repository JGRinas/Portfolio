import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 110px;
  height: 140px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05); /* 🔹 Se agranda un 5% */
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15); /* 🔹 Aumenta la sombra */
  }
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
