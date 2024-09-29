import {IRouter} from "@routers/interface";
import React from "react";

export const serviceDetailRouter : IRouter = {
    path: "/dich-vu/chi-tiet/:code",
    loader: React.lazy(() => import('./index'))
};