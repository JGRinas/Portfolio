import styled from "styled-components";
import { LanguageIcon } from "../assets/icons";

export const LngContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 10px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const LngItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LngIcon = styled(LanguageIcon)`
  height: 20px;
  width: 20px;
  margin: 0 5px;
`;
