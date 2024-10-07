import React from 'react';
import "@styles/styles.scss";
import {ConfigProvider} from "antd";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import isBetween from 'dayjs/plugin/isBetween';
import AppRouter from "@routers/index";

dayjs.extend(relativeTime);
dayjs.extend(isBetween);

function App() {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        itemActiveBg: 'rgba(255, 117, 6, 1)',
                        itemColor: 'rgba(126, 125, 136, 1)',
                        itemHoverBg: 'rgba(255, 117, 6, 1)',
                        itemHoverColor: 'white',
                        itemSelectedBg: 'rgba(255, 117, 6, 1)',
                        itemSelectedColor: 'white',
                        itemMarginInline: 0,
                        itemBorderRadius: 0,
                        itemPaddingInline: 12,
                        horizontalItemSelectedBg: 'rgba(255, 117, 6, 1)',
                    },
                    Breadcrumb: {
                        itemColor: '#7E7D88',
                        lastItemColor: '#FF7506',
                        linkColor: '#7E7D88',
                        linkHoverColor: '#7E7D88',
                        separatorColor: '#7E7D88',
                    },
                    Typography: {
                        colorTextHeading: '#FF7506',
                        fontWeightStrong: 700,
                    },
                    Form: {
                        labelFontSize: 16,
                    }
                },
                token: {
                    colorPrimary: "#FF9138",
                    fontFamily: "Nunito, sans-serif",
                },
            }}
        >
            <AppRouter/>
        </ConfigProvider>
    );
}

export default App;
