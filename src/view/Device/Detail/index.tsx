import React, {useState} from 'react';
import {Breadcrumb, Col, Flex, Row, Typography} from "antd";
import {IconChevronRight, IconSquarePlus} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import ActionButton from "@shared/components/Button/ActionButton";
import {Device} from "@modules/devices/interface";
import "./styles.scss";
import Card from "@shared/components/Card";

const InfoItem = ({label, value} : {label: string; value: string}) => (
    <Col span={12} className="device-detail__info-item">
        <div className="device-detail__info-label">{label}</div>
        <div className="device-detail__info-value">{value}</div>
    </Col>
);

const DeviceDetailPage = () => {
    const [device] = useState<Device>({
        code: 'KIO_01',
        name: 'Kiosk',
        ip: '192.168.1.10',
        status: 'ACTIVE',
        connected: false,
        services: [
            'Khám tim mạch', 'Khám mắt', 'Khám tim'
        ]
    });

    return (
        <div className="device-detail">
            <Flex style={{padding: '2.4rem'}} align="center" justify="space-between">
                <Breadcrumb
                    separator={<IconChevronRight/>}
                    items={[
                        {
                            title: 'Thiết bị'
                        },
                        {
                            title: 'Danh sách thiết bị',
                            href: '/thiet-bi'
                        },
                        {
                            title: 'Chi tiết thiết bị'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>

            <div className="device-detail__content">
                <Typography.Title level={3} style={{marginBottom: '1.6rem'}}>Quản lý thiết
                    bị</Typography.Title>

                <Card>
                    <Typography.Title level={4} style={{marginBottom: '1.6rem'}}>Thông tin thiết
                        bị</Typography.Title>

                    <Row gutter={[16, 16]} className="device-detail__info-grid">
                        <InfoItem label="Mã thiết bị:" value={device.code}/>
                        <InfoItem label="Loại thiết bị:" value="Kiosk"/>
                        <InfoItem label="Tên thiết bị:" value={device.name}/>
                        <InfoItem label="Tên đăng nhập:" value="Quan123123"/>
                        <InfoItem label="Địa chỉ IP:" value={device.ip}/>
                        <InfoItem label="Mật khẩu:" value="CMS"/>
                    </Row>

                    <div>
                        <div className="device-detail__info-label">Dịch vụ sử dụng:</div>
                        <div className="device-detail__info-value">{device.services.join(', ')}</div>
                    </div>
                </Card>
            </div>

            <ActionButton icon={<IconSquarePlus/>} to="/thiet-bi/them">
                Cập nhật<br/> thiết bị
            </ActionButton>
        </div>
    );
};

export default DeviceDetailPage;