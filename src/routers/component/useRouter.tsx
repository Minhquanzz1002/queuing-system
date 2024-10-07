import {IRouter} from "@routers/interface";
import React from "react";
import {Route} from "react-router-dom";
import Loader from "@shared/components/Loader";

type IShowRouter = {
    routers: IRouter[];
}

const renderRouter = (router: IRouter) => {
    const DynamicComponent: any = router.loader;
    return (
        <Route
            key={router.path}
            path={router.path}
            element={
                <React.Suspense fallback={<Loader/>}>
                    <DynamicComponent/>
                </React.Suspense>
            }
        />
    );
};

const useRouter = ({routers}: IShowRouter) => {
    return React.useMemo(() => {
        return {views: routers.map(r => renderRouter(r))};
    }, [routers]);
};

export default useRouter;