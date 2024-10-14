import {IRouter} from "@routers/interface";
import React from "react";

export const serviceDetailRouter : IRouter = {
    path: "dich-vu/:code",
    loader: React.lazy(() => import('./index')),
    isPrivate: true,
};