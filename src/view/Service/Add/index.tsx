import React from 'react';
import {Button, Checkbox, Col, Flex, Form, Input, message, Row, Typography} from "antd";
import TopBar from "@shared/components/TopBar";
import "./styles.scss";
import Card from "@shared/components/Card";
import {Link, useNavigate} from "react-router-dom";
import Breadcrumb from "@shared/components/Breadcrumb";
import FormNote from "@shared/components/FormNote";
import {useSingleAsync} from "@shared/hook/useAsync";
import {addService} from "@modules/services/repository";

const ServiceAddPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const addServiceCall = useSingleAsync(addService);

    const handleSubmit = async (values: any) => {
        try {
            await addServiceCall.execute({
                ...values,
                description: values.description || '',
                useFromToNumber: !!values.useFromToNumber,
                usePrefix: !!values.usePrefix,
                useSuffix: !!values.useSuffix,
                isDaily: !!values.isDaily,
                fromNumber: values.fromNumber,
                toNumber: values.toNumber,
                prefix: values.prefix,
                suffix: values.suffix,
            });

            message.success("Thêm dịch vụ thành công", 5);
            navigate("/admin/dich-vu");
        } catch (error) {
            message.error("Đã có lỗi xảy ra. Hãy thử lại sau!", 5);
            console.error(error);
        }
    };

    return (
        <div>
            <Flex style={{padding: '2.4rem'}} align="center" justify="space-between">
                <Breadcrumb
                    items={[
                        {
                            title: 'Dịch vụ',
                        },
                        {
                            title: 'Danh sách dịch vụ',
                            href: '/admin/dich-vu'
                        },
                        {
                            title: 'Thêm dịch vụ'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>
            <Form
                form={form}
                onFinish={handleSubmit}
                layout="vertical"
            >
                <div style={{paddingLeft: '2.4rem', paddingRight: '6.4rem'}}>
                    <Typography.Title level={3} style={{color: '#FF7506', marginBottom: '1.6rem'}}>Quản lý dịch
                        vụ</Typography.Title>

                    <Card>
                        <Typography.Title level={4} style={{color: '#FF7506', marginBottom: '1.6rem'}}>Thông tin dịch
                            vụ</Typography.Title>

                        <Row gutter={[24, 0]}>
                            <Col span={12}>
                                <Flex vertical justify="space-between" className="h-100">
                                    <Form.Item label="Mã dịch vụ:" required name="code"
                                               rules={[
                                                   {required: true, message: 'Vui lòng nhập mã dịch vụ'},
                                                   {
                                                       pattern: /^[a-zA-Z0-9_-]+$/,
                                                       message: 'Mã dịch vụ chỉ bao gồm chữ cái, số, dấu gạch dưới và dấu gạch nối'
                                                   }
                                               ]}
                                    >
                                        <Input placeholder="Nhập mã dịch vụ" size="large" autoFocus/>
                                    </Form.Item>
                                    <Form.Item label="Tên dịch vụ:" required name="name"
                                               rules={[
                                                   {required: true, message: 'Vui lòng nhập tên dịch vụ'},
                                                   () => ({
                                                       validator(_, value) {
                                                           if (!value || value.trim().length > 3) {
                                                               return Promise.resolve();
                                                           }
                                                           return Promise.reject(new Error('Tên dịch vụ không hợp lệ. Tối thiểu 3 ký tự'));
                                                       }
                                                   })
                                               ]}
                                    >
                                        <Input placeholder="Nhập tên dịch vụ" size="large"/>
                                    </Form.Item>
                                </Flex>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Mô tả" name="description">
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
                                    <Flex align="center" className="h-100">
                                        <Form.Item name="useFromToNumber" valuePropName="checked">
                                            <Checkbox>Tăng tự động từ:</Checkbox>
                                        </Form.Item>
                                    </Flex>
                                </Col>
                                <Col flex="auto">
                                    <Flex align="center" gap="middle">
                                        <Form.Item name="fromNumber">
                                            <Input size="large" style={{width: '6.5rem'}}/>
                                        </Form.Item>
                                        <span>đến</span>
                                        <Form.Item name="toNumber">
                                            <Input size="large" style={{width: '6.5rem'}}/>
                                        </Form.Item>
                                    </Flex>
                                </Col>
                            </Row>
                            <Row>
                                <Col flex="20rem">
                                    <Flex align="center" className="h-100">
                                        <Form.Item name="usePrefix" valuePropName="checked">
                                            <Checkbox>Prefix:</Checkbox>
                                        </Form.Item>
                                    </Flex>
                                </Col>
                                <Col flex="auto">
                                    <Form.Item name="prefix">
                                        <Input size="large" style={{width: '6.5rem'}}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col flex="20rem">
                                    <Flex align="center" className="h-100">
                                        <Form.Item name="useSuffix" valuePropName="checked">
                                            <Checkbox>Suffix:</Checkbox>
                                        </Form.Item>
                                    </Flex>
                                </Col>
                                <Col flex="auto">
                                    <Form.Item name="suffix">
                                        <Input size="large" style={{width: '6.5rem'}}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col flex="20rem">
                                    <Form.Item name="isDaily" valuePropName="checked">
                                        <Checkbox>Reset mỗi ngày</Checkbox>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Flex>

                        <FormNote/>
                    </Card>

                    <Flex justify="center" gap="large">
                        <Link to="/admin/dich-vu"><Button style={{backgroundColor: '#FFF2E7'}} htmlType="button"
                                                          type="primary"
                                                          size="large" ghost>Hủy bỏ</Button></Link>
                        <Button htmlType="submit" type="primary" size="large">Thêm dịch vụ</Button>
                    </Flex>
                </div>
            </Form>
        </div>
    );
};

export default ServiceAddPage;