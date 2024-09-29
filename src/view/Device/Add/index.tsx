import React from 'react';
import {Button, Col, Flex, Form, Input, message, Row, Typography} from "antd";
import {IconAsterisk} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import "./styles.scss";
import Card from "@shared/components/Card";
import Select from "@shared/components/Select";
import {Link, useNavigate} from "react-router-dom";
import Breadcrumb from "@shared/components/Breadcrumb";
import {useSingleAsync} from "@shared/hook/useAsync";
import {addDevice} from "@modules/devices/repository";

const DeviceAddPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const addDeviceCall = useSingleAsync(addDevice);

    const handleSubmit = (values: any) => {
        console.log(values);
        try {
            addDeviceCall.execute({
                code: values.code,
                type: values.type,
                status: 'INACTIVE',
                connected: false,
                name: values.name,
                username: values.username,
                password: values.password,
                ip: values.ip,
                services: values.services,
            });

            message.success("Thiết bị đã được thêm thành công", 5);
            navigate("/thiet-bi");
        } catch (error) {
            message.error("Đã có lỗi xảy ra. Hãy thử lại sau!", 5);
            console.error(error);
        }
    };

    return (
        <div className="device-detail">
            <Flex style={{padding: '2.4rem'}} align="center" justify="space-between">
                <Breadcrumb
                    items={[
                        {
                            title: 'Thiết bị',
                        },
                        {
                            title: 'Danh sách thiết bị',
                            href: '/thiet-bi'
                        },
                        {
                            title: 'Thêm thiết bị'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>

            <div style={{paddingLeft: '2.4rem', paddingRight: '6.4rem'}}>
                <Typography.Title level={3} style={{marginBottom: '1.6rem'}}>Quản lý thiết
                    bị</Typography.Title>
                <Form
                    form={form}
                    onFinish={handleSubmit}
                    layout="vertical"
                >
                    <Card>
                        <Typography.Title level={4} style={{marginBottom: '1.6rem'}}>Thông tin thiết
                            bị</Typography.Title>
                        <Row gutter={[24, 0]}>
                            <Col span={12}>
                                <Form.Item label="Mã thiết bị:" name="code" required
                                           rules={[
                                               {required: true, message: 'Vui lòng nhập mã thiết bị'}
                                           ]}
                                >
                                    <Input placeholder="Nhập mã thiết bị" size="large" autoFocus/>
                                </Form.Item>

                                <Form.Item label="Tên thiết bị:" required name="name"
                                           rules={[
                                               {required: true, message: 'Vui lòng nhập tên thiết bị'}
                                           ]}
                                >
                                    <Input placeholder="Nhập tên thiết bị" size="large"/>
                                </Form.Item>

                                <Form.Item label="Địa chỉ IP:" required name="ip"
                                           rules={[
                                               {required: true, message: 'Vui lòng nhập IP'}
                                           ]}
                                >
                                    <Input placeholder="Nhập địa chỉ IP" size="large"/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Loại thiết bị:" name="type" required
                                           rules={[
                                               {required: true, message: 'Vui lòng loại thiết bị'}
                                           ]}
                                >
                                    <Select placeholder="Chọn loại thiết bị"
                                            options={[
                                                {label: 'Kiosk', value: 'Kiosk'},
                                                {label: 'Display counter', value: 'Display counter'},
                                            ]}
                                    />
                                </Form.Item>

                                <Form.Item label="Tên đăng nhập:" required name="username"
                                           rules={[
                                               {required: true, message: 'Vui lòng nhập tên đăng nhập'}
                                           ]}
                                >
                                    <Input placeholder="Nhập tài khoản" size="large"/>
                                </Form.Item>

                                <Form.Item label="Mật khẩu:" required name="password"
                                           rules={[
                                               {required: true, message: 'Vui lòng nhập mật khẩu'}
                                           ]}
                                >
                                    <Input placeholder="Nhập mật khẩu" size="large"/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item label="Dịch vụ sử dụng:" required name="services"
                                   rules={[
                                       {required: true, message: 'Vui lòng chọn dịch vụ sử dụng'}
                                   ]}
                        >
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

                        <Flex align="center" gap="small"
                              style={{fontSize: '1.4rem', lineHeight: '2.1rem', color: '#7E7D88'}}>
                            <IconAsterisk/>
                            <span>Là trường thông tin bắt buộc</span>
                        </Flex>

                    </Card>

                    <Flex justify="center" gap="large">
                        <Link to="/thiet-bi"><Button style={{backgroundColor: '#FFF2E7'}} htmlType="button"
                                                     type="primary"
                                                     size="large" ghost>Hủy bỏ</Button></Link>
                        <Button disabled={addDeviceCall.status === "loading"} htmlType="submit" type="primary" size="large">Thêm thiết bị</Button>
                    </Flex>
                </Form>
            </div>
        </div>
    );
};

export default DeviceAddPage;