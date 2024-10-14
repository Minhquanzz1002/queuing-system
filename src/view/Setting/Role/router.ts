import {IRouter} from "@routers/interface";
import React from "react";

export const roleManagementSettingRouter : IRouter = {
    path: "cai-dat/quan-ly-vai-tro",
    loader: React.lazy(() => import('./index')),
    isPrivate: true,
};