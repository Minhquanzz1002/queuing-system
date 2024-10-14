import {IRouter} from "@routers/interface";
import React from "react";

export const serviceRouter : IRouter = {
    path: "dich-vu",
    loader: React.lazy(() => import('./index')),
    isPrivate: true,
};