import {IRouter} from "@routers/interface";
import React from "react";

export const loginRouter : IRouter = {
    path: "login",
    loader: React.lazy(() => import('./index'))
};