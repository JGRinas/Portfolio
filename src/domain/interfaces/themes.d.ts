import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background1: string;
      background2: string;
      text: string;
      icon: string;
      primary: string;
      secondary: string;
      button: {
        full: string;
        outline: string;
      };
      hover: {
        icon: string;
        text: string;
        button: {
          full: string;
          outline: string;
        };
      };
    };
  }
}
