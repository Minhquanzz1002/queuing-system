import React, {PropsWithChildren} from 'react';
import {Layout, Menu, MenuProps} from "antd";
import Sider from "antd/es/layout/Sider";
import {logo} from "@assets/images";
import {IconElement} from "@assets/icons";

type MenuItem = Required<MenuProps>['items'][number]

const items : MenuItem[] = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        icon: <IconElement/>
    }
];

const DefaultLayout: React.FC<PropsWithChildren> = props => {
    return (
        <Layout>
            <Sider>
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <Menu items={items}/>
            </Sider>
            {props.children}
        </Layout>
    );
};

export default DefaultLayout;