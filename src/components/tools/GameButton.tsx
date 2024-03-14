import { MouseEventHandler, ReactElement } from "react";
import { useGameButtonStyles } from "./styles";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
/**Button colors = colors which are used in speden pelit speed test */
export type ButtonColor = "RED" | "YELLOW" | "GREEN" | "ORANGE";

/**customization props for gamebutton. These props except onClick is passed to styling object */
export interface GameButtonProps {
  color: ButtonColor;
  padding?: string;
  border?: string;
  margin?: string;
  selected?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

/**Game button component */
const GameButton = ({ ...props }: GameButtonProps): ReactElement => {
  /**Use selected theme */
  const theme = useTheme<Itheme>();
  /**Use game button styles with theme and props*/
  const styles = useGameButtonStyles({ ...props, theme });

  return (
    <button className={styles.gameButton} onClick={props.onClick}>
      {props.selected ? <FontAwesomeIcon icon={faStar} size="lg" /> : ""}
    </button>
  );
};

export default GameButton;
