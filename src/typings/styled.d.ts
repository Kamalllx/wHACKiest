import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: {
        dark: {
          white: string;
          gray: string;
          black: string;
        };
        light: {
          black: string;
          gray: string;
          white: string;
        };
      };
      primary: {
        blue: string;
        purple: string;
        pink: string;
        yellow: string;
        green: string;
        white: string;
      };
      secondary: {
        blue: string;
        purple: string;
        pink: string;
        yellow: string;
        green: string;
        white: string;
        navy: string;
      };
      state: {
        error: string;
        success: string;
        infomative: string;
        warning: string;
      };
    };
  }
}

