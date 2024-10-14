import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "@modules/index";
import {Navigate, Outlet} from "react-router-dom";

const PublicRoute = () => {
    const {token} = useSelector((state: RootState) => state.profile);

    if (token) {
        return <Navigate to="/admin/dashboard" replace/>;
    }

    return (
        <Outlet/>
    );
};

export default PublicRoute;