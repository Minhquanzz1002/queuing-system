import React from 'react';
import {Outlet} from 'react-router-dom';
import {Content} from "antd/es/layout/layout";

const EmptyLayout: React.FC = () => {
    return (
        <Content style={{background: '#F6F6F6', minHeight: '100vh'}}>
            <Outlet/>
        </Content>
    );
};

export default EmptyLayout;