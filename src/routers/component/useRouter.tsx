import {IRouter} from "@routers/interface";
import React from "react";
import {Route} from "react-router-dom";

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
                <React.Suspense fallback={<div>Loading...</div>}>
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