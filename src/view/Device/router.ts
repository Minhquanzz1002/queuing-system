import {IRouter} from "@routers/interface";
import React from "react";

export const deviceRouter : IRouter = {
    path: "thiet-bi",
    loader: React.lazy(() => import('./index')),
    isPrivate: true,
};