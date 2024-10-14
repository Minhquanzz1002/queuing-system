import {IRouter} from "@routers/interface";
import React from "react";

export const counterSettingRouter : IRouter = {
    path: "cai-dat",
    loader: React.lazy(() => import('./index')),
    isPrivate: false,
};