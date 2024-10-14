import {IRouter} from "@routers/interface";
import React from "react";

export const deviceDetailRouter : IRouter = {
    path: "thiet-bi/:code",
    loader: React.lazy(() => import('./index')),
    isPrivate: true,
};