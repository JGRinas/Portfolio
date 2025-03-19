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
  AngularIcon,
  PythonIcon,
  AWSIcon,
} from "../../../../assets/icons";
import { useTranslation } from "react-i18next";
import { SlideIn } from "../animations/slide-in";

const technologies = {
  frontEnd: [
    { icon: ReactIcon, title: "React" },
    { icon: NextIcon, title: "Next.js" },
    { icon: VueIcon, title: "Vue.js" },
    { icon: AngularIcon, title: "Angular" },
  ],
  backEnd: [
    { icon: NodeIcon, title: "Node.js" },
    { icon: ExpressIcon, title: "Express" },
    { icon: PhpIcon, title: "PHP" },
    { icon: MongoIcon, title: "MongoDB" },
    { icon: MySqlIcon, title: "MySQL" },
    { icon: SqlIcon, title: "SQL" },
    { icon: PythonIcon, title: "Python" },
  ],
  mobile: [
    { icon: ExpoIcon, title: "Expo" },
    { icon: ReactIcon, title: "React Native" },
  ],
  devOps: [
    { icon: DockerIcon, title: "Docker" },
    { icon: GitIcon, title: "Git" },
    { icon: GithubIcon, title: "GitHub" },
    { icon: GitlabIcon, title: "GitLab" },
    { icon: AWSIcon, title: "Amazon S3" },
    { icon: AWSIcon, title: "Amazon CloudFront" },
    { icon: AWSIcon, title: "Amazon Route 53" },
    { icon: AWSIcon, title: "Amazon CM" },
  ],
  tools: [
    { icon: JestIcon, title: "Jest" },
    { icon: TestingLibraryIcon, title: "Testing Library" },
    { icon: FigmaIcon, title: "Figma" },
    { icon: PostmanIcon, title: "Postman" },
  ],
};

export const Technologies = () => {
  const { t } = useTranslation("common", { keyPrefix: "technologies" });

  return (
    <article>
      <TitleL className="mb-4 text-center md:text-start">{t("title")}</TitleL>

      {Object.entries(technologies).map(([category, techs]) => (
        <section
          key={category}
          className="mb-6 flex flex-col items-center md:!items-start "
        >
          <h3 className="text-xl font-bold mb-2">
            {t(`categories.${category}`)}
          </h3>
          <div
            style={{ gap: "20px", flexWrap: "wrap" }}
            className="ml-2 flex justify-center md:!justify-start"
          >
            {techs.map(({ icon, title }) => (
              <SlideIn key={title}>
                <TechnologyCard icon={icon} title={title} />
              </SlideIn>
            ))}
          </div>
        </section>
      ))}
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
