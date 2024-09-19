import {IRouter} from "@routers/interface";
import React from "react";

export const dashboardRouter : IRouter = {
    path: "/",
    loader: React.lazy(() => import('./index'))
};