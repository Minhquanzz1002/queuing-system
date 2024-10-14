import {IRouter} from "@routers/interface";
import React from "react";

export const deviceAddRouter : IRouter = {
    path: "thiet-bi/them-moi",
    loader: React.lazy(() => import('./index')),
    isPrivate: true,
};