import React, {useEffect, useState} from 'react';
import {Col, Flex, Row, Typography} from "antd";
import {IconBackSquare, IconCircle} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import ActionButton from "src/shared/components/ActionButton";
import "./styles.scss";
import Card from "@shared/components/Card";
import Breadcrumb from "@shared/components/Breadcrumb";
import {useSingleAsync} from "@shared/hook/useAsync";
import {useParams} from "react-router-dom";
import NotFound from "@shared/components/NotFound";
import {Queue} from "@modules/queue/interface";
import {getQueueById} from "@modules/queue/repository";
import LabelValuePair from "@shared/components/LabelValuePair";
import {formatDateTime} from "@helper/functions";
import Loader from "@shared/components/Loader";

const renderStatus = (status: Queue['status']) => {
    if (status === 'USED') {
        return <Flex gap="small" align="center"><IconCircle style={{color: '#7E7D88'}}/>Đã sử dụng</Flex>;
    }
    if (status === 'WAITING') {
        return <Flex gap="small" align="center"><IconCircle style={{color: '#4277FF'}}/>Đang chờ</Flex>;
    }
    return <Flex gap="small" align="center"><IconCircle style={{color: '#F9A825'}}/>Đã bỏ qua</Flex>;
};

const QueueDetailPage = () => {
    const {id} = useParams<{ id: string }>();
    const [queue, setQueue] = useState<Queue | null>(null);
    const loadDevice = useSingleAsync(getQueueById);

    useEffect(() => {
        if (id) {
            loadDevice.execute(id).then(setQueue).catch(() => setQueue(null));
        }
    }, [id]);

    if (loadDevice.status === "loading") {
        return <Loader/>;
    }

    if (!queue) {
        return <NotFound/>;
    }

    return (
        <div className="queue-detail">
            <Flex style={{padding: '2.4rem'}} align="center" justify="space-between">
                <Breadcrumb
                    items={[
                        {
                            title: 'Cấp số'
                        },
                        {
                            title: 'Danh sách cấp số',
                            href: '/admin/cap-so'
                        },
                        {
                            title: 'Chi tiết'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>

            <div className="queue-detail__content">
                <Typography.Title level={3} style={{marginBottom: '1.6rem'}}>
                    Quản lý cấp số
                </Typography.Title>

                <Card>
                    <Typography.Title level={4} style={{marginBottom: '1.6rem'}}>
                        Thông tin cấp số
                    </Typography.Title>

                    <Row>
                        <Col span={12}>
                            <Flex vertical gap="1.6rem">
                                <LabelValuePair label="Họ tên:" value={queue.customer.name}/>
                                <LabelValuePair label="Tên dịch vụ:" value={queue.service.name}/>
                                <LabelValuePair label="Số thứ tự:" value={queue.serialNumber}/>
                                <LabelValuePair label="Thời gian cấp:" value={formatDateTime(queue.issueTime)}/>
                                <LabelValuePair label="Hạn sử dụng:" value={formatDateTime(queue.expiryDate)}/>
                            </Flex>
                        </Col>
                        <Col span={12}>
                            <Flex vertical gap="1.6rem">
                                <LabelValuePair label="Nguồn cấp:" value={queue.issueSource}/>
                                <LabelValuePair label="Trạng thái:" value={renderStatus(queue.status)}/>
                                <LabelValuePair label="Số điện thoại:" value={queue.customer.phone}/>
                                <LabelValuePair label="Địa chỉ email:" value={queue.customer.email}/>
                            </Flex>
                        </Col>
                    </Row>
                </Card>
            </div>

            <ActionButton>
                <ActionButton.Item icon={<IconBackSquare/>} href={`/admin/cap-so`}>Quay lại</ActionButton.Item>
            </ActionButton>
        </div>
    );
};

export default QueueDetailPage;