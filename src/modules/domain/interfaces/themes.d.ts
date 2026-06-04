import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    colors: {
      primary: string;
      secondary: string;
      hover: {
        primary: string;
        secondary: string;
      };
    };
    gradients: {
      mobileBackground: string;
    };
  }
}
