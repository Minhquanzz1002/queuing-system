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
import {Link} from "react-router-dom";
import CardChart from "@view/Dashboard/components/CardChart";

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
                                    total={4221}
                            />
                        </Col>
                        <Col span={6}>
                            <Widget title={<>Số thứ tự <br/> đã sử dụng</>}
                                    change={{value: 32.41, direction: 'down'}}
                                    icon={{
                                        icon: <IconCalendarCheck style={{color: 'rgba(53, 199, 90, 1)'}}/>,
                                        color: 'rgba(53, 199, 90, 0.15)'
                                    }}
                                    total={3721}
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
                    <CardChart/>
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
                        <Link to="/admin/thiet-bi">
                            <StatusCard icon={<IconMonitor height={14} width={14}/>}
                                        datasets={{
                                            title: "Thiết bị",
                                            label: ["Đang hoạt động", "Ngưng hoạt động"],
                                            colors: ["#FF7506", "#7E7D88"],
                                            data: [3799, 422]
                                        }}
                            />
                        </Link>
                        <Link to="/admin/dich-vu">
                            <StatusCard icon={<IconChat height={14} width={14}/>}
                                        datasets={{
                                            title: "Dịch vụ",
                                            label: ["Đang hoạt động", "Ngưng hoạt động"],
                                            colors: ["#4277FF", "#7E7D88"],
                                            data: [210, 66]
                                        }}
                            />
                        </Link>
                        <Link to="/admin/cap-so">
                            <StatusCard icon={<IconLayer height={14} width={14}/>}
                                        datasets={{
                                            title: "Cấp số",
                                            label: ["Đã sử dụng", "Đang chờ", "Bỏ qua"],
                                            colors: ["#35C75A", "#7E7D88", "#F178B6"],
                                            data: [3721, 486, 32]
                                        }}
                            />
                        </Link>
                    </Flex>
                    <Calendar/>
                </Flex>
            </Col>
        </Row>
    );
};

export default Dashboard;