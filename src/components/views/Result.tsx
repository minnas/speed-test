import { ReactElement } from "react";
import { useContentStyles } from "./styles";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";
import { Score } from "@Types/types";
import { useSelector } from "react-redux";
import { RootState } from "@Store/store";
import { formatDate } from "@Utils/utils";

const Result = (): ReactElement => {
  const theme = useTheme<Itheme>();
  const stylesContent = useContentStyles(theme);
  //store functions
  const scores = useSelector((state: RootState) => state.scores);

  return (
    <div className={stylesContent.content}>
      <h2 className={stylesContent.subtitle}>Saved Scores</h2>
      {scores.map((score: Score, index: number) => (
        <div key={index} className={stylesContent.item}>
          {formatDate(score.timestamp)} : {score.score}
        </div>
      ))}
    </div>
  );
};

export default Result;
