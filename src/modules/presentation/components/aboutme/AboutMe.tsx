import { useTranslation } from "react-i18next";
import { Text, TitleL } from "../../styled/ui/Text";
import { Experience } from "./experience";
import { Technologies } from "./technologies";
import { Studies } from "./Studies";

export const AboutMe = () => {
  const { t } = useTranslation("common");
  return (
    <section className="grid grid-cols-2 gap-[40px]">
      <div>
        <article className="mb-4">
          <TitleL className="mb-4">Sobre Mi</TitleL>
          <Text>
            Soy Juan Gabriel Bentiez Rinas, desarrollador Full-Stack y Mobile
            con más de 2 años de experiencia. Graduado como Analista programador
            universitario en la Universidad Nacional del Nordeste (UNNE), me
            gusta aprender nuevas tecnologías y explorar herramientas
            innovadoras.
          </Text>
        </article>
        <Technologies />
      </div>
      <div>
        <Experience />
        <Studies />
      </div>
    </section>
  );
};
