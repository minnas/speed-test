import { createUseStyles } from "react-jss";
import { ButtonProps } from "./Button";
import { GameButtonProps } from "./GameButton";
import {
  Itheme,
  layoutFlexColumn,
  layoutFlexRow,
} from "@Components/styles/theme";

type RuleButtonNames = "button";
type RuleGameButtonNames = "gameButton";

export const useButtonStyles = createUseStyles<
  RuleButtonNames,
  ButtonProps,
  Itheme
>({
  button: ({ theme, ...props }) => ({
    ...layoutFlexRow,
    padding: props.padding || "1rem 1.2rem",
    border: props.border || `1px solid ${theme?.highlightColor}`,
    borderRadius: "15px",
    cursor: "pointer",
    transition: "all 0.25s ease",
    backgroundColor: "transparent",
    color: theme?.highlightColor,
    fontSize: "1.6rem",
    margin: props.margin || "unset",
    animation: props.animation || "unset",
    alignSelf: props.alignSelf || "unset",
    "&:hover": {
      color: theme?.highlightColor6,
      cursor: "pointer",
    },
    "&[disabled]": {
      cursor: "not-allowed",
      backgroundColor: theme?.highlightColor3,
    },
  }),
});
export const useGameButtonStyles = createUseStyles<
  RuleGameButtonNames,
  GameButtonProps,
  Itheme
>({
  gameButton: ({ theme, ...props }) => ({
    ...layoutFlexColumn,
    backgroundColor: props.color,
    color: theme?.highlightColor,
    fontSize: "5rem",
    border: props.border || `1px solid ${theme?.highlightColor}`,
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all 0.15s ease",
    width: "150px",
    height: "150px",
    margin: props.margin || "unset",
    "&:hover": {
      opacity: 0.8,
    },
    boxShadow: props.selected
      ? "inset 100em 1em rgb(255, 255, 255, 6)"
      : "none",
  }),
});
