import {IRouter} from "@routers/interface";
import React from "react";

export const kioskRouter : IRouter = {
    path: "",
    loader: React.lazy(() => import('./index')),
    isPrivate: false,
};