import {IRouter} from "@routers/interface";
import React from "react";

export const userUpdateRouter : IRouter = {
    path: "/cai-dat/quan-ly-tai-khoan/:username/cap-nhat",
    loader: React.lazy(() => import('./index'))
};