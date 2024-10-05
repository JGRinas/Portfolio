import { TitleL, TitleM, TitleS } from "../../styled/ui/Text";
import { Button } from "../../styled/ui/Buttons";

export const Studies = () => {
  return (
    <article>
      <ul className="flex flex-col gap-4 mt-4">
        <li>
          <TitleL>Estudios</TitleL>
          <TitleM>Analista Programador Universitario - UNNE</TitleM>
          <TitleS>Febrero 2020 – Finalizado</TitleS>
        </li>
      </ul>
      <Button variant="outline" className="mt-4">
        Descargar CV
      </Button>
    </article>
  );
};
