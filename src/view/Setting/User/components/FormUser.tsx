import React, {useEffect, useState} from 'react';
import {Col, Flex, Form, Input, Row, Typography} from "antd";
import {IconAsterisk} from "@assets/icons";
import Card from "@shared/components/Card";
import Select from "@shared/components/Select";
import {Role} from "@modules/roles/interface";
import {useSingleAsync} from "@shared/hook/useAsync";
import {getRoles} from "@modules/roles/repository";
import {passwordRules, personalNameRules, phoneRules, repeatPasswordRules} from "@helper/formRules";

const FormUser = () => {
    const [roles, setRoles] = useState<Role[]>([]);

    const loadRoles = useSingleAsync(getRoles);

    useEffect(() => {
        loadRoles.execute().then(setRoles).catch(() => setRoles([]));
    }, []);

    return (
        <Card>
            <Typography.Title level={4} style={{marginBottom: '1.6rem'}}>Thông tin tài khoản</Typography.Title>
            <Row gutter={[24, 0]}>
                <Col span={12}>
                    <Form.Item label="Họ tên:" name="name" required
                               rules={personalNameRules}
                    >
                        <Input placeholder="Nhập họ tên" size="large" autoFocus tabIndex={1}/>
                    </Form.Item>

                    <Form.Item label="Số điện thoại:" required name="phone"
                               rules={phoneRules}
                    >
                        <Input type="tel" placeholder="Nhập số điện thoại" size="large" tabIndex={3}/>
                    </Form.Item>

                    <Form.Item label="Email" required name="email"
                               rules={[
                                   {required: true, message: 'Vui lòng nhập email'},
                                   {type: 'email', message: 'Email không hợp lệ'}
                               ]}
                    >
                        <Input placeholder="Nhập email" size="large" tabIndex={5}/>
                    </Form.Item>
                    <Form.Item label="Vai trò" required name="role"
                               rules={[
                                   {required: true, message: 'Vui chọn vai trò'}
                               ]}
                    >
                        <Select placeholder="Chọn vai trò" tabIndex={7}>
                            {
                                roles.map((role: Role) => <Select.Option key={role.id}>{role.name}</Select.Option>)
                            }
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Tên đăng nhập:" name="username" required
                               rules={[
                                   {required: true, message: 'Vui lòng nhập tên đăng nhập'},
                                   {min: 8, message: 'Tên đăng nhập phải có ít nhất 8 ký tự'},
                                   {
                                       pattern: /^[a-zA-Z0-9@#$&]+$/,
                                       message: 'Tên đăng nhập chỉ chứa chữ, số hoặc các ký tự @#$&'
                                   }
                               ]}
                    >
                        <Input placeholder="Nhập tài khoản" size="large" tabIndex={2}/>
                    </Form.Item>

                    <Form.Item label="Mật khẩu:" required name="password"
                               rules={passwordRules}
                    >
                        <Input.Password placeholder="Nhập mật khẩu" size="large" tabIndex={4}/>
                    </Form.Item>

                    <Form.Item label="Nhập lại mật khẩu:" required name="repeatPassword"
                               rules={repeatPasswordRules}
                    >
                        <Input.Password placeholder="Nhập lại mật khẩu" size="large" tabIndex={6}/>
                    </Form.Item>
                    <Form.Item label="Tình trạng" required name="status"
                               rules={[
                                   {required: true, message: 'Vui chọn tình trạng'}
                               ]}
                    >
                        <Select placeholder="Chọn loại thiết bị" tabIndex={8}
                                options={[
                                    {label: 'Hoạt động', value: 'ACTIVE'},
                                    {label: 'Ngưng hoạt động', value: 'INACTIVE'},
                                ]}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Flex align="center" gap="small"
                  style={{fontSize: '1.4rem', lineHeight: '2.1rem', color: '#7E7D88'}}>
                <IconAsterisk/>
                <span>Là trường thông tin bắt buộc</span>
            </Flex>
        </Card>
    );
};

export default FormUser;