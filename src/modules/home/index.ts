import React from "react";
import { ModuleInterface } from "../../common/interfaces/module.interface";
import { routes } from "./home.routes";

const basePath = "/home";
const HomeModule: ModuleInterface = {
  basePath,
  routes: routes.map((r) => {
    r.path = basePath + r.path;
    return r;
  }),
  name: "HomeModule",
};

export default HomeModule;
