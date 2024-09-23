import React, {PropsWithChildren} from 'react';
import {Flex} from "antd";
import {Link} from "react-router-dom";
import "./styles.scss";

type ActionButtonProps = {
    icon: React.ReactNode;
    to: string;
}

const ActionButton = ({icon, children, to} : PropsWithChildren<ActionButtonProps>) => {
    return (
        <Link to={to} className="action-button">
            <Flex vertical align="center" className="action-button__content">
                <div className="action-button__icon">{icon}</div>
                <div className="action-button__text">{children}</div>
            </Flex>
        </Link>
    );
};

export default ActionButton;