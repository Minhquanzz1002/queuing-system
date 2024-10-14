import React from 'react';
import {Button, Flex, Form, message, Typography} from "antd";
import TopBar from "@shared/components/TopBar";
import {Link, useNavigate} from "react-router-dom";
import Breadcrumb from "@shared/components/Breadcrumb";
import {useSingleAsync} from "@shared/hook/useAsync";
import FormUser from "@view/Setting/User/components/FormUser";
import {addUser} from "@modules/users/repository";

const UserAddPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const addUserCall = useSingleAsync(addUser);

    const handleSubmit = async (values: any) => {
        try {
            await addUserCall.execute({
                name: values.name,
                username: values.username,
                phone: values.phone,
                password: values.password,
                email: values.email,
                role: values.role,
                status: values.status,
            });

            message.success("Thêm tài khoản thành công", 5);
            navigate("/admin/cai-dat/quan-ly-tai-khoan");
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
                            href: '/admin/cai-dat/quan-ly-tai-khoan'
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
                    initialValues={{
                        status: 'ACTIVE',
                    }}
                    onFinish={handleSubmit}
                    layout="vertical"
                >
                    <FormUser/>

                    <Flex justify="center" gap="large">
                        <Link to="/admin/cai-dat/quan-ly-tai-khoan"><Button style={{backgroundColor: '#FFF2E7'}} htmlType="button"
                                                     type="primary"
                                                     size="large" ghost>Hủy bỏ</Button></Link>
                        <Button disabled={addUserCall.status === "loading"} htmlType="submit" type="primary" size="large" tabIndex={9}>Thêm</Button>
                    </Flex>
                </Form>
            </div>
        </div>
    );
};

export default UserAddPage;