import React, {useEffect, useState} from 'react';
import {Col, Flex, Form, FormInstance, Input, Row, Typography} from "antd";
import Select from "@shared/components/Select";
import {IconAsterisk} from "@assets/icons";
import Card from "@shared/components/Card";
import {useSingleAsync} from "@shared/hook/useAsync";
import {getServices} from "@modules/services/repository";
import {Service} from "@modules/services/interface";

const FormDevice = ({form} : {form: FormInstance}) => {
    const [services, setServices] = useState<Service[]>([]);
    const loadServices = useSingleAsync(getServices);

    useEffect(() => {
        loadServices.execute().then(setServices).catch(() => setServices([]));
    }, []);
    return (
        <Card>
            <Typography.Title level={4} style={{marginBottom: '1.6rem'}}>Thông tin thiết
                bị</Typography.Title>
            <Row gutter={[24, 0]}>
                <Col span={12}>
                    <Form.Item label="Mã thiết bị:" name="code" required
                               rules={[
                                   {required: true, message: 'Vui lòng nhập mã thiết bị'},
                                   {pattern: /^[a-zA-Z0-9_-]+$/, message: 'Mã thiết bị chỉ bao gồm chữ cái, số, dấu gạch dưới và dấu gạch nối'}
                               ]}
                    >
                        <Input placeholder="Nhập mã thiết bị" size="large" autoFocus/>
                    </Form.Item>

                    <Form.Item label="Tên thiết bị:" required name="name"
                               rules={[
                                   {required: true, message: 'Vui lòng nhập tên thiết bị'},
                                   () => ({
                                       validator(_, value) {
                                           if (!value || value.trim().length > 3) {
                                               return Promise.resolve();
                                           }
                                           return Promise.reject(new Error('Tên thiết bị không hợp lệ. Tối thiểu 3 ký tự'));
                                       }
                                   })
                               ]}
                    >
                        <Input placeholder="Nhập tên thiết bị" size="large"/>
                    </Form.Item>

                    <Form.Item label="Địa chỉ IP:" required name="ip"
                               rules={[
                                   {required: true, message: 'Vui lòng nhập IP'},
                                   {pattern: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/, message: 'Địa chỉ IP không hợp lệ'}
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
                                   {required: true, message: 'Vui lòng nhập tên đăng nhập'},
                                   {min: 8, message: 'Tên đăng nhập phải có ít nhất 8 ký tự'},
                                   {
                                       pattern: /^[a-zA-Z0-9@#$&]+$/,
                                       message: 'Tên đăng nhập chỉ chứa chữ, số hoặc các ký tự @#$&'
                                   }
                               ]}
                    >
                        <Input placeholder="Nhập tài khoản" size="large"/>
                    </Form.Item>

                    <Form.Item label="Mật khẩu:" required name="password"
                               rules={[
                                   {required: true, message: 'Vui lòng nhập mật khẩu'},
                                   {min: 8, message: 'Mật khẩu phải có ít nhất 8 ký tự'},
                                   {
                                       pattern: /^\S*$/,
                                       message: 'Mật khẩu không được chứa khoảng trắng'
                                   }
                               ]}
                    >
                        <Input.Password placeholder="Nhập mật khẩu" size="large"/>
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item label="Dịch vụ sử dụng:" required name="services"
                       rules={[
                           {required: true, message: 'Vui lòng chọn dịch vụ sử dụng'},
                       ]}
            >
                <Select suffixIcon={null}
                        mode="multiple"
                        placeholder="Nhập dịch vụ sử dụng"
                        onChange={value => {
                            if (value.includes('all')) {
                                form.setFieldsValue({services: services.map(service => service.id)});
                            } else {
                                form.setFieldsValue({services: value});
                            }
                        }}
                >
                    <Select.Option key="all">Tất cả</Select.Option>
                    {services.map(service => <Select.Option key={service.id}>{service.name}</Select.Option>)}
                </Select>
            </Form.Item>

            <Flex align="center" gap="small"
                  style={{fontSize: '1.4rem', lineHeight: '2.1rem', color: '#7E7D88'}}>
                <IconAsterisk/>
                <span>Là trường thông tin bắt buộc</span>
            </Flex>

        </Card>
    );
};

export default FormDevice;