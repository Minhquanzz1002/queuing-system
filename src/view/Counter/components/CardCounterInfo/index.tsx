import React from "react";
import {Flex} from "antd";
import "./styles.scss";

type CardProps = {
    footerText: string;
    icon: React.ReactNode;
    text: string;
    variant?: "blue" | "orange";
}

const CardCounterInfo = ({text, footerText, variant = 'blue', icon}: CardProps) => {
    return (
        <div className="card-counter-info">
            <Flex vertical justify="center" align="center" className={`card-counter-info__content card-counter-info__content--${variant}`}>
                <Flex justify="center" align="center" className={`card-counter-info__wrap-icon card-counter-info__wrap-icon--${variant}`}>
                    {icon}
                </Flex>
                <div className="card-counter-info__content-text">{text}</div>
            </Flex>
            <Flex justify="center" align="center" className={`card-counter-info__footer card-counter-info__footer--${variant}`}>
                {footerText}
            </Flex>
        </div>
    );
};

export default CardCounterInfo;