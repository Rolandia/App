import React from "react";
import { ModuleInterface } from "../../common/interfaces/module.interface";
import { routes } from "./auth.routes";

const basePath = "/auth";
const AuthModule: ModuleInterface = {
  basePath,
  routes: routes.map((r) => {
    r.path = basePath + r.path;
    return r;
  }),
  name: "AuthModule",
};

export default AuthModule;
