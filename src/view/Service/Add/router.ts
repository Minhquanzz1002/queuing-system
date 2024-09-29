import {IRouter} from "@routers/interface";
import React from "react";

export const serviceAddRouter : IRouter = {
    path: "/dich-vu/them-moi",
    loader: React.lazy(() => import('./index'))
};