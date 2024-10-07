import React, {useEffect, useState} from 'react';
import {Col, Flex, Form, Input as AntInput, Row, Spin, TableProps, Typography} from "antd";
import {IconBackSquare, IconCircle, IconEditSquare} from "@assets/icons";
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
import Select from "@shared/components/Select";
import Input from "@shared/components/Input";
import Table from "@shared/components/Table";
import {Queue} from "@modules/queue/interface";
import {getQueues} from "@modules/queue/repository";


const InfoItem = ({label, value}: { label: string; value: string }) => (
    <div className="service-detail__info-item">
        <div className="service-detail__info-label">{label}</div>
        <div className="service-detail__info-value">{value}</div>
    </div>
);

const columns: TableProps<Queue>['columns'] = [
    {
        title: 'Số thứ tự',
        dataIndex: 'serialNumber',
        key: 'queue_serialNumber',
    },
    {
        title: 'Trạng thái',
        key: 'queue_status',
        dataIndex: 'status',
        render: (status) => (
            <>
                {
                    status === 'USED' ? (
                        <Flex gap="small"><IconCircle style={{color: '#7E7D88'}}/>Đã sử dụng</Flex>
                    ) : status === 'WAITING' ? (
                        <Flex gap="small"><IconCircle style={{color: '#4277FF'}}/>Đang chờ</Flex>
                    ) : (
                        <Flex gap="small"><IconCircle style={{color: '#E73F3F'}}/>Bỏ qua</Flex>
                    )
                }
            </>
        ),
    },
];

const ServiceDetailPage = () => {
    const {code} = useParams<{ code: string }>();
    const [service, setService] = useState<Service | null>(null);
    const [queues, setQueues] = useState<Queue[]>([]);
    const loadService = useSingleAsync(getServiceByCode);
    const loadQueues = useSingleAsync(getQueues);

    useEffect(() => {
        loadService.execute(code).then(setService).catch(() => setService(null));
    }, [code]);

    const fetchQueues = () => {
        if (service) {
            loadQueues.execute({serviceId: service.id}).then(setQueues).catch(() => setQueues([]));
        }
    };

    useEffect(() => {
        fetchQueues();
    }, [service]);

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
                            href: '/admin/dich-vu'
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
                                {service.description && <InfoItem label="Mô tả:" value={service.description}/>}
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
                                            <AntInput size="large"
                                                      style={{width: '6.5rem'}}
                                                      value={service.fromNumber} readOnly/>
                                            <span>đến</span>
                                            <AntInput size="large"
                                                      style={{width: '6.5rem'}}
                                                      value={service.toNumber} readOnly/>
                                        </Flex>
                                    </Col>
                                </Row>
                                {
                                    service.usePrefix && (
                                        <Row>
                                            <Col flex="10rem">
                                                <Flex align="center" className="h-100">Prefix:</Flex>
                                            </Col>
                                            <Col flex="auto">
                                                <AntInput size="large"
                                                          style={{width: '6.5rem'}}
                                                          value={service.prefix} readOnly/>
                                            </Col>
                                        </Row>
                                    )
                                }
                                {
                                    service.useSuffix && (
                                        <Row>
                                            <Col flex="10rem">
                                                <Flex align="center" className="h-100">Suffix:</Flex>
                                            </Col>
                                            <Col flex="auto">
                                                <AntInput size="large"
                                                          style={{width: '6.5rem'}}
                                                          value={service.suffix} readOnly/>
                                            </Col>
                                        </Row>
                                    )
                                }
                                {
                                    service.isDaily && (
                                        <div>Reset mỗi ngày</div>
                                    )
                                }
                                <div>
                                    Ví dụ: {`${service.usePrefix ? service.prefix : ''}${service.useFromToNumber ? service.fromNumber : ''}${service.useSuffix ? service.suffix : ''}`}
                                </div>
                            </Flex>
                        </Card>
                    </Col>
                    <Col flex={1}>
                        <Card>
                            <Form layout="vertical"
                                  initialValues={{status: 'all'}}
                            >
                                <Flex align="center" justify="space-between" wrap>
                                    <Form.Item label="Trạng thái" name="status">
                                        <Select size="large"
                                                style={{width: '16rem'}}
                                        >
                                            <Select.Option key="all">Tất cả</Select.Option>
                                            <Select.Option key="USED">Đã sử dụng</Select.Option>
                                            <Select.Option key="SKIPPED">Bỏ qua</Select.Option>
                                            <Select.Option key="WAITING">Đang chờ</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label="Từ khóa" name="search">
                                        <Input size="large" placeholder="Nhập từ khóa"/>
                                    </Form.Item>
                                </Flex>
                            </Form>
                            <Table bordered columns={columns} dataSource={queues} rowKey={record => record.id}/>
                        </Card>
                    </Col>
                </Row>
            </div>

            <ActionButton>
                <ActionButton.Item icon={<IconEditSquare/>} onClick={fetchQueues}>Cập nhật<br/> danh sách</ActionButton.Item>
                <ActionButton.Item icon={<IconBackSquare/>} href="/admin/dich-vu">Quay lại</ActionButton.Item>
            </ActionButton>
        </div>
    );
};

export default ServiceDetailPage;