import { ProjectItem, ProjectType } from "~/modules/domain/projects";

export const projects: Record<ProjectType, ProjectItem[]> = {
  back: [
    {
      title: "Gym App Backend",
      description:
        "Desarrollado para la gestión de un gimnasio, que permite a los usuarios y administradores gestionar planes de entrenamiento, ejercicios, rutinas y más. ",
      repository: "https://github.com/JGRinas/GymAppBack",
      image: "/path/to/image2.jpg",
    },
  ],
  front: [
    {
      title: "Frontend Project 1",
      description: "Descripción del proyecto frontend 1",
      image: "/path/to/image1.jpg",
    },
    {
      title: "Frontend Project 2",
      description: "Descripción del proyecto frontend 2",
      image: "/path/to/image2.jpg",
    },
  ],
  mobile: [
    {
      title: "Gym App",
      description:
        "Esta aplicación está diseñada para facilitar la interacción entre usuarios y su rutina de entrenamiento en un gimnasio",
      repository: "https://github.com/JGRinas/GymApp",
      image:
        "https://res.cloudinary.com/dca4jaeix/image/upload/fl_preserve_transparency/v1740692744/Captura_de_pantalla_2025-02-27_184454_f4fpjx.jpg?_s=public-apps",
    },
  ],
  design: [
    {
      title: "Portfolio",
      description: "Diseño web y mobile de este portfolio",
      repository:
        "https://www.figma.com/design/25971L8psFPGFcYLxtBo0n/Portfolio?node-id=0-1&t=e9gjzzHHT6kpWjpY-1",
      image: "/path/to/image1.jpg",
    },
    {
      title: "Medlar",
      description: "Diseño web responsive de una red social estilo Taringa",
      repository:
        "https://www.figma.com/design/IZXsRq82jucUpJVejgrsTl/Untitled?node-id=5-45&node-type=canvas&t=qlYjsWLYPWXxwBSD-0",
      image: "/path/to/image1.jpg",
    },
  ],
};
