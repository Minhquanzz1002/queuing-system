import {IRouter} from "@routers/interface";
import React from "react";

export const roleUpdateRouter : IRouter = {
    path: "cai-dat/quan-ly-vai-tro/:id/cap-nhat",
    loader: React.lazy(() => import('./index')),
    isPrivate: true,
};