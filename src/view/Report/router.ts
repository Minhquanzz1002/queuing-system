import {IRouter} from "@routers/interface";
import React from "react";

export const reportRouter : IRouter = {
    path: "bao-cao",
    loader: React.lazy(() => import('./index')),
    isPrivate: true,
};