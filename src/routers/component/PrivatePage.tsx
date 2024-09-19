import React from "react";
import useRouter from "@routers/component/useRouter";
import {privatePage} from "@routers/mainRouter";
import {Routes} from "react-router-dom";
import {DefaultLayout} from "@layout/index";

export const PrivatePage: React.FC = React.memo(() => {
    const {views} = useRouter({routers: privatePage});
    return (
        <DefaultLayout>
            <Routes>{views}</Routes>
        </DefaultLayout>
    );
});