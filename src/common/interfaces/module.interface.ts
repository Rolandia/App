import { RouteProps } from "react-router";

export interface ModuleInterface {
  routes: RouteProps[];
  name: string;
  basePath: string;
}
