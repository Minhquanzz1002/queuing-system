import React from 'react';
import {Button, Flex, Form, message, Typography} from "antd";
import TopBar from "@shared/components/TopBar";
import {Link, useNavigate} from "react-router-dom";
import Breadcrumb from "@shared/components/Breadcrumb";
import {useSingleAsync} from "@shared/hook/useAsync";
import {addDevice} from "@modules/devices/repository";
import FormUser from "@view/Setting/User/components/FormUser";

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

            message.success("Vai trò đã được thêm thành công", 5);
            navigate("/cai-dat/quan-ly-vai-tro");
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
                            title: 'Cài đặt hệ thống',
                        },
                        {
                            title: 'Quản lý tài khoản',
                            href: '/cai-dat/quan-ly-tai-khoan'
                        },
                        {
                            title: 'Thêm tài khoản'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>

            <div style={{paddingLeft: '2.4rem', paddingRight: '6.4rem'}}>
                <Typography.Title level={3} style={{marginBottom: '1.6rem'}}>Quản lý tài khoản</Typography.Title>
                <Form
                    form={form}
                    onFinish={handleSubmit}
                    layout="vertical"
                >
                    <FormUser/>

                    <Flex justify="center" gap="large">
                        <Link to="/cai-dat/quan-ly-tai-khoan"><Button style={{backgroundColor: '#FFF2E7'}} htmlType="button"
                                                     type="primary"
                                                     size="large" ghost>Hủy bỏ</Button></Link>
                        <Button disabled={addDeviceCall.status === "loading"} htmlType="submit" type="primary" size="large">Thêm</Button>
                    </Flex>
                </Form>
            </div>
        </div>
    );
};

export default DeviceAddPage;