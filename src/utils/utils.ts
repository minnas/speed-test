import { Page } from "@Types/types";
import { faGamepad, faList } from "@fortawesome/free-solid-svg-icons";

//return random number between 0 and max
export const randomNumber = (max: number, exclude: number): number => {
  let random;
  do {
    random = Math.floor(Math.random() * (max + 1));
  } while (random === exclude);
  return random;
};
//app pages
export const pages: Page[] = [
  { path: "/", icon: faGamepad },
  { path: "/result", icon: faList },
];
