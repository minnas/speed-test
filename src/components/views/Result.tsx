import { ReactElement } from "react";
import { useContentStyles } from "./styles";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";
import { Score } from "@Types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@Store/store";
import { formatDate } from "@Utils/utils";
import Button from "@Components/tools/Button";
import { removeScore } from "@Store/dataSlices";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

//Scores
const Result = (): ReactElement => {
  const theme = useTheme<Itheme>();
  const stylesContent = useContentStyles(theme);
  //store functions
  const dispatch = useDispatch();
  const scores = useSelector((state: RootState) => state.scores);

  const remove = (id: string | undefined) => {
    if (id) {
      dispatch(removeScore({ id }));
    }
  };

  return (
    <div className={stylesContent.content}>
      <h2 className={stylesContent.subtitle}>Saved Scores</h2>
      {scores.map((score: Score, index: number) => (
        <div key={index} className={stylesContent.item}>
          <div>
            {formatDate(score.timestamp)} : {score.score}
          </div>
          <Button onClick={() => remove(score.id)} icon={faTimes} />
        </div>
      ))}
    </div>
  );
};

export default Result;
