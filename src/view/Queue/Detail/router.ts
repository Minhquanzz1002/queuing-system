import {IRouter} from "@routers/interface";
import React from "react";

export const queueDetailRouter : IRouter = {
    path: "cap-so/:id",
    loader: React.lazy(() => import('./index')),
    isPrivate: true,
};