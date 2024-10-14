import React from 'react';
import {Col, Flex, Row, Typography} from "antd";
import {logo} from "@assets/images";
import CardCounter from "src/view/Counter/components/CardCounterInfo";
import {IconLayer, IconMap} from "@assets/icons";


const CounterPage = () => {
    return (
        <div>
            <Flex>
                <div style={{width: '6rem', height: '5rem', marginTop: '3.2', marginLeft: '4.8rem'}}>
                    <img src={logo} alt="Logo" style={{objectFit: 'cover', width: '6rem', height: '5rem'}}/>
                </div>
            </Flex>
            <Flex justify="center" align="center" style={{marginTop: '2.4rem'}}>
                <Typography.Title level={2} style={{fontSize: '3.2rem'}}>Thông tin hiển thị trên thiết bị
                    KIO_01</Typography.Title>
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
                    }}>Các lựa chọn cho khách hàng:
                    </div>
                    <Row gutter={100}>
                        <Col span={12}>
                            <CardCounter text="201001" footerText="Số thứ tự hiển thị trên thiết bị" icon={<IconLayer width={30} height={30} />}/>
                        </Col>
                        <Col span={12}>
                            <CardCounter text="Quầy dịch vụ số 1" footerText="Vị trí hiển thị thiết bị" icon={<IconMap />} variant="orange"/>
                        </Col>
                    </Row>
                </div>
            </Flex>
        </div>
    );
};

export default CounterPage;