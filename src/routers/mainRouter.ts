import {IRouter} from "./interface";
import {loginRouter} from "@view/Auth/Login/router";
import {forgotPasswordRouter} from "@view/Auth/ForgotPassword/router";
import {dashboardRouter} from "@view/Dashboard/router";
import {deviceRouter} from "@view/Device/router";
import {deviceDetailRouter} from "@view/Device/Detail/router";
import {serviceRouter} from "@view/Service/router";
import {deviceAddRouter} from "@view/Device/Add/router";

export const privatePage : IRouter[] = [
    dashboardRouter,
    deviceRouter,
    deviceDetailRouter,
    deviceAddRouter,
    serviceRouter
];
export const publicPage : IRouter[] = [
    loginRouter,
    forgotPasswordRouter,
];
