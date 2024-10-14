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
import {newQueueNumberRouter} from "@view/Queue/Add/router";
import {notFoundRouter} from "@view/NotFound/router";
import {userLogSettingRouter} from "@view/Setting/UserLog/router";
import {queueDetailRouter} from "@view/Queue/Detail/router";
import {kioskQueueRouter} from "@view/QueuePublic/router";
import {counterRouter} from "@view/Counter/router";
import {numberingCenterRouter} from "@view/NumberingCenter/router";
import {kioskRouter} from "@view/Kiosk/router";
import {counterSettingRouter} from "@view/Counter/Setting/router";
import {serviceUpdateRouter} from "@view/Service/Update/router";
import {kioskSettingRouter} from "@view/Kiosk/Setting/router";
import {numberingCenterSettingRouter} from "@view/NumberingCenter/Setting/router";

export const adminRoutes : IRouter[] = [
    dashboardRouter,
    profileRouter,
    deviceRouter,
    deviceDetailRouter,
    deviceAddRouter,
    deviceUpdateRouter,
    serviceRouter,
    serviceAddRouter,
    serviceDetailRouter,
    serviceUpdateRouter,
    reportRouter,
    queueRouter,
    newQueueNumberRouter,
    queueDetailRouter,
    roleManagementSettingRouter,
    roleAddRouter,
    roleUpdateRouter,
    userManagementSettingRouter,
    userLogSettingRouter,
    userAddRouter,
    userUpdateRouter,
    notFoundRouter,
];
export const publicRoutes : IRouter[] = [
    loginRouter,
    forgotPasswordRouter,
];

export const otherRoutes : IRouter[] = [
    notFoundRouter
];

export const counterRoutes : IRouter[] = [
    counterRouter,
    counterSettingRouter
];

export const numberingCenterRoutes : IRouter[] = [
    numberingCenterRouter,
    numberingCenterSettingRouter
];

export const kioskRoutes : IRouter[] = [
    kioskRouter,
    kioskSettingRouter
];

export const queuePublicRoutes : IRouter[] = [
    kioskQueueRouter
];