import React from 'react';
import {Breadcrumb, Button, Col, Flex, Form, Input, Row, Typography} from "antd";
import {IconAsterisk, IconChevronRight} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import "./styles.scss";
import Card from "@shared/components/Card";
import Select from "@shared/components/Select";
import {Link} from "react-router-dom";

const DeviceAddPage = () => {
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

            <div style={{paddingLeft: '2.4rem', paddingRight: '6.4rem'}}>
                <Typography.Title level={3} style={{color: '#FF7506', marginBottom: '1.6rem'}}>Quản lý thiết
                    bị</Typography.Title>

                <Card>
                    <Typography.Title level={4} style={{color: '#FF7506', marginBottom: '1.6rem'}}>Thông tin thiết
                        bị</Typography.Title>

                    <Form
                        layout="vertical"
                    >
                        <Row gutter={[24, 0]}>
                            <Col span={12}>
                                <Form.Item label="Mã thiết bị:" required>
                                    <Input placeholder="Nhập mã thiết bị" size="large" autoFocus/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Loại thiết bị:" required>
                                    <Select placeholder="Chọn loại thiết bị"
                                            options={[
                                                {label: 'Kiosk', value: 'Kiosk'},
                                                {label: 'Display counter', value: 'Display counter'},
                                            ]}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Tên thiết bị:" required>
                                    <Input placeholder="Nhập tên thiết bị" size="large"/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Tên đăng nhập:" required>
                                    <Input placeholder="Nhập tài khoản" size="large"/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Địa chỉ IP:" required>
                                    <Input placeholder="Nhập địa chỉ IP" size="large"/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Mật khẩu:" required>
                                    <Input placeholder="Nhập mật khẩu" size="large"/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item label="Dịch vụ sử dụng:" required>
                            <Select suffixIcon={null}
                                    mode="multiple"
                                    placeholder="Nhập dịch vụ sử dụng"
                                    options={[
                                        {label: 'Khám tim mạch', value: 'Khám tim mạch'},
                                        {label: 'Khám sản phụ khoa', value: 'Khám sản phụ khoa'},
                                        {label: 'Khám răng hàm mặt', value: 'Khám răng hàm mặt'},
                                        {label: 'Khám tai mũi họng', value: 'Khám tai mũi họng'},
                                    ]}

                            />
                        </Form.Item>

                        <Flex align="center" gap="small" style={{fontSize: '1.4rem', lineHeight: '2.1rem', color: '#7E7D88'}}>
                            <IconAsterisk/>
                            <span>Là trường thông tin bắt buộc</span>
                        </Flex>
                    </Form>
                </Card>

                <Flex justify="center" gap="large">
                    <Link to="/thiet-bi"><Button style={{backgroundColor: '#FFF2E7'}} htmlType="button" type="primary" size="large" ghost>Hủy bỏ</Button></Link>
                    <Button htmlType="submit" type="primary" size="large">Thêm thiết bị</Button>
                </Flex>
            </div>
        </div>
    );
};

export default DeviceAddPage;