import { FunctionComponent, SVGProps } from "react";
import { CardContainer, IconWrapper } from "../../styled/ui/Card";
import { TitleL, TitleM } from "../../styled/ui/Text";
import {
  DockerIcon,
  ExpoIcon,
  ExpressIcon,
  FigmaIcon,
  GitIcon,
  GithubIcon,
  GitlabIcon,
  JestIcon,
  MongoIcon,
  MySqlIcon,
  NextIcon,
  NodeIcon,
  PhpIcon,
  ReactIcon,
  PostmanIcon,
  SqlIcon,
  TestingLibraryIcon,
  VueIcon,
} from "../../../../assets/icons";
import { useTranslation } from "react-i18next";
import { FadeIn } from "../animations/fade-in";
import { SlideIn } from "../animations/slide-in";

const icons = [
  { icon: DockerIcon, title: "Docker" },
  { icon: ExpoIcon, title: "Expo" },
  { icon: ExpressIcon, title: "Express" },
  { icon: FigmaIcon, title: "Figma" },
  { icon: GitIcon, title: "Git" },
  { icon: GithubIcon, title: "GitHub" },
  { icon: GitlabIcon, title: "GitLab" },
  { icon: JestIcon, title: "Jest" },
  { icon: MongoIcon, title: "MongoDB" },
  { icon: MySqlIcon, title: "MySQL" },
  { icon: NextIcon, title: "Next.js" },
  { icon: NodeIcon, title: "Node.js" },
  { icon: PhpIcon, title: "PHP" },
  { icon: ReactIcon, title: "React" },
  { icon: PostmanIcon, title: "Postman" },
  { icon: SqlIcon, title: "SQL" },
  { icon: TestingLibraryIcon, title: "Testing Library" },
  { icon: VueIcon, title: "Vue.js" },
];

export const Technologies = () => {
  const { t } = useTranslation("common", { keyPrefix: "technologies" });

  return (
    <article>
      <TitleL className="mb-4">{t("title")}</TitleL>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {icons.map(({ icon, title }) => (
          <SlideIn key={title}>
            <TechnologyCard icon={icon} title={title} />
          </SlideIn>
        ))}
      </div>
    </article>
  );
};

interface ITechnologyCard {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  title: string;
}

const TechnologyCard = ({ icon: Icon, title }: ITechnologyCard) => (
  <CardContainer>
    <IconWrapper>
      <Icon />
    </IconWrapper>
    <TitleM>{title}</TitleM>
  </CardContainer>
);
