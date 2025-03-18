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
  repository?: string;
  page?: string;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  repository,
  page,
  onClick,
}) => {
  const { t } = useTranslation("common", { keyPrefix: "projects" });

  const buttonText = repository ? t("viewRepository") : t("viewProject");
  const buttonUrl = repository ?? page;

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
            {buttonUrl && (
              <Button
                variant="full"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(buttonUrl, "_blank");
                }}
              >
                {buttonText}
              </Button>
            )}
          </CardText>
        </CardOverlay>
      </CardContainer>
    </button>
  );
};
