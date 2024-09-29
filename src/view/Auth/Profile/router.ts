import {IRouter} from "@routers/interface";
import React from "react";

export const profileRouter : IRouter = {
    path: "/ho-so",
    loader: React.lazy(() => import('./index'))
};