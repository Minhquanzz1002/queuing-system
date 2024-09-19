import React from 'react';
import "./styles.scss";
import {loginBg, logo} from "@assets/images";
import {Button, Flex, Form, Input} from "antd";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="login">
            <div className="login__left">
                <div className="login__logo">
                    <img src={logo} alt="Logo"/>
                </div>
                <Form
                    className="login__form"
                    layout="vertical"
                    requiredMark={false}
                >
                    <Form.Item style={{marginBottom: '1.6rem'}} required label="Tên đăng nhập *" name="username"
                               rules={[
                                   {
                                       required: true,
                                       message: 'Vui lòng nhập'
                                   }
                               ]}
                    >
                        <Input autoFocus placeholder="Tên đăng nhập"/>
                    </Form.Item>
                    <Form.Item style={{marginBottom: 0}} required label="Mật khẩu *" name="password"
                               rules={[
                                   {
                                       required: true,
                                       message: 'Vui lòng nhập'
                                   }
                               ]}
                    >
                        <Input.Password id="password" placeholder="Mật khẩu"/>
                    </Form.Item>

                    <Form.Item style={{marginBottom: 0}}>
                        <Link to={"/auth/forgot"}>
                            <Button type="link" danger style={{paddingLeft: 0}}>
                                Quên mật khẩu?
                            </Button>
                        </Link>
                    </Form.Item>

                    <Flex justify="center">
                        <Button htmlType="submit" type="primary">Đăng nhập</Button>
                    </Flex>
                </Form>
            </div>
            <div className="login__right">
                <div className="login__background">
                    <img src={loginBg} alt="Background"/>
                    <div className="login__brandname">
                        <h2>Hệ thống</h2>
                        <h1>QUẢN LÝ XẾP HÀNG</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;