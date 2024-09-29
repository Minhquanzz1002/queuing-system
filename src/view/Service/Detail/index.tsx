import React, {useEffect, useState} from 'react';
import {Col, Flex, Input, Row, Spin, Typography} from "antd";
import {IconBackSquare, IconEditSquare} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import ActionButton from "src/shared/components/ActionButton";
import "./styles.scss";
import Card from "@shared/components/Card";
import Breadcrumb from "@shared/components/Breadcrumb";
import {useSingleAsync} from "@shared/hook/useAsync";
import {useParams} from "react-router-dom";
import NotFound from "@shared/components/NotFound";
import {Service} from "@modules/services/interface";
import {getServiceByCode} from "@modules/services/repository";

const InfoItem = ({label, value}: { label: string; value: string }) => (
    <div className="service-detail__info-item">
        <div className="service-detail__info-label">{label}</div>
        <div className="service-detail__info-value">{value}</div>
    </div>
);

const ServiceDetailPage = () => {
    const {code} = useParams<{ code: string }>();
    const [service, setService] = useState<Service | null>(null);
    const loadService = useSingleAsync(getServiceByCode);

    useEffect(() => {
        if (code) {
            loadService.execute(code).then(setService).catch(() => setService(null));
        }
    }, [code]);

    if (loadService.status === "loading") {
        return (
            <Flex align="center" justify="center" className="h-100vh">
                <Spin size="large"/>
            </Flex>
        );
    }

    if (!service) {
        return <NotFound/>;
    }

    return (
        <div className="service-detail">
            <Flex style={{padding: '2.4rem'}} align="center" justify="space-between">
                <Breadcrumb
                    items={[
                        {
                            title: 'Dịch vụ'
                        },
                        {
                            title: 'Danh sách dịch vụ',
                            href: '/dich-vu'
                        },
                        {
                            title: 'Chi tiết'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>

            <div className="service-detail__content">
                <Typography.Title level={3} style={{marginBottom: '1.6rem'}}>Quản lý dịch vụ</Typography.Title>


                <Row gutter={24}>
                    <Col flex="37rem">
                        <Card style={{paddingInline: '1.6rem'}}>
                            <Typography.Title level={4} style={{marginBottom: '1.2rem'}}>Thông tin dịch
                                vụ</Typography.Title>

                            <Flex gap="1.2rem" vertical className="service-detail__info-grid">
                                <InfoItem label="Mã dịch vụ:" value={service.code}/>
                                <InfoItem label="Tên dịch vụ:" value={service.name}/>
                                <InfoItem label="Mô tả:" value={service.description}/>
                            </Flex>

                            <Typography.Title level={4} style={{marginBottom: '1.2rem'}}>Quy tắc cấp
                                số</Typography.Title>

                            <Flex vertical gap="1.2rem" style={{marginBottom: '2.4rem'}}>
                                <Row>
                                    <Col flex="10rem">
                                        <Flex align="center" className="h-100">
                                            Tăng tự động:
                                        </Flex>
                                    </Col>
                                    <Col flex="auto">
                                        <Flex align="center" gap="small">
                                            <Input size="large" style={{width:'6.5rem', background: 'none', color: 'black'}} value={service.fromNumber} disabled/>
                                            <span>đến</span>
                                            <Input size="large" style={{width:'6.5rem', background: 'none', color: 'black'}} value={service.toNumber} disabled/>
                                        </Flex>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col flex="10rem">
                                        <Flex align="center" className="h-100">Prefix:</Flex>
                                    </Col>
                                    <Col flex="auto">
                                        <Input size="large" style={{width:'6.5rem', background: 'none', color: 'black'}} value={service.prefix} disabled/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col flex="10rem">
                                        <Flex align="center" className="h-100">Suffix:</Flex>
                                    </Col>
                                    <Col flex="auto">
                                        <Input size="large" style={{width:'6.5rem', background: 'none', color: 'black'}} value={service.suffix} disabled/>
                                    </Col>
                                </Row>
                                {
                                    service.isDaily && (
                                        <div>Reset mỗi ngày</div>
                                    )
                                }
                                <div>
                                    Ví dụ: {code}-2001
                                </div>
                            </Flex>
                        </Card>
                    </Col>
                    <Col flex={1}>
                        <Card>
                            <Typography.Title level={4} style={{marginBottom: '1.6rem'}}>Thông tin dịch
                                vụ</Typography.Title>


                            <Typography.Title level={4} style={{marginBottom: '1.6rem'}}>Quy tắc cấp
                                số</Typography.Title>
                        </Card>
                    </Col>
                </Row>
            </div>

            <ActionButton>
                <ActionButton.Item icon={<IconEditSquare/>}>Cập nhật<br/> danh sách</ActionButton.Item>
                <ActionButton.Item icon={<IconBackSquare/>} href="/dich-vu">Quay lại</ActionButton.Item>
            </ActionButton>
        </div>
    );
};

export default ServiceDetailPage;