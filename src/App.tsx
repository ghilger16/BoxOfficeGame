import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App1 from "./App1";
import { NavMenu } from "./components/nav-menu/NavMenu";
import { Login } from "./routes/route-scores/route-login/Login";
import { QueryClient, QueryClientProvider } from "react-query";
import { Scores } from "./routes/route-scores/Scores";
import { RoutePaths } from "./components/nav-menu/constants";

export const App: React.FC = () => {
  const isAuthenticated = true; // Replace with your authentication logic
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {isAuthenticated ? (
          <>
            <NavMenu />
            <Routes>
              <Route path={RoutePaths.SCORES} element={<Scores />} />
              <Route path={RoutePaths.BOARDS} element={<h1>Boards</h1>} />
              <Route path={RoutePaths.RULES} element={<h1>Rules</h1>} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        )}
      </Router>
    </QueryClientProvider>
  );
};
