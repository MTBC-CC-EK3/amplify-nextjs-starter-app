import { UserType } from "../constants";

export type ThemeSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export type SpacingSize = "none" | ThemeSize;

export type FontSize = "base" | ThemeSize;

export type FontWeight = "light" | "normal" | "medium" | "semibold" | "bold";

export type JustifyContent =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly";

export type AlignItems =
  | "normal"
  | "start"
  | "end"
  | "center"
  | "baseline"
  | "stretch";

export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type User = {
  name: { firstName: string; lastName: string };
  contact: { email: string; phone: string };
  picture: string;
  resume: string;
  userType: UserType;
};
