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
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardOverlay>
        <CardText>
          <Title>{title}</Title>
          <Category>{description}</Category>
          <Button variant="full" onClick={onClick}>
            Ver proyecto
          </Button>
        </CardText>
      </CardOverlay>
    </CardContainer>
  );
};
