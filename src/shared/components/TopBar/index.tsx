import React, {useState} from 'react';
import "./styles.scss";
import {Avatar, Button, Flex} from "antd";
import {IconBell} from "@assets/icons";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "@modules/index";
import NotificationPopup from "@shared/components/TopBar/NotificationPopup";

const TopBar = () => {
    const {user} = useSelector((state: RootState) => state.profile);
    const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);

    return (
        <Flex className="topbar" align="center" gap="large">
            <div style={{position: "relative"}}>
                <Button shape="circle" className="topbar__notification" onClick={(e) => {
                    e.stopPropagation();
                    setIsNotificationOpen(true);
                }}>
                    <IconBell/>
                </Button>
                <NotificationPopup open={isNotificationOpen} setOpen={setIsNotificationOpen}/>
            </div>
            <Flex gap="small" className="topbar__user">
                <Link to="/admin/ho-so"><Avatar size={40} className="topbar__avatar">A</Avatar></Link>
                <Flex vertical className="topbar__info">
                    <div className="topbar__greeting">Xin chào</div>
                    <Link to="/admin/ho-so">
                        <div className="topbar__username">{user?.name || "Chưa rõ"}</div>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default TopBar;