import { ReactElement } from "react";
import { useFooterStyles } from "./styles";
import Button from "@Components/tools/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";
import { Page } from "@Types/types";
import { pages } from "@Utils/utils";

//Application Footer
const Footer = (): ReactElement => {
  //theme and styles
  const theme = useTheme<Itheme>();
  const styles = useFooterStyles(theme);
  const navigate = useNavigate();
  const location = useLocation();

  //navigate to page
  const goToPage = (item: Page) => {
    navigate(item.path);
  };

  return (
    <div className={styles.footer}>
      {pages.map((item: Page, index: number) => (
        <Button
          icon={item.icon}
          key={index}
          onClick={() => goToPage(item)}
          disabled={location.pathname === item.path}
        />
      ))}
    </div>
  );
};

export default Footer;
