import {IRouter} from "@routers/interface";
import React from "react";

export const dashboardRouter : IRouter = {
    path: "/dashboard",
    loader: React.lazy(() => import('./index'))
};