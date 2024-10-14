import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {
    adminRoutes,
    counterRoutes,
    kioskRoutes,
    numberingCenterRoutes,
    otherRoutes,
    publicRoutes,
    queuePublicRoutes
} from "@routers/mainRouter";
import useRouter from "@routers/component/useRouter";
import {AdminLayout, EmptyLayout, QueuePublicLayout} from "@layout/index";
import PublicRoute from "@routers/component/PublicRoute";

const AppRouter = () => {
    const {views: adminViews} = useRouter({routers: adminRoutes});
    const {views: publicViews} = useRouter({routers: publicRoutes});
    const {views: otherViews} = useRouter({routers: otherRoutes});
    const {views: kioskViews} = useRouter({routers: kioskRoutes});
    const {views: counterViews} = useRouter({routers: counterRoutes});
    const {views: numberingCenterViews} = useRouter({routers: numberingCenterRoutes});
    const {views: queuePublicViews} = useRouter({routers: queuePublicRoutes});
    return (
        <Routes>
            <Route path="/" element={<QueuePublicLayout/>}>
                {queuePublicViews}
            </Route>
            <Route path="/thiet-bi-cap-so" element={<EmptyLayout/>}>
                {kioskViews}
            </Route>
            <Route path="/admin" element={<AdminLayout/>}>
                <Route index element={<Navigate to="/admin/dashboard" replace/>}/>
                {adminViews}
            </Route>
            <Route element={<PublicRoute/>}>
                <Route path="/auth" element={<EmptyLayout/>}>
                    {publicViews}
                </Route>
            </Route>
            <Route path="/quay-dich-vu" element={<EmptyLayout/>}>
                {counterViews}
            </Route>
            <Route path="/trung-tam-cap-so" element={<EmptyLayout/>}>
                {numberingCenterViews}
            </Route>
            {otherViews}
        </Routes>
    );
};

export default AppRouter;