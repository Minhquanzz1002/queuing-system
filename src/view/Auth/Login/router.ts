import {IRouter} from "@routers/interface";
import React from "react";

export const loginRouter : IRouter = {
    path: "/auth/login",
    loader: React.lazy(() => import('./index'))
};