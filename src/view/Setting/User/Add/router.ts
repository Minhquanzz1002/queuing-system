import {IRouter} from "@routers/interface";
import React from "react";

export const userAddRouter : IRouter = {
    path: "/cai-dat/quan-ly-tai-khoan/them-moi",
    loader: React.lazy(() => import('./index'))
};