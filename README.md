# My Portfolio

Welcome to my portfolio! This project showcases my skills and projects as a Full Stack Developer, including front-end, back-end, mobile development, and design. The portfolio is built with React and TypeScript using Vite and follows the Clean Architecture principles.

## Features

- **Clean Architecture**: Ensures a maintainable and scalable codebase.
- **i18next**: For internationalization support.
- **Styled Components**: For styling the application with support for light and dark themes.
- **Vite Plugin SVGR**: For importing SVG icons as React components.
- **Dark/Light Theme**: Toggle between dark and light themes.

## Project Structure

The project is organized as follows:
```
/Portfolio
├── public
│ └── index.html
├── src
│ ├── domain
│ │ ├── interfaces
│ ├── infrastructure
│ │ ├── config
│ │ └── hooks
│ ├── presentation
│ │ ├── components
│ │ ├── routes
│ │ ├── styles
│ │ ├── styled
│ │ └── pages
│ ├── assets
│ │ ├── images
│ │ ├── icons
│ │ └── fonts
│ ├── main.tsx
│ └── index.tsx
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```
## Technologies Used

### Front-end

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **Styled Components**: Utilized for styling the application with both light and dark theme support.
- **Vite Plugin SVGR**: Used for importing SVG icons as React components.
- **i18next**: Integrated for internationalization, allowing the application to support multiple languages.

### Design and UX/UI

- **Figma**: Used for designing user interfaces and creating prototypes.

### Theming

The application supports both light and dark themes, providing a better user experience based on user preferences. The theme toggle button is located in the header. Themes are customized in the `src/presentation/styled/themes` directory.

### Icons

SVG icons are imported as React components using the Vite Plugin SVGR. Icons are located in the `src/assets/icons` directory and are used throughout the application to maintain a consistent look and feel.

## Contact

If you have any questions or would like to get in touch, feel free to contact me:

Your Name - [juangabrielrinas@gmail.com](mailto:juangabrielrinas@gmail.com)
