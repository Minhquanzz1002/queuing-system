import React, {CSSProperties} from 'react';
import "./styles.scss";
import {Flex} from "antd";
import {IconArrowDownShort, IconArrowUpShort} from "@assets/icons";
import AnimatedCounter from "@view/Dashboard/components/AnimatedCounter";

type WidgetProps = {
    title: React.ReactNode;
    total: number;
    change: {
        value: number;
        direction: "up" | "down";
    };
    icon: {
        color: string;
        icon: React.ReactNode;
    }
}

const Widget = ({title, total, change, icon}: WidgetProps) => {
    const ArrowIcon = change.direction === "up" ? IconArrowUpShort : IconArrowDownShort;

    const getChangeStyles = (): CSSProperties => {
        if (change.direction === "up") {
            return {
                backgroundColor: "rgba(255, 149, 1, 0.15)",
                color: "rgba(255, 145, 56, 1)"
            };
        } else {
            return {
                backgroundColor: "rgba(231, 63, 63, 0.15)",
                color: "rgba(231, 63, 63, 1)"
            };
        }
    };

    return (
        <div className="widget">
            <Flex align="center" gap="1.2rem">
                <Flex align="center" justify="center" className="widget__icon"
                      style={{backgroundColor: icon.color}}>
                    {icon.icon}
                </Flex>
                <div className="widget__title">{title}</div>
            </Flex>
            <Flex align="center" justify="space-between" className="widget__content">
                <div className="widget__total">
                    <AnimatedCounter end={total} duration={1000}/>
                </div>
                <Flex align="center" justify="center" className="widget__change"
                      style={getChangeStyles()}>
                    <ArrowIcon/>
                    {change.value}%
                </Flex>
            </Flex>
        </div>
    );
};

export default Widget;