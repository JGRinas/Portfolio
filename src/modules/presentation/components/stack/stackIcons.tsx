import type { ComponentType, SVGProps } from "react";
import {
  SiApachecouchdb,
  SiCloudflare,
  SiFirebase,
  SiGithubactions,
  SiKotlin,
  SiNestjs,
  SiPostgresql,
  SiRailway,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import {
  AngularIcon,
  AWSIcon,
  DockerIcon,
  ExpoIcon,
  ExpressIcon,
  FigmaIcon,
  GitIcon,
  JestIcon,
  MongoIcon,
  MySqlIcon,
  NextIcon,
  NodeIcon,
  PhpIcon,
  PostmanIcon,
  PythonIcon,
  ReactIcon,
  TestingLibraryIcon,
  VueIcon,
} from "~/assets/icons";
import { StackItemKey } from "~/modules/infrastructure/stack";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;
type RiIcon = ComponentType<{ size?: number; className?: string }>;

const svg = (Icon: SvgIcon): RiIcon => {
  const Wrapped = ({
    size = 22,
    className,
  }: {
    size?: number;
    className?: string;
  }) => <Icon width={size} height={size} className={className} />;
  return Wrapped;
};

export const STACK_ICONS: Partial<Record<StackItemKey, RiIcon>> = {
  react: svg(ReactIcon),
  nextjs: svg(NextIcon),
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  vite: SiVite,
  angular: svg(AngularIcon),
  vuejs: svg(VueIcon),
  nodejs: svg(NodeIcon),
  express: svg(ExpressIcon),
  python: svg(PythonIcon),
  php: svg(PhpIcon),
  nestjs: SiNestjs,
  reactNative: svg(ReactIcon),
  expo: svg(ExpoIcon),
  kotlin: SiKotlin,
  swift: SiSwift,
  mongodb: svg(MongoIcon),
  mysql: svg(MySqlIcon),
  postgresql: SiPostgresql,
  firebase: SiFirebase,
  couchdb: SiApachecouchdb,
  aws: svg(AWSIcon),
  docker: svg(DockerIcon),
  cloudflare: SiCloudflare,
  githubActions: SiGithubactions,
  railway: SiRailway,
  ecr: svg(AWSIcon),
  ecs: svg(AWSIcon),
  s3: svg(AWSIcon),
  git: svg(GitIcon),
  figma: svg(FigmaIcon),
  postman: svg(PostmanIcon),
  jest: svg(JestIcon),
  testingLibrary: svg(TestingLibraryIcon),
};
