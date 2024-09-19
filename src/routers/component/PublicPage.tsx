import React from "react";
import useRouter from "@routers/component/useRouter";
import {publicPage} from "@routers/mainRouter";
import {Routes} from "react-router-dom";
import {EmptyLayout} from "@layout/index";

export const PublicPage: React.FC = React.memo(() => {
    const {views} = useRouter({routers: publicPage});
    return (
        <EmptyLayout>
            <Routes>{views}</Routes>
        </EmptyLayout>
    );
});