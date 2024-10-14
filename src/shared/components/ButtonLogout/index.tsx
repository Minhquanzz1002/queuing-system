import React from 'react';
import "./styles.scss";
import {IconLogOut} from "@assets/icons";

const ButtonLogout = ({logout, text = 'Đăng xuất'}: { logout: React.MouseEventHandler<HTMLButtonElement>, text?: string }) => {
    return (
        <button className="btn-logout" onClick={logout}>
            <IconLogOut/>
            <span>{text}</span>
        </button>
    );
};

export default ButtonLogout;