import { useLayoutStyles } from "./styles";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import SpeedTest from "./SpeedTest";
import Result from "./Result";

const RoutesLayout = () => {
  const theme = useTheme<Itheme>();
  const stylesContent = useLayoutStyles(theme);

  return (
    <div className={stylesContent.layout}>
      <Header />
      <div style={{ overflowY: "scroll" }}>
        <Routes>
          <Route path="/" element={<SpeedTest />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
export default RoutesLayout;
