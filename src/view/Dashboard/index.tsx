import React from 'react';
import {Col, Flex, Row, Typography} from "antd";
import TopBar from "@shared/components/TopBar";
import Breadcrumb from "@shared/components/Breadcrumb";
import Widget from "@view/Dashboard/components/Widget";
import {
    IconBookmarkStar,
    IconCalendarCheck,
    IconCalendarNonCheck,
    IconChat,
    IconLayer,
    IconMonitor
} from "@assets/icons";
import Calendar from "@view/Dashboard/components/Calendar";
import StatusCard from "@view/Dashboard/components/StatusCard";

const Dashboard = () => {
    return (
        <Row>
            <Col flex="auto">
                <Flex align="center" style={{padding: '2.4rem'}}>
                    <Breadcrumb
                        items={[
                            {
                                title: 'Dashboard'
                            }
                        ]}
                    />
                </Flex>
                <Flex gap="1.6rem" vertical style={{paddingInline: '2.4rem', paddingTop: '1.6rem'}}>
                    <Typography.Title level={3}>Biều đồ cấp số</Typography.Title>
                    <Row gutter={[13, 13]}>
                        <Col span={6}>
                            <Widget title={<>Số thứ tự <br/> đã cấp</>}
                                    change={{value: 32.41, direction: 'up'}}
                                    icon={{
                                        icon: <IconCalendarNonCheck style={{color: 'rgba(100, 147, 249, 1)'}}/>,
                                        color: 'rgba(100, 147, 249, 0.15)'
                                    }}
                                    total={4.221}
                            />
                        </Col>
                        <Col span={6}>
                            <Widget title={<>Số thứ tự <br/> đã sử dụng</>}
                                    change={{value: 32.41, direction: 'down'}}
                                    icon={{
                                        icon: <IconCalendarCheck style={{color: 'rgba(53, 199, 90, 1)'}}/>,
                                        color: 'rgba(53, 199, 90, 0.15)'
                                    }}
                                    total={3.721}
                            />
                        </Col>
                        <Col span={6}>
                            <Widget title={<>Số thứ tự <br/> đang chờ</>}
                                    change={{value: 32.41, direction: 'up'}}
                                    icon={{
                                        icon: <IconCalendarCheck style={{color: 'rgba(255, 172, 106, 1)'}}/>,
                                        color: 'rgba(255, 172, 106, 0.15)'
                                    }}
                                    total={468}
                            />
                        </Col>
                        <Col span={6}>
                            <Widget title={<>Số thứ tự <br/> đã bỏ qua</>}
                                    change={{
                                        value: 32.41,
                                        direction: 'down'
                                    }}
                                    icon={{
                                        icon: <IconBookmarkStar style={{color: 'rgba(248, 109, 109, 1)'}}/>,
                                        color: 'rgba(248, 109, 109, 0.15)'
                                    }}
                                    total={32}
                            />
                        </Col>
                    </Row>
                </Flex>
            </Col>
            <Col flex="40rem" style={{background: 'white', borderRadius: '8px 0 0 8px', minHeight: '100vh'}}>
                <Flex justify="end" align="center" style={{padding: '2.4rem'}}>
                    <TopBar/>
                </Flex>
                <Flex gap="1.6rem" vertical
                      style={{paddingInline: '2.4rem', paddingTop: '1.6rem', paddingBottom: '1.6rem'}}>
                    <Typography.Title level={3}>Tổng quan</Typography.Title>
                    <Flex vertical gap="1.2rem">
                        <StatusCard variant="orange"
                                    title="Thiết bị"
                                    icon={<IconMonitor height={14} width={14}/>}
                                    data={[
                                        {key: "Đang hoạt động", value: 3799},
                                        {key: "Ngưng hoạt động", value: 422},
                                    ]}
                        />
                        <StatusCard variant="blue"
                                    title="Dịch vụ"
                                    icon={<IconChat height={14} width={14}/>}
                                    data={[
                                        {key: "Đang hoạt động", value: 210},
                                        {key: "Ngưng hoạt động", value: 66},
                                    ]}
                        />
                        <StatusCard variant="green"
                                    title="Cấp số"
                                    icon={<IconLayer height={14} width={14}/>}
                                    data={[
                                        {key: "Đã sử dụng", value: 3721},
                                        {key: "Đang chờ", value: 486},
                                        {key: "Bỏ qua", value: 32},
                                    ]}
                        />
                    </Flex>
                    <Calendar/>
                </Flex>
            </Col>
        </Row>
    );
};

export default Dashboard;