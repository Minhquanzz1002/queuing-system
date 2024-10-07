import React from 'react';
import {Flex, Layout, Menu, MenuProps} from "antd";
import Sider from "antd/es/layout/Sider";
import {logo} from "@assets/images";
import {IconLayer} from "@assets/icons";
import {MoreOutlined} from "@ant-design/icons";
import {Content} from "antd/es/layout/layout";
import {Link, Outlet} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number]

const getItem = (label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem => {
    return {
        key, icon, children, label, type
    } as MenuItem;
};

const items: MenuItem[] = [
    getItem(<Link to="/">Cấp số</Link>, '/cap-so', <IconLayer/>)
];

const siderStyle: React.CSSProperties = {
    backgroundColor: 'white',
    minHeight: '100vh',
    overflow: 'auto',
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0
};

const contentStyle: React.CSSProperties = {
    position: 'relative'
};

const QueuePublicLayout: React.FC = () => {
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider width={200} collapsed={false} style={siderStyle} className="sidebar">
                <Flex vertical justify="space-between" style={{height: '100%'}}>
                    <div>
                        <Flex justify="center" align="center" style={{marginBottom: '5.4rem', marginTop: '3rem'}}>
                            <img src={logo} alt="logo" height={64} width={80}/>
                        </Flex>
                        <Menu mode="vertical" defaultSelectedKeys={['/cap-so']}
                              expandIcon={<MoreOutlined/>} items={items}/>
                    </div>
                </Flex>

            </Sider>
            <Layout style={{marginLeft: '20rem'}}>
                <Content style={contentStyle}>
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};

export default QueuePublicLayout;