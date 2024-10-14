import {IRouter} from "@routers/interface";
import React from "react";
import {Route} from "react-router-dom";
import Loader from "@shared/components/Loader";
import PrivateRoute from "@routers/component/PrivateRoute";

type IShowRouter = {
    routers: IRouter[];
}

const renderRouter = (router: IRouter) => {
    const DynamicComponent: any = router.loader;

    const element = (
        <React.Suspense fallback={<Loader/>}>
            <DynamicComponent/>
        </React.Suspense>
    );

    return (
        <Route
            key={router.path}
            path={router.path}
            element={router.isPrivate ? <PrivateRoute element={element}/> : element}
        />
    );
};

const useRouter = ({routers}: IShowRouter) => {
    return React.useMemo(() => {
        return {views: routers.map(r => renderRouter(r))};
    }, [routers]);
};

export default useRouter;