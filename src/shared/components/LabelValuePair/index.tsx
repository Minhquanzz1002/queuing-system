import React from 'react';
import "./styles.scss";
import {Col, Row, Typography} from "antd";

type LabelValuePairProps = {
    label: string;
    value: string | React.ReactNode;
}

const LabelValuePair = ({label, value}: LabelValuePairProps) => {
    return (
        <Row className="label-value-pair">
            <Col flex="15rem" className="label-value-pair__label">
                <Typography.Text strong className="label-value-pair__label-text">{label}</Typography.Text>
            </Col>
            <Col flex="auto" className="label-value-pair__value">
                <Typography.Text className="label-value-pair__value-text">{value}</Typography.Text>
            </Col>
        </Row>
    );
};

export default LabelValuePair;