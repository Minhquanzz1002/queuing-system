import {IRouter} from "@routers/interface";
import React from "react";

export const roleUpdateRouter : IRouter = {
    path: "/cai-dat/quan-ly-vai-tro/:code/cap-nhat",
    loader: React.lazy(() => import('./index'))
};