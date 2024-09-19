import {IRouter} from "./interface";
import {loginRouter} from "@view/Auth/Login/router";
import {forgotPasswordRouter} from "@view/Auth/ForgotPassword/router";
import {dashboardRouter} from "@view/Dashboard/router";

export const privatePage : IRouter[] = [
    dashboardRouter,
];
export const publicPage : IRouter[] = [
    loginRouter,
    forgotPasswordRouter,
];
