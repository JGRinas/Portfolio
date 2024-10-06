import { GithubIcon, GitlabIcon, LinkedinIcon } from "~/assets/icons";
import { SocialContainer } from "../styled/components/Presentation";
import StyledIcon from "../styled/components/Icons";

export const SocialMedia: React.FC = () => (
  <SocialContainer>
    <a href="https://github.com/JGRinas" target="_blank">
      <StyledIcon>
        <GithubIcon width={30} height={30} />
      </StyledIcon>
    </a>
    <a href="https://gitlab.com/juangabrielrinas1" target="_blank">
      <StyledIcon>
        <GitlabIcon width={30} height={30} />
      </StyledIcon>
    </a>
    <a href="https://www.linkedin.com/in/juangabrielrinas/" target="_blank">
      <StyledIcon>
        <LinkedinIcon width={30} height={30} />
      </StyledIcon>
    </a>
  </SocialContainer>
);
