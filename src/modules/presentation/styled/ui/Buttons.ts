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
  background-color: ${({ theme, variant }) =>
    variant === "full" ? theme.colors.primary : "transparent"};
  color: ${({ theme, variant }) =>
    variant === "full" ? theme.colors.secondary : theme.colors.primary};
  border: ${({ theme, variant }) =>
    variant === "outline" ? `2px solid ${theme.colors.primary}` : "none"};

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === "full" ? theme.colors.hover.primary : theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.hover.primary};
  }
`;
