import { IconProp } from "@fortawesome/fontawesome-svg-core";

/**
 * Represents game score object
 */
export type Score = {
  id?: string;
  user?: string;
  score: number;
  timestamp: number;
};
/**Theme */
export type Theme = {
  theme: "light" | "dark";
};

export type Page = {
  path: string;
  icon: IconProp;
};
