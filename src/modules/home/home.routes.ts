import { RouteProps } from "react-router-dom";
import { HomePage } from "./pages/home/home.page";

export const routes: RouteProps[] = [
  {
    path: "/",
    component: HomePage,
  },
];
