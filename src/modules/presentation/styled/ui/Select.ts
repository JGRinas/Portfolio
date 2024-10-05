import styled from "styled-components";

// Definimos los posibles valores para el prop variant
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

  background-color: ${({ variant, theme }) =>
    variant === "full" ? theme.colors.primary : "transparent"};
  color: ${({ variant, theme }) =>
    variant === "full" ? theme.colors.secondary : theme.colors.primary};
  border: ${({ variant, theme }) =>
    variant === "outline" ? `2px solid ${theme.colors.primary}` : "none"};

  &:hover {
    background-color: ${({ variant, theme }) =>
      variant === "full" ? "#2c3e50" : theme.colors.primary};
    color: #fff;
    border-color: #2c3e50;
  }
`;
