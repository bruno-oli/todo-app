import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      bodyBackground: string;
      taskBackground: string;

      taskNameColor: string;
      taskCompletedNameColor: string;

      filterItemsColor: string;
      filterActiveItemColor: string;

      boxShadow: string;

      checkIconBorderColor: string;
    };
  }
}
