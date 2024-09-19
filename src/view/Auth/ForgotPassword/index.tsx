import React, {useState} from 'react';
import "./styles.scss";
import {forgotBg, logo} from "@assets/images";
import {Button, Flex, Form, Input} from "antd";
import {Link} from "react-router-dom";

const ForgotPassword = () => {
    const [showNewPasswordForm, setShowNewPasswordForm] = useState<boolean>(false);

    const handleSubmitPassword = () => {
        setShowNewPasswordForm(true);
    };

    return (
        <div className="forgot">
            <div className="forgot__left">
                <div className="forgot__logo">
                    <img src={logo} alt="Logo"/>
                </div>
                {
                    !showNewPasswordForm ? (
                        <Form
                            className="forgot__form"
                            layout="vertical"
                            requiredMark={false}
                            onFinish={handleSubmitPassword}
                        >
                            <div className="forgot__form--title">Đặt lại mật khẩu</div>

                            <Form.Item label="Vui lòng nhập email để đặt lại mật khẩu của bạn *" name="username"
                                       rules={[
                                           {
                                               required: true,
                                               message: 'Vui lòng nhập email'
                                           },
                                           {
                                               type: 'email',
                                               message: 'Địa chỉ email không hợp lệ!'
                                           }
                                       ]}
                            >
                                <Input autoFocus/>
                            </Form.Item>

                            <Flex justify="center" gap="middle">
                                <Link to={"/auth/login"}>
                                    <Button ghost type="primary">Hủy</Button>
                                </Link>
                                <Button htmlType="submit" type="primary">Tiếp tục</Button>
                            </Flex>
                        </Form>
                    ) : (
                        <Form
                            className="forgot__form"
                            layout="vertical"
                            requiredMark={false}
                        >
                            <div className="forgot__form--title">Đặt lại mật khẩu mới</div>

                            <Form.Item label="Mật khẩu" name="password"
                                       rules={[
                                           {
                                               required: true,
                                               message: 'Vui lòng nhập mật khẩu'
                                           }
                                       ]}
                            >
                                <Input.Password autoFocus/>
                            </Form.Item>

                            <Form.Item label="Nhập lại mật khẩu" name="confirmPassword"
                                       rules={[
                                           {
                                               required: true,
                                               message: 'Vui lòng nhập lại mật khẩu'
                                           },
                                           ({getFieldValue}) => ({
                                               validator(_, value) {
                                                   if (!value || getFieldValue('password') === value) {
                                                       return Promise.resolve();
                                                   }
                                                   return Promise.reject(new Error('Mật khẩu không khớp'));
                                               }
                                           })
                                       ]}
                            >
                                <Input.Password/>
                            </Form.Item>

                            <Flex justify="center" gap="middle">
                                <Button htmlType="submit" type="primary">Xác nhận</Button>
                            </Flex>
                        </Form>
                    )
                }

            </div>
            <div className="forgot__right">
                <div className="forgot__background">
                    <img src={forgotBg} alt="Background"/>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;