import {IRouter} from "./interface";
import {loginRouter} from "@view/Auth/Login/router";
import {forgotPasswordRouter} from "@view/Auth/ForgotPassword/router";
import {dashboardRouter} from "@view/Dashboard/router";
import {deviceRouter} from "@view/Device/router";
import {deviceDetailRouter} from "@view/Device/Detail/router";
import {serviceRouter} from "@view/Service/router";
import {deviceAddRouter} from "@view/Device/Add/router";
import {profileRouter} from "@view/Auth/Profile/router";
import {reportRouter} from "@view/Report/router";
import {queueRouter} from "@view/Queue/router";
import {serviceAddRouter} from "@view/Service/Add/router";
import {serviceDetailRouter} from "@view/Service/Detail/router";
import {deviceUpdateRouter} from "@view/Device/Update/router";
import {roleManagementSettingRouter} from "@view/Setting/Role/router";
import {roleAddRouter} from "@view/Setting/Role/Add/router";
import {roleUpdateRouter} from "@view/Setting/Role/Update/router";
import {userManagementSettingRouter} from "@view/Setting/User/router";
import {userAddRouter} from "@view/Setting/User/Add/router";
import {userUpdateRouter} from "@view/Setting/User/Update/router";

export const privatePage : IRouter[] = [
    dashboardRouter,
    profileRouter,
    deviceRouter,
    deviceDetailRouter,
    deviceAddRouter,
    deviceUpdateRouter,
    serviceRouter,
    serviceAddRouter,
    serviceDetailRouter,
    reportRouter,
    queueRouter,
    roleManagementSettingRouter,
    roleAddRouter,
    roleUpdateRouter,
    userManagementSettingRouter,
    userAddRouter,
    userUpdateRouter,
];
export const publicPage : IRouter[] = [
    loginRouter,
    forgotPasswordRouter,
];
