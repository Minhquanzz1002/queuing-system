import {IRouter} from "@routers/interface";
import React from "react";

export const kioskSettingRouter : IRouter = {
    path: "cai-dat",
    loader: React.lazy(() => import('./index')),
    isPrivate: false,
};