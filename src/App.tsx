import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { RoutePaths } from "./components/nav-menu/utils";
import App1 from "./App1";
import { NavMenu } from "./components/nav-menu/NavMenu";

export const App: React.FC = () => {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path={RoutePaths.SCORES} element={<App1 />} />
        <Route path={RoutePaths.BOARDS} element={<h1>Boards</h1>} />
        <Route path={RoutePaths.RULES} element={<h1>Rules</h1>} />
      </Routes>
    </Router>
  );
};
