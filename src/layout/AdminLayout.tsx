import React, {useEffect, useState} from 'react';
import {Flex, Layout, Menu, MenuProps} from "antd";
import Sider from "antd/es/layout/Sider";
import {logo} from "@assets/images";
import {IconChat, IconDocumentReport, IconElement, IconLayer, IconMonitor, IconSetting} from "@assets/icons";
import {MoreOutlined} from "@ant-design/icons";
import {Content} from "antd/es/layout/layout";
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import store from "@core/store/redux";
import profileStore from "@modules/authentication/profileStore";
import ButtonLogout from "@shared/components/ButtonLogout";

type MenuItem = Required<MenuProps>['items'][number]

const getItem = (label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem => {
    return {
        key, icon, children, label, type
    } as MenuItem;
};

const items: MenuItem[] = [
    getItem(<Link to="/admin/dashboard">Dashboard</Link>, '/dashboard', <IconElement/>),
    getItem(<Link to="/admin/thiet-bi">Thiết bị</Link>, '/thiet-bi', <IconMonitor/>),
    getItem(<Link to="/admin/dich-vu">Dịch vụ</Link>, '/dich-vu', <IconChat/>),
    getItem(<Link to="/admin/cap-so">Cấp số</Link>, '/cap-so', <IconLayer/>),
    getItem(<Link to="/admin/bao-cao">Báo cáo</Link>, '/bao-cao', <IconDocumentReport/>),
    getItem('Cài đặt hệ thống', '/cai-dat', <IconSetting/>, [
        getItem(<Link to="/admin/cai-dat/quan-ly-vai-tro">Quản lý vai trò</Link>, '/cai-dat/quan-ly-vai-tro'),
        getItem(<Link to="/admin/cai-dat/quan-ly-tai-khoan">Quản lý tài khoản</Link>, '/cai-dat/quan-ly-tai-khoan'),
        getItem(<Link to="/admin/cai-dat/nhat-ky-nguoi-dung">Nhật ký người dùng</Link>, '/cai-dat/nhat-ky-nguoi-dung'),
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
    position: 'relative',
    backgroundColor: '#F6F6F6'
};

const AdminLayout: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

    useEffect(() => {
        const pathSnippets = location.pathname.split('/').filter(i => i);
        setSelectedKeys(['/' + pathSnippets[1]]);
    }, [location]);

    const logout = () => {
        store.dispatch(profileStore.actions.logout());
        navigate('/auth/login');
    };

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
                        <ButtonLogout logout={logout}/>
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

export default AdminLayout;