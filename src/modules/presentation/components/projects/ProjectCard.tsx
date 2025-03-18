import { useTranslation } from "react-i18next";
import {
  CardContainer,
  CardImage,
  CardOverlay,
  CardText,
  Category,
  Title,
} from "../../styled/components/Project";
import { Button } from "../../styled/ui/Buttons";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  onClick,
}) => {
  const { t } = useTranslation("common", { keyPrefix: "projects" });

  return (
    <button onClick={onClick}>
      <CardContainer>
        <CardImage src={image} alt={title} />
        <CardOverlay>
          <CardText>
            <Title>{t(title)}</Title>
            <Category className="line-clamp-3 overflow-hidden">
              {t(description)}
            </Category>
            <Button variant="full" onClick={onClick}>
              Ver proyecto
            </Button>
          </CardText>
        </CardOverlay>
      </CardContainer>
    </button>
  );
};
