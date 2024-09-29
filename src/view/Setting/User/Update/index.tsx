import React, {useEffect, useState} from 'react';
import {Button, Flex, Form, message, Spin, Typography} from "antd";
import TopBar from "@shared/components/TopBar";
import {Link, useParams} from "react-router-dom";
import Breadcrumb from "@shared/components/Breadcrumb";
import {Device} from "@modules/devices/interface";
import {useSingleAsync} from "@shared/hook/useAsync";
import {updateDevice} from "@modules/devices/repository";
import NotFound from "@shared/components/NotFound";
import FormUser from "@view/Setting/User/components/FormUser";
import {getUserByUsername} from "@modules/users/repository";
import {User} from "@modules/users/interface";

const UserUpdatePage = () => {
    const [form] = Form.useForm();
    const {username} = useParams<{ username: string }>();
    const [user, setUser] = useState<User | null>(null);
    const loadUser = useSingleAsync(getUserByUsername);
    const updateDeviceCall = useSingleAsync(updateDevice);

    useEffect(() => {
        if (username) {
            loadUser.execute(username).then(setUser).catch(() => setUser(null));
        }
    }, [username]);

    useEffect(() => {
        console.log(user);
    }, [user]);

    if (loadUser.status === "loading") {
        return (
            <Flex align="center" justify="center" className="h-100vh">
                <Spin size="large"/>
            </Flex>
        );
    }

    if (!user) {
        return <NotFound/>;
    }

    const handleSubmitUpdate = (values: Omit<Device, 'id'>) => {
        try {
            updateDeviceCall.execute(user.id, values);
            message.success("Cập nhật thiết bị thành công", 5);
        } catch (error) {
            console.error(error);
            message.error('Đã có lỗi xảy ra. Hãy thử lại sau', 5);
        }
    };

    return (
        <div className="device-detail">
            <Flex style={{padding: '2.4rem'}} align="center" justify="space-between">
                <Breadcrumb
                    items={[
                        {
                            title: 'Cài đặt hệ thống',
                        },
                        {
                            title: 'Quản lý tài khoản',
                            href: '/cai-dat/quan-ly-tai-khoan'
                        },
                        {
                            title: 'Cập nhật tài khoản'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>

            <div style={{paddingLeft: '2.4rem', paddingRight: '6.4rem'}}>
                <Typography.Title level={3} style={{marginBottom: '1.6rem'}}>Danh sách tài khoản</Typography.Title>
                <Form
                    form={form}
                    onFinish={handleSubmitUpdate}
                    layout="vertical"
                    initialValues={{...user, repeatPassword: user.password, role: user.role.name}}
                >
                    <FormUser/>

                    <Flex justify="center" gap="large">
                        <Link to="/cai-dat/quan-ly-tai-khoan"><Button style={{backgroundColor: '#FFF2E7'}}
                                                                    htmlType="button"
                                                                    type="primary"
                                                                    size="large" ghost>Hủy bỏ</Button></Link>
                        <Button htmlType="submit" type="primary" size="large">Cập nhật</Button>
                    </Flex>
                </Form>
            </div>
        </div>
    );
};

export default UserUpdatePage;