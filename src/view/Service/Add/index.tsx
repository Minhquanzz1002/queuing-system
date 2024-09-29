import React from 'react';
import {Button, Checkbox, Col, Flex, Form, Input, Row, Typography} from "antd";
import {IconAsterisk} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import "./styles.scss";
import Card from "@shared/components/Card";
import {Link} from "react-router-dom";
import Breadcrumb from "@shared/components/Breadcrumb";

const DeviceAddPage = () => {
    return (
        <div className="device-detail">
            <Flex style={{padding: '2.4rem'}} align="center" justify="space-between">
                <Breadcrumb
                    items={[
                        {
                            title: 'Dịch vụ',
                        },
                        {
                            title: 'Danh sách dịch vụ',
                            href: '/dich-vu'
                        },
                        {
                            title: 'Thêm dịch vụ'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>

            <div style={{paddingLeft: '2.4rem', paddingRight: '6.4rem'}}>
                <Typography.Title level={3} style={{color: '#FF7506', marginBottom: '1.6rem'}}>Quản lý dịch
                    vụ</Typography.Title>

                <Card>
                    <Typography.Title level={4} style={{color: '#FF7506', marginBottom: '1.6rem'}}>Thông tin dịch
                        vụ</Typography.Title>

                    <Form
                        layout="vertical"
                    >
                        <Row gutter={[24, 0]}>
                            <Col span={12}>
                                <Flex vertical justify="space-between" className="h-100">
                                    <Form.Item label="Mã dịch vụ:" required>
                                        <Input placeholder="Nhập mã dịch vụ" size="large" autoFocus/>
                                    </Form.Item>
                                    <Form.Item label="Tên dịch vụ:" required>
                                        <Input placeholder="Nhập tên dịch vụ" size="large"/>
                                    </Form.Item>
                                </Flex>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Mô tả">
                                    <Input.TextArea placeholder="Mô tả dịch vụ" size="large" rows={5}
                                                    style={{resize: "none"}}/>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Typography.Title level={4} style={{color: '#FF7506', marginBottom: '1.2rem'}}>Quy tắc cấp
                            số</Typography.Title>

                        <Flex vertical gap="1.2rem" style={{marginBottom: '2.4rem'}}>
                            <Row>
                                <Col flex="20rem">
                                    <Checkbox value="isDaily">Tăng tự động từ:</Checkbox>
                                </Col>
                                <Col flex="auto">
                                    <Flex align="center" gap="middle">
                                        <Input size="large" style={{width:'6.5rem'}}/>
                                        <span>đến</span>
                                        <Input size="large" style={{width:'6.5rem'}}/>
                                    </Flex>
                                </Col>
                            </Row>
                            <Row>
                                <Col flex="20rem">
                                    <Checkbox value="prefix">Prefix:</Checkbox>
                                </Col>
                                <Col flex="auto">
                                    <Input size="large" style={{width:'6.5rem'}}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col flex="20rem">
                                    <Checkbox value="suffix">Suffix:</Checkbox>
                                </Col>
                                <Col flex="auto">
                                    <Input size="large" style={{width:'6.5rem'}}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col flex="20rem">
                                    <Checkbox value="isDaily">Reset mỗi ngày</Checkbox>
                                </Col>
                            </Row>
                        </Flex>

                        <Flex align="center" gap="small"
                              style={{fontSize: '1.4rem', lineHeight: '2.1rem', color: '#7E7D88'}}>
                            <IconAsterisk/>
                            <span>Là trường thông tin bắt buộc</span>
                        </Flex>
                    </Form>
                </Card>

                <Flex justify="center" gap="large">
                    <Link to="/dich-vu"><Button style={{backgroundColor: '#FFF2E7'}} htmlType="button" type="primary"
                                                size="large" ghost>Hủy bỏ</Button></Link>
                    <Button htmlType="submit" type="primary" size="large">Thêm dịch vụ</Button>
                </Flex>
            </div>
        </div>
    );
};

export default DeviceAddPage;