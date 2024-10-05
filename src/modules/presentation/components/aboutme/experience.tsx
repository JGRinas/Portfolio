import { Text, TitleL, TitleM, TitleS } from "../../styled/ui/Text";

export const Experience = () => {
  return (
    <article className="mb-4">
      <TitleL>Experiencia</TitleL>
      <TitleM>Full-Stack & Mobile Developer - MacroIntell</TitleM>
      <TitleS>Abril 2023 – Actualidad</TitleS>
      <ul className="flex flex-col gap-4 mt-4">
        <li>
          <Text>
            Lidero el equipo de desarrollo Mobile, estableciendo objetivos de
            sprint y mentorando a desarrolladores trainee.
          </Text>
        </li>
        <li>
          <Text>
            Desarrollo de una billetera virtual con Expo y TypeScript, y de una
            app de e-commerce con React Native CLI, aplicando Clean
            Architecture.
          </Text>
        </li>
        <li>
          <Text>Creación librería UI para uso interno entre proyectos.</Text>
        </li>
        <li>
          <Text>
            Implementación de funcionalidades en una plataforma web educativa
            con NextJS y NodeJS.
          </Text>
        </li>
      </ul>
      <TitleM className="mt-4">Front-End - Freelance</TitleM>
      <TitleS>Septiembre 2023 – Septiembre 2024</TitleS>
      <ul className="flex flex-col gap-4 mt-4">
        <li>
          <Text>
            Desarrollo de nuevas secciones para el Front-End de un Back-Office
            con ReactJS.
          </Text>
        </li>
        <li>
          <Text>
            Creación de una plataforma para la gestión de redes sociales de
            influencers usando NextJS y TypeScript.
          </Text>
        </li>
      </ul>
    </article>
  );
};
