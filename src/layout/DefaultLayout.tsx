import React, {PropsWithChildren, useEffect, useState} from 'react';
import {Flex, Layout, Menu, MenuProps} from "antd";
import Sider from "antd/es/layout/Sider";
import {logo} from "@assets/images";
import {
    IconChat,
    IconDocumentReport,
    IconElement,
    IconLayer,
    IconLogOut,
    IconMonitor,
    IconSetting
} from "@assets/icons";
import {MoreOutlined} from "@ant-design/icons";
import {Content} from "antd/es/layout/layout";
import {Link, useLocation} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number]

const getItem = (label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem => {
    return {
        key, icon, children, label, type
    } as MenuItem;
};

const items: MenuItem[] = [
    getItem(<Link to="/dashboard">Dashboard</Link>, '/dashboard', <IconElement/>),
    getItem(<Link to="/thiet-bi">Thiết bị</Link>, '/thiet-bi', <IconMonitor/>),
    getItem(<Link to="/dich-vu">Dịch vụ</Link>, '/dich-vu', <IconChat/>),
    getItem(<Link to="/cap-so">Cấp số</Link>, '/cap-so', <IconLayer/>),
    getItem(<Link to="/bao-cao">Báo cáo</Link>, '/bao-cao', <IconDocumentReport/>),
    getItem('Cài đặt hệ thống', '/cai-dat', <IconSetting/>, [
        getItem(<Link to="/cai-dat/quan-ly-vai-tro">Quản lý vai trò</Link>, '/cai-dat/quan-ly-vai-tro'),
        getItem(<Link to="/cai-dat/quan-ly-tai-khoan">Quản lý tài khoản</Link>, '/cai-dat/quan-ly-tai-khoan'),
        getItem(<Link to="/cai-dat/nhat-ky-nguoi-dung">Nhật ký người dùng</Link>, '/cai-dat/nhat-ky-nguoi-dung'),
    ]),
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

const DefaultLayout: React.FC<PropsWithChildren> = props => {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

    useEffect(() => {
        const pathSnippets = location.pathname.split('/').filter(i => i);

        console.log('pathSnippets', pathSnippets);

        setSelectedKeys(['/' + pathSnippets[0]]);
    }, [location]);

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider width={200} collapsed={false} style={siderStyle} className="sidebar">
                <Flex vertical justify="space-between" style={{height: '100%'}}>
                    <div>
                        <Flex justify="center" align="center" style={{marginBottom: '5.4rem', marginTop: '3rem'}}>
                            <img src={logo} alt="logo" height={64} width={80}/>
                        </Flex>
                        <Menu mode="vertical" selectedKeys={selectedKeys} defaultSelectedKeys={['dashboard']}
                              expandIcon={<MoreOutlined/>} items={items}/>
                    </div>
                    <div style={{marginBottom: '3.2rem', paddingInline: '1.2rem'}}>
                        <button className="sidebar__btn-logout">
                            <IconLogOut/>
                            <span>Đăng xuất</span>
                        </button>
                    </div>
                </Flex>

            </Sider>
            <Layout style={{marginLeft: '20rem'}}>
                <Content style={contentStyle}>
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default DefaultLayout;