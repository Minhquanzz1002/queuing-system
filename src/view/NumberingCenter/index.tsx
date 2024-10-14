import {Col, Flex, Row, Typography} from "antd";
import {logo} from "@assets/images";
import React from "react";
import CardInfo from "@shared/components/CardInfo";

const NumberingCenter = () => {
    return (
        <div>
            <Flex>
                <div style={{width: '6rem', height: '5rem', marginTop: '3.2', marginLeft: '4.8rem'}}>
                    <img src={logo} alt="Logo" style={{objectFit: 'cover', width: '6rem', height: '5rem'}}/>
                </div>
            </Flex>
            <Flex justify="center" align="center" style={{marginTop: '2.4rem'}}>
                <Typography.Title level={2} style={{fontSize: '3.2rem'}}>Thông tin hiển thị trên thiết bị
                    MHTT-01</Typography.Title>
            </Flex>
            <Flex justify="center" align="center">
                <div style={{width: '98rem'}}>
                    <div style={{
                        fontSize: '2.4rem',
                        fontWeight: 700,
                        fontFamily: 'Nunito',
                        lineHeight: '3.6rem',
                        color: '#282739',
                        marginTop: '5rem',
                        marginBottom: '3.2rem'
                    }}>
                        Số thứ tự đang hiển thị trên thiết bị:
                    </div>
                    <Row gutter={[56, 56]}>
                        <Col span={8}>
                            <CardInfo footerText="Quầy dịch vụ số 1" variant="red">
                                <div style={{fontSize: '3rem', fontWeight: 700, lineHeight: '4.5rem'}}>201001</div>
                            </CardInfo>
                        </Col>
                        <Col span={8}>
                            <CardInfo footerText="Quầy dịch vụ số 1" variant="pink">
                                <div style={{fontSize: '3rem', fontWeight: 700, lineHeight: '4.5rem'}}>201001</div>
                            </CardInfo>
                        </Col>
                        <Col span={8}>
                            <CardInfo footerText="Quầy dịch vụ số 1" variant="orange">
                                <div style={{fontSize: '3rem', fontWeight: 700, lineHeight: '4.5rem'}}>201001</div>
                            </CardInfo>
                        </Col>
                        <Col span={8}>
                            <CardInfo footerText="Quầy dịch vụ số 1" variant="blue">
                                <div style={{fontSize: '3rem', fontWeight: 700, lineHeight: '4.5rem'}}>201001</div>
                            </CardInfo>
                        </Col>
                        <Col span={8}>
                            <CardInfo footerText="Quầy dịch vụ số 1" variant="green">
                                <div style={{fontSize: '3rem', fontWeight: 700, lineHeight: '4.5rem'}}>201001</div>
                            </CardInfo>
                        </Col>
                        <Col span={8}>
                            <CardInfo footerText="Quầy dịch vụ số 1" variant="purple">
                                <div style={{fontSize: '3rem', fontWeight: 700, lineHeight: '4.5rem'}}>201001</div>
                            </CardInfo>
                        </Col>
                    </Row>
                </div>
            </Flex>
        </div>
    );
};

export default NumberingCenter;