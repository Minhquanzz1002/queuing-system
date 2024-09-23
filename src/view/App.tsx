import React, {memo} from 'react';
import "@styles/styles.scss";
import {PublicPage} from "@routers/component/PublicPage";
import {ConfigProvider} from "antd";
import {PrivatePage} from "@routers/component/PrivatePage";

const MainView = memo(({statusLogin}: { statusLogin: boolean }) => {
    return (<>{statusLogin ? <PrivatePage/> : <PublicPage/>}</>);
});

function App() {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {

                        itemColor: 'rgba(126, 125, 136, 1)',
                        itemHoverBg: 'rgba(255, 117, 6, 1)',
                        itemHoverColor: 'white',
                        itemSelectedBg: 'rgba(255, 117, 6, 1)',
                        itemSelectedColor: 'white',
                        itemMarginInline: 0,
                        itemBorderRadius: 0,
                        itemPaddingInline: 12,
                    },
                    Breadcrumb: {
                        itemColor: '#7E7D88',
                        lastItemColor: '#FF7506',
                    },
                    Typography: {
                        colorTextHeading: '#FF7506'
                    },
                },
                token: {
                    colorPrimary: "#FF9138",
                    fontFamily: "Nunito, sans-serif",
                },
            }}
        >
            <MainView statusLogin={true}/>
        </ConfigProvider>
    );
}

export default App;
