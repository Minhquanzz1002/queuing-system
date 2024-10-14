import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "@modules/index";
import {Navigate} from "react-router-dom";
import Loader from "@shared/components/Loader";
import authenticationPresenter from "@modules/authentication/presenter";
import store from "@core/store/redux";
import profileStore from "@modules/authentication/profileStore";

type PrivateRouteProps = {
    element: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({element}) => {
    const {token, user} = useSelector((state: RootState) => state.profile);
    const [isLoading, setIsLoading] = useState<boolean>(!!token && !user);

    useEffect(() => {
        const fetchUser = async () => {
            if (token && !user) {
                setIsLoading(true);
                try {
                    await authenticationPresenter.getProfile(token);
                } catch (error) {
                    console.error("Failed to fetch user info:", error);
                    store.dispatch(profileStore.actions.clearToken());
                } finally {
                    setIsLoading(false);
                }
            }
        };
        console.log("o day");
        fetchUser();
    }, [token, user]);

    if (isLoading) return <Loader/>;

    if (!token) return <Navigate to="/auth/login" replace/>;

    return user ? <>{element}</> : <Navigate to="/auth/login" replace/>;
};

export default PrivateRoute;