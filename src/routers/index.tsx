import React from 'react';
import {Route, Routes, Navigate } from "react-router-dom";
import {adminRoutes, kioskRoutes, otherRoutes, publicRoutes} from "@routers/mainRouter";
import useRouter from "@routers/component/useRouter";
import {AdminLayout, EmptyLayout, QueuePublicLayout} from "@layout/index";

const AppRouter = () => {
    const {views: adminViews} = useRouter({routers: adminRoutes});
    const {views: publicViews} = useRouter({routers: publicRoutes});
    const {views: otherViews} = useRouter({routers: otherRoutes});
    const {views: kioskViews} = useRouter({routers: kioskRoutes});
    return (
        <Routes>
            <Route path="/" element={<QueuePublicLayout/>}>
                {kioskViews}
            </Route>
            <Route path="/admin" element={<AdminLayout/>}>
                <Route index element={<Navigate to="/admin/dashboard" replace/>}/>
                {adminViews}
            </Route>
            <Route path="/auth" element={<EmptyLayout/>}>
                {publicViews}
            </Route>
            {otherViews}
        </Routes>
    );
};

export default AppRouter;