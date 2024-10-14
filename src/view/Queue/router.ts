import {IRouter} from "@routers/interface";
import React from "react";

export const queueRouter : IRouter = {
    path: "cap-so",
    loader: React.lazy(() => import('./index')),
    isPrivate: true,
};