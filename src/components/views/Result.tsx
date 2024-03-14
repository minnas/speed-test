import { ReactElement } from "react";
import { useContentStyles } from "./styles";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";
import { Score } from "@Types/types";
import { useSelector } from "react-redux";
import { RootState } from "@Store/store";

const Result = (): ReactElement => {
  const theme = useTheme<Itheme>();
  const stylesContent = useContentStyles(theme);
  //store functions
  const scores = useSelector((state: RootState) => state.scores);

  const formatDate = (time: number) => new Date(time).getUTCDate();

  return (
    <div className={stylesContent.content}>
      {scores.map((score: Score, index: number) => (
        <div key={index}>
          {formatDate(score.timestamp)} : {score.score}
        </div>
      ))}
    </div>
  );
};

export default Result;
