import {IRouter} from "@routers/interface";
import React from "react";

export const deviceDetailRouter : IRouter = {
    path: "/thiet-bi/chi-tiet/:code",
    loader: React.lazy(() => import('./index'))
};