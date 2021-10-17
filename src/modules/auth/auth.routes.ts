import { RouteProps } from "react-router-dom";
import { LoginPage } from "./pages/login/login.page";

export const routes: RouteProps[] = [
  {
    path: "/",
    component: LoginPage,
  },
];
