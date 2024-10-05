import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      hover: {
        primary: string;
        secondary: string;
      };
    };
  }
}
