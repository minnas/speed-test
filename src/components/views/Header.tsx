import { ReactElement } from "react";
import { useHeaderStyles, useTitleStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faHome } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@Store/store";
import Button from "@Components/tools/Button";
import { toggle } from "@Store/dataSlices";

//Application Header
const Header = (): ReactElement => {
  //theme and styles
  const selectedTheme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const theme = useTheme<Itheme>();
  const styles = useHeaderStyles(theme);
  const titleStyles = useTitleStyles(theme);
  //toggle selected theme (dark/white)
  const toggleTheme = () => {
    dispatch(toggle());
  };

  return (
    <div className={styles.header}>
      <FontAwesomeIcon
        icon={faHome}
        className={titleStyles.title + " " + titleStyles.icon}
      />
      <h1 className={titleStyles.title}>Speed test</h1>
      <Button
        icon={selectedTheme.theme === "light" ? faMoon : faSun}
        border="none"
        padding="0"
        onClick={toggleTheme}
      />
    </div>
  );
};

export default Header;
