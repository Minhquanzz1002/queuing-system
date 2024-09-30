import React from 'react';
import {Col, Flex, Row} from "antd";
import "./styles.scss";
import ProgressCircle from "@view/Dashboard/components/StatusCard/ProgressCircle";

type StatusCardProps = {
    icon: React.ReactNode;
    title: string;
    data: Array<{ key: string; value: number }>;
    variant?: "orange" | "blue" | "green";
}

const StatusCard = ({data, variant = "orange", icon}: StatusCardProps) => {
    const formattedNumber = (value: number) => {
        return value.toLocaleString('de-DE');
    };

    const totalValue = data.reduce((acc, item) => acc + item.value, 0);
    const firstValuePercentage = totalValue > 0 ? Math.round((data[0].value / totalValue) * 100) : 0;

    return (
        <Flex justify="space-between" align="center" className="status-card">
            <Flex gap="small">
                <Flex align="center" justify="center" className="status-card__doughnut-chart">
                    {`${firstValuePercentage}%`}
                    <div className={`status-card__doughnut-chart--1 status-card__doughnut-chart--1--${variant}`}>
                        <ProgressCircle size={60} progress={firstValuePercentage}/>
                    </div>
                    {/*<div className={`status-card__doughnut-chart--2 status-card__doughnut-chart--2--${variant}`}>*/}
                    {/*    <ProgressCircle size={40} progress={firstValuePercentage}/>*/}
                    {/*</div>*/}
                </Flex>
                <Flex vertical>
                    <div className="status-card__total">{formattedNumber(totalValue)}</div>
                    <Flex align="center" gap="0.4rem">
                        <div className={`status-card__icon status-card--${variant} `}>{icon}</div>
                        <div className={`status-card__label status-card--${variant}`}>Thiết bị</div>
                    </Flex>
                </Flex>
            </Flex>
            <Flex vertical className="status-card__status">
                {
                    data.map((item) => (
                        <Row>
                            <Col flex="11rem" className="status-card__status-name">
                                <Flex gap="small" align="center">
                                    <div className={`status-card__dot status-card__dot--${variant}`}></div>
                                    {item.key}
                                </Flex>
                            </Col>
                            <Col flex="auto" className={`status-card__status-value status-card--${variant}`}>
                                {formattedNumber(item.value)}
                            </Col>
                        </Row>
                    ))
                }
            </Flex>
        </Flex>
    );
};

export default StatusCard;