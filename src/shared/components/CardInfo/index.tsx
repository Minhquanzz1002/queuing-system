import React from "react";
import {Flex} from "antd";
import "./styles.scss";

type CardInfoProps = {
    children: React.ReactNode;
    variant?: 'red' | 'pink' | 'blue' | 'green' | 'orange' | 'purple';
    footerText: string;
}
const CardInfo = ({children, variant = 'red', footerText}: CardInfoProps) => {
    return (
        <div className="card-info">
            <div className={`card-info__content card-info__content--${variant}`}>
                {children}
            </div>
            <Flex justify="center" align="center" className={`card-info__footer card-info__footer--${variant}`}>
                <span>{footerText}</span>
            </Flex>
        </div>
    );
};

export default CardInfo;