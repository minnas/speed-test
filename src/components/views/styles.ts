import { createUseStyles } from "react-jss";
import {
  Itheme,
  layoutFlexColumn,
  layoutFlexRow,
} from "@Components/styles/theme";

type RuleFooterNames = "footer";
type RuleHeaderNames = "header";
type RuleContentNames = "content" | "item" | "game" | "subtitle";
type RuleTitleNames = "title" | "icon";
type RuleLayoutNames = "layout";

export const useFooterStyles = createUseStyles<RuleFooterNames, Itheme>({
  footer: (theme) => ({
    ...layoutFlexRow,
    justifyContent: "space-evenly",
    padding: "1rem 2rem",
    flexWrap: "wrap",
    color: theme?.highlightColor,
    marginTop: "auto",
  }),
});
export const useHeaderStyles = createUseStyles<RuleHeaderNames, Itheme>({
  header: (theme) => ({
    padding: "1rem 2rem",
    ...layoutFlexRow,
    justifyContent: "center",
    gridColumnGap: "2rem",
    borderBottom: `4px dashed ${theme?.highlightColor8}`,
    color: theme?.highlightColor,
  }),
});
export const useContentStyles = createUseStyles<RuleContentNames, Itheme>({
  content: () => ({
    ...layoutFlexColumn,
    padding: "1rem 2rem",
    maxWidth: "1200px",
    transition: "all 0.25s ease",
    width: "auto",
    margin: "auto",
  }),
  game: () => ({
    display: "flex",
    columnGap: "2rem",
    padding: "1rem",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }),
  item: (theme) => ({
    ...layoutFlexRow,
    padding: "1rem 2rem",
    color: theme?.highlightColor,
    fontSize: "2rem",
    lineHeight: "2rem",
  }),
  subtitle: (theme) => ({
    ...layoutFlexRow,
    color: theme?.highlightColor,
    fontSize: "2rem",
    lineHeight: "2rem",
  }),
});
export const useTitleStyles = createUseStyles<RuleTitleNames, Itheme>({
  title: (theme) => ({
    fontSize: "2rem",
    color: theme?.highlightColor,
  }),
  icon: (theme) => ({
    boxShadow: `${theme.highlightColor5} 0 10px 1rem`,
    borderRadius: "15px",
    padding: "0 5px",
  }),
});
export const useLayoutStyles = createUseStyles<RuleLayoutNames, Itheme>({
  layout: (theme) => ({
    color: theme?.highlightColor,
    backgroundColor: theme?.bgColor,
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
  }),
});
