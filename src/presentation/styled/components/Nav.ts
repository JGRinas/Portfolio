import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.background1};
  color: ${(props) => props.theme.colors.text};
`;

export const NavLink = styled.a`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  font-size: 1rem;
  text-transform: uppercase;
  position: relative;
  transition: color 0.3s ease, margin 0.3s ease;
  font-weight: bold;
  
  &::before {
    content: "<";
    margin-right: 2px;
    transition: content 0.3s ease, margin-right 0.3s ease;
  }

  &::after {
    content: ">";
    margin-left: 2px;
    transition: content 0.3s ease, margin-left 0.3s ease;
  }

  &:hover {
    color: ${(props) => props.theme.colors.hover.text};

    &::before {
      content: "< ";
      margin-right: 2px;
    }

    &::after {
      content: " >";
      margin-left: 2px;
    }
  }
`;
