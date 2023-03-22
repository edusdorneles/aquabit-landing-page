import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;

      textWhite: string;
      textBlack: string;
    };

    fontSize: {
      extraSmall: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
      title: string;
      extraTitle: string;
    };

    borderRadius: string;
    transition: string;
    margin: string;
    boxShadow: string;

    // Media Query
    media: {
      desktop: string;
    };
  }
}
