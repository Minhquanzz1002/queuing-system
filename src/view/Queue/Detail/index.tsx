import React, {useEffect, useState} from 'react';
import {Col, Flex, Row, Spin, Typography} from "antd";
import {IconSquarePlus} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import ActionButton from "src/shared/components/ActionButton";
import {Device} from "@modules/devices/interface";
import "./styles.scss";
import Card from "@shared/components/Card";
import Breadcrumb from "@shared/components/Breadcrumb";
import {useSingleAsync} from "@shared/hook/useAsync";
import {getDeviceByCode} from "@modules/devices/repository";
import {useParams} from "react-router-dom";
import NotFound from "@shared/components/NotFound";

const InfoItem = ({label, value}: { label: string; value: string }) => (
    <Col span={12} className="device-detail__info-item">
        <div className="device-detail__info-label">{label}</div>
        <div className="device-detail__info-value">{value}</div>
    </Col>
);

const DeviceDetailPage = () => {
    const {code} = useParams<{ code: string }>();
    const [device, setDevice] = useState<Device | null>(null);
    const loadDevice = useSingleAsync(getDeviceByCode);

    useEffect(() => {
        if (code) {
            loadDevice.execute(code).then(setDevice).catch(() => setDevice(null));
        }
    }, [code]);

    if (loadDevice.status === "loading") {
        return (
            <Flex align="center" justify="center" className="h-100vh">
                <Spin size="large" />
            </Flex>
        );
    }

    if (!device) {
        return <NotFound/>;
    }

    return (
        <div className="device-detail">
            <Flex style={{padding: '2.4rem'}} align="center" justify="space-between">
                <Breadcrumb
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
                        <InfoItem label="Loại thiết bị:" value={device.type}/>
                        <InfoItem label="Tên thiết bị:" value={device.name}/>
                        <InfoItem label="Tên đăng nhập:" value={device.username}/>
                        <InfoItem label="Địa chỉ IP:" value={device.ip}/>
                        <InfoItem label="Mật khẩu:" value={device.password}/>
                    </Row>

                    <div>
                        <div className="device-detail__info-label">Dịch vụ sử dụng:</div>
                        <div className="device-detail__info-value">{device.services.join(', ')}</div>
                    </div>
                </Card>
            </div>

            <ActionButton>
                <ActionButton.Item icon={<IconSquarePlus/>} href={`/thiet-bi/${device.code}/cap-nhat`}>Cập nhật<br/> thiết bị</ActionButton.Item>
            </ActionButton>
        </div>
    );
};

export default DeviceDetailPage;