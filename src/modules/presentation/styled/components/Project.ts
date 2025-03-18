import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2));
  }
`;

export const CardText = styled.div`
  color: #fff;
  text-align: center;
`;

export const Category = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  opacity: 0.8;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: #1e2433;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2c3e50;
  }
`;
