import { IconProp } from "@fortawesome/fontawesome-svg-core";

//game score
export type Score = {
  id?: string;
  user?: string;
  score: number;
  timestamp: number;
};
//theme
export type Theme = {
  theme: "light" | "dark";
};
//page type for footer
export type Page = {
  path: string;
  icon: IconProp;
};
