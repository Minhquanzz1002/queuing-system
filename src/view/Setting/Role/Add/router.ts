import {IRouter} from "@routers/interface";
import React from "react";

export const roleAddRouter : IRouter = {
    path: "/cai-dat/quan-ly-vai-tro/them-moi",
    loader: React.lazy(() => import('./index'))
};