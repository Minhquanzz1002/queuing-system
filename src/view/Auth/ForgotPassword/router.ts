import {IRouter} from "@routers/interface";
import React from "react";

export const forgotPasswordRouter : IRouter = {
    path: "forgot",
    loader: React.lazy(() => import('./index'))
};