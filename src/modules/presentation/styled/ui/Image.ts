import styled from "styled-components";

interface RoundImageProps {
  size?: string;
}

export const RoundImage = styled.img<RoundImageProps>`
  width: ${({ size }) => size ?? "100px"};
  height: ${({ size }) => size ?? "100px"};
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;
