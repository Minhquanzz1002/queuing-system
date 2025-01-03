import React from 'react';
import {Col, Flex, Form, Input, Row} from "antd";
import Breadcrumb from "@shared/components/Breadcrumb";
import TopBar from "@shared/components/TopBar";
import Card from "@shared/components/Card";
import "./styles.scss";
import AvatarUpload from "@view/Auth/Profile/components/AvatarUpload";
import {RootState} from "@modules/index";
import {useSelector} from "react-redux";

const ProfilePage = () => {
    const { user: profile } = useSelector((state: RootState) => state.profile);

    return (
        <div className="profile">
            <Flex style={{padding: '2.4rem'}} align="center" justify="space-between">
                <Breadcrumb
                    items={[
                        {
                            title: 'Thông tin cá nhân'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>

            <Card className="profile__content">
                <Flex gap="2.4rem">
                    <div className="profile__left">
                        <AvatarUpload/>
                        <div className="profile__left--name">{profile?.name}</div>
                    </div>
                    <Form layout="vertical" style={{flexGrow: 1}}>
                        <Row gutter={24}>
                            <Col span={12}>
                                <Form.Item label="Tên người dùng">
                                    <Input placeholder="Tên người dùng" value={profile?.name} size="large" disabled/>
                                </Form.Item>
                                <Form.Item label="Số điện thoại">
                                    <Input type="tel" placeholder="Số điện thoại" value={profile?.phone} size="large" disabled/>
                                </Form.Item>
                                <Form.Item label="Email">
                                    <Input type="email" placeholder="Email" value={profile?.username} size="large" disabled/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Tên đăng nhập">
                                    <Input placeholder="Tên đăng nhập" value={profile?.username} size="large" disabled/>
                                </Form.Item>
                                <Form.Item label="Mật khẩu">
                                    <Input.Password type="tel" placeholder="Mật khẩu" value={profile?.password} size="large" disabled/>
                                </Form.Item>
                                <Form.Item label="Vai trò">
                                    <Input type="email" placeholder="Vai trò" value={profile?.role.name} size="large" disabled/>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Flex>
            </Card>

        </div>
    );
};

export default ProfilePage;