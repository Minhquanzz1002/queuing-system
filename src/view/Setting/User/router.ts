import {IRouter} from "@routers/interface";
import React from "react";

export const userManagementSettingRouter : IRouter = {
    path: "cai-dat/quan-ly-tai-khoan",
    loader: React.lazy(() => import('./index')),
    isPrivate: true,
};