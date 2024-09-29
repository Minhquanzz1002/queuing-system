import React, {Children, isValidElement, ReactNode} from 'react';
import {Flex} from "antd";
import {Link} from "react-router-dom";
import "./styles.scss";

type ActionButtonItemProps = {
    icon: ReactNode;
    href?: string;
    onClick?: () => void;
    children?: ReactNode | undefined;
}

const ActionButtonItem: React.FC<ActionButtonItemProps> = ({children, href, onClick, icon}) => {

    const content = (
        <Flex vertical align="center" className="action-button__item">
            <div className="action-button__item--icon">{icon}</div>
            <div className="action-button__item--text">{children}</div>
        </Flex>
    );

    if (href) {
        return (
            <Link to={href}>
                {content}
            </Link>
        );
    }
    return (
        <button onClick={onClick}>
            {content}
        </button>
    );
};

type ActionButtonProps = {
    children: ReactNode;
}

const ActionButton : React.FC<ActionButtonProps> & {Item: typeof ActionButtonItem} = ({children}) => {
    const items = Children.toArray(children).filter(child =>
        isValidElement(child) && child.type === ActionButtonItem
    );

    return (
        <div className="action-button">
            {
                items.map((item, index) => (
                    <React.Fragment key={`action-${index}`}>
                        {index > 0 && <div className="action-button__separator"></div>}
                        {item}
                    </React.Fragment>
                ))
            }
        </div>
    );
};

ActionButton.Item = ActionButtonItem;

export default ActionButton;