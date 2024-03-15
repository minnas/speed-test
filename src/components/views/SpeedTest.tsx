import { ReactElement, useState } from "react";
import { useContentStyles } from "./styles";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";
import GameButton, { ButtonColor } from "@Components/tools/GameButton";
import Button from "@Components/tools/Button";
import { useInterval } from "@Hooks/useInterval";
import { useDispatch } from "react-redux";
import { randomNumber } from "@Utils/utils";
import { addScore } from "@Store/dataSlices";
import { Score } from "@Types/types";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

//Speed test
const SpeedTest = (): ReactElement => {
  //theme
  const theme = useTheme<Itheme>();
  const stylesContent = useContentStyles(theme);
  //store functions
  const dispatch = useDispatch();
  //states
  const [time, setTime] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1500);
  const [current, setCurrent] = useState<number>(-1);
  const [score, setScore] = useState<number>(0);
  const [order, setOrder] = useState<number[]>([]);
  const [saved, setSaved] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  //game button colours
  const colors: ButtonColor[] = ["RED", "YELLOW", "GREEN", "ORANGE"];

  //how many seconds game is running
  useInterval(
    () => {
      setTime(time + 1);
    },
    gameStarted ? 1000 : null
  );
  //higlight next circle
  useInterval(
    () => {
      nextCircle();
    },
    gameStarted ? speed : null
  );
  //next highlighted circle
  const nextCircle = () => {
    //next random highlighted circle
    const nextActive = randomNumber(3, current);
    const tmp = order;
    tmp.push(nextActive);
    //update game state
    setCurrent(nextActive);
    setSpeed(speed * 0.95);
    setOrder(tmp);
    setSpeed(speed * 0.95);
  };
  //game button click
  const onClick = (id: number) => {
    const copy = order;
    const test = copy.shift();
    //check if correct circle clicked
    if (test !== id) {
      stop();
      setGameOver(true);
      setTimeout(() => {
        setGameOver(false);
      }, 1500);
      return;
    }
    //update game state
    setOrder(copy);
    setScore(score + 1);
  };
  //reset game
  const reset = () => {
    setCurrent(-1);
    setSpeed(1500);
    setOrder([]);
  };
  //start game
  const start = () => {
    reset();
    setGameStarted(true);
  };
  //stop game
  const stop = () => {
    setGameStarted(false);
  };
  //save scores
  const save = () => {
    dispatch(
      addScore({
        timestamp: new Date().getTime(),
        score,
      } as Score)
    );
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 800);
  };

  return (
    <div className={stylesContent.content}>
      <div className={stylesContent.game}>
        <div className={stylesContent.item}>
          {gameOver ? (
            <span>Game Over!!</span>
          ) : (
            <span>Time: {time} seconds</span>
          )}
        </div>
      </div>
      <div className={stylesContent.game}>
        {colors.map((color: string, index: number) => (
          <GameButton
            key={index}
            selected={index === current}
            color={color as ButtonColor}
            onClick={() => onClick(index)}
          />
        ))}
      </div>
      <div className={stylesContent.game}>
        <Button label="start" onClick={() => start()} />
        <Button label="stop" onClick={() => stop()} />
      </div>
      <div className={stylesContent.game}>
        <div className={stylesContent.item}>
          Scores: <span>{score > -1 && score}</span>
        </div>
      </div>
      <div className={stylesContent.game}>
        <Button
          label="save result"
          onClick={() => save()}
          icon={saved ? faCheck : undefined}
        />
      </div>
    </div>
  );
};
export default SpeedTest;
