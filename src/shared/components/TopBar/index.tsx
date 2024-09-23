import React from 'react';
import "./styles.scss";
import {Avatar, Button, Flex} from "antd";
import {IconBell} from "@assets/icons";

const TopBar = () => {
    return (
        <Flex className="topbar" align="center" gap="large">
            <Button shape="circle" className="topbar__notification">
                <IconBell/>
            </Button>
            <Flex gap="small" className="topbar__user">
                <Avatar size={40} className="topbar__avatar">A</Avatar>
                <Flex vertical className="topbar__info">
                    <div className="topbar__greeting">Xin chào</div>
                    <div className="topbar__username">Nguyễn Minh Quân</div>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default TopBar;