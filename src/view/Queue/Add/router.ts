import {IRouter} from "@routers/interface";
import React from "react";

export const newQueueNumberRouter : IRouter = {
    path: "cap-so/cap-so-moi",
    loader: React.lazy(() => import('./index'))
};