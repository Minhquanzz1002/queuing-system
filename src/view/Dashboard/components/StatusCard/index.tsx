import React from 'react';
import {Col, Flex, Row} from "antd";
import "./styles.scss";
import ProgressCircle from "@view/Dashboard/components/StatusCard/ProgressCircle";
import AnimatedCounter from "@view/Dashboard/components/AnimatedCounter";

type Datasets = {
    title: string;
    label: [string, string] | [string, string, string];
    data: [number, number] | [number, number, number];
    colors: [string, string] | [string, string, string];
}

type StatusCardProps = {
    icon: React.ReactNode;
    datasets: Datasets;
}

const StatusCard = ({datasets, icon}: StatusCardProps) => {
    const {data, colors, label, title} = datasets;

    const totalValue: number = data.reduce((acc: number, item: number) => acc + item, 0);
    const percentages = data.map((value: number) => totalValue > 0 ? Math.round((value ?? 0) / totalValue * 100) : 0);

    return (
        <Flex justify="space-between" align="center" className="status-card">
            <Flex gap="small">
                <Flex align="center" justify="center" className="status-card__doughnut-chart">
                    {`${percentages[0]}%`}
                    <div className={`status-card__doughnut-chart-item`}>
                        <ProgressCircle size={65}
                                        datasets={{
                                            colors,
                                            data: percentages,
                                        }}
                        />
                        {/*<RadialBarChart/>*/}
                    </div>
                </Flex>
                <Flex vertical>
                    <div className="status-card__total">
                        <AnimatedCounter end={totalValue} duration={1000}/>
                    </div>
                    <Flex align="center" gap="0.4rem" style={{color: colors[0]}}>
                        <div className={`status-card__icon`}>{icon}</div>
                        <div className={`status-card__label`}>{title}</div>
                    </Flex>
                </Flex>
            </Flex>
            <Flex vertical className="status-card__status">
                {
                    data.map((value, index: number) => (
                            <Row key={value}>
                                <Col flex="11rem" className="status-card__status-name">
                                    <Flex gap="small" align="center">
                                        <div className={`status-card__dot`}
                                             style={{backgroundColor: colors[index]}}></div>
                                        {label[index]}
                                    </Flex>
                                </Col>
                                <Col flex="auto" className={`status-card__status-value`} style={{color: colors[0]}}>
                                    <AnimatedCounter end={value} duration={1000}/>
                                </Col>
                            </Row>
                        )
                    )
                }
            </Flex>
        </Flex>
    );
};

export default StatusCard;