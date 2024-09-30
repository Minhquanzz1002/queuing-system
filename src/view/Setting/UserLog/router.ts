import {IRouter} from "@routers/interface";
import React from "react";

export const userLogSettingRouter : IRouter = {
    path: "/cai-dat/nhat-ky-nguoi-dung",
    loader: React.lazy(() => import('./index'))
};