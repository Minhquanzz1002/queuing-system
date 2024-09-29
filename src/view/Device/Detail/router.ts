import {IRouter} from "@routers/interface";
import React from "react";

export const deviceDetailRouter : IRouter = {
    path: "/thiet-bi/:code/chi-tiet",
    loader: React.lazy(() => import('./index'))
};