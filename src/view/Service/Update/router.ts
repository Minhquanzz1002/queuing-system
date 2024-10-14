import {IRouter} from "@routers/interface";
import React from "react";

export const serviceUpdateRouter : IRouter = {
    path: "dich-vu/:code/cap-nhat",
    loader: React.lazy(() => import('./index')),
    isPrivate: true,
};