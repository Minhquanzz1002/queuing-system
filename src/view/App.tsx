import React, {memo} from 'react';
import "@styles/styles.scss";
import {PublicPage} from "@routers/component/PublicPage";
import {ConfigProvider} from "antd";

const MainView = memo(() => {
    return (
        <>
            <PublicPage/>
            {/*<PrivatePage/>*/}
        </>
    );
});

function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#FF9138",
                    fontFamily: "Nunito, sans-serif"
                }
            }}
        >
            <MainView/>
        </ConfigProvider>
    );
}

export default App;
