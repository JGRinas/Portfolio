import styled from "styled-components";

interface ButtonProps {
  variant: "full" | "outline";
}

export const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;

  /* Estilos según el prop variant */
  background-color: ${({ variant }) =>
    variant === "full" ? "#1E2433" : "transparent"};
  color: ${({ variant }) => (variant === "full" ? "#fff" : "#1E2433")};
  border: ${({ variant }) =>
    variant === "outline" ? "2px solid #1E2433" : "none"};

  &:hover {
    background-color: ${({ variant }) =>
      variant === "full" ? "#2c3e50" : "#1E2433"};
    color: #fff;
    border-color: #2c3e50;
  }
`;
