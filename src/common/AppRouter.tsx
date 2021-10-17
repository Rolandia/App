import { ModuleInterface } from "./interfaces/module.interface";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export interface AppRouterProps {
  modules: ModuleInterface[];
}
export const AppRouter: React.FC<AppRouterProps> = ({
  modules,
}: AppRouterProps) => {
  return (
    <Router>
      {modules.map((module) => {
        return module.routes.map((r) => {
          return <Route {...r} key={module.name} />;
        });
      })}
    </Router>
  );
};
