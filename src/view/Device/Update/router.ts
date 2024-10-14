import {IRouter} from "@routers/interface";
import React from "react";

export const deviceUpdateRouter : IRouter = {
    path: "thiet-bi/:code/cap-nhat",
    loader: React.lazy(() => import('./index')),
    isPrivate: true,
};