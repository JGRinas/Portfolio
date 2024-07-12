import { PresentationContainer } from "../styled/components/Presentation";
import {
  HighlightedTitle,
  Subtitle,
  TitleXXL,
} from "../styled/components/Text";

export const Presentation = () => {
  return (
    <PresentationContainer>
      <HighlightedTitle>Full-Stack</HighlightedTitle>
      <TitleXXL style={{ marginLeft: 50, marginTop: -30 }}>Developer</TitleXXL>
      <Subtitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci
        odit soluta temporibus sint consectetur suscipit itaque sapiente illum
        earum.
      </Subtitle>
    </PresentationContainer>
  );
};
