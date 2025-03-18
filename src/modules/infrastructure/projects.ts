import { ProjectItem, ProjectType } from "~/modules/domain/projects";

export const projects: Record<ProjectType, ProjectItem[]> = {
  front: [
    {
      title: "hre.title",
      description: "hre.description",
      page: "https://hre.com.ar",
      image:
        "https://res.cloudinary.com/dca4jaeix/image/upload/fl_preserve_transparency/v1742305421/b76f2dbc-b2e9-4f99-8ae8-4d39cc1b667f.jpg?_s=public-apps",
    },
    {
      title: "visortv_front.title",
      description: "visortv_front.description",
      repository: "https://github.com/JGRinas/VisorTV-Front",
      image:
        "https://res.cloudinary.com/dca4jaeix/image/upload/fl_preserve_transparency/v1742305555/0a00c867-ef3b-4a6d-8019-9e5fd1cea371.jpg?_s=public-apps",
    },
    {
      title: "almotick_front.title",
      description: "almotick_front.description",
      page: "https://almotick.com",
      image:
        "https://res.cloudinary.com/dca4jaeix/image/upload/fl_preserve_transparency/v1742305516/71194c94-4dba-443f-9606-d822be88306f.jpg?_s=public-apps",
    },
  ],
  back: [
    {
      title: "gymback.title",
      description: "gymback.description",
      repository: "https://github.com/JGRinas/GymAppBack",
      image:
        "https://res.cloudinary.com/dca4jaeix/image/upload/fl_preserve_transparency/v1740692744/Captura_de_pantalla_2025-02-27_184454_f4fpjx.jpg?_s=public-apps",
    },
    {
      title: "visortv_back.title",
      description: "visortv_back.description",
      repository: "https://github.com/JGRinas/VisorTV-Back",
      image:
        "https://res.cloudinary.com/dca4jaeix/image/upload/fl_preserve_transparency/v1742305555/0a00c867-ef3b-4a6d-8019-9e5fd1cea371.jpg?_s=public-apps",
    },
    {
      title: "almotick_back.title",
      description: "almotick_back.description",
      page: "https://almotick.com",
      image:
        "https://res.cloudinary.com/dca4jaeix/image/upload/fl_preserve_transparency/v1742305516/71194c94-4dba-443f-9606-d822be88306f.jpg?_s=public-apps",
    },
  ],
  mobile: [
    {
      title: "gymapp.title",
      description: "gymapp.description",
      repository: "https://github.com/JGRinas/GymApp",
      image:
        "https://res.cloudinary.com/dca4jaeix/image/upload/fl_preserve_transparency/v1740692744/Captura_de_pantalla_2025-02-27_184454_f4fpjx.jpg?_s=public-apps",
    },
  ],
  design: [
    {
      title: "portfolio.title",
      description: "portfolio.description",
      page: "https://www.figma.com/design/25971L8psFPGFcYLxtBo0n/Portfolio?node-id=0-1&t=e9gjzzHHT6kpWjpY-1",
      image:
        "https://res.cloudinary.com/dca4jaeix/image/upload/fl_preserve_transparency/v1742305937/97a09a6e-62a5-4e82-9d82-504ec6ec3017.jpg?_s=public-apps",
    },
  ],
};
