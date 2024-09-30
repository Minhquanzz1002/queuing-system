import {IRouter} from "@routers/interface";
import React from "react";

export const notFoundRouter : IRouter = {
    path: "*",
    loader: React.lazy(() => import('./index'))
};