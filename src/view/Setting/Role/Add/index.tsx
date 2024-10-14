import React from 'react';
import {Button, Flex, Form, message, Typography} from "antd";
import TopBar from "@shared/components/TopBar";
import {Link, useNavigate} from "react-router-dom";
import Breadcrumb from "@shared/components/Breadcrumb";
import {useSingleAsync} from "@shared/hook/useAsync";
import FormRole from "@view/Setting/Role/components/FormRole";
import {addRole} from "@modules/roles/repository";

const RoleAddPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const addRoleCall = useSingleAsync(addRole);

    const handleSubmit = async (values: any) => {
        try {
            await addRoleCall.execute({
                ...values,
                description: values.description || '',
            });
            message.success("Thêm vai trò thành công", 5);
            navigate("/admin/cai-dat/quan-ly-vai-tro");
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
                            title: 'Quản lý vai trò',
                            href: '/admin/cai-dat/quan-ly-vai-tro'
                        },
                        {
                            title: 'Thêm vai trò'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>

            <div style={{paddingLeft: '2.4rem', paddingRight: '6.4rem'}}>
                <Typography.Title level={3} style={{marginBottom: '1.6rem'}}>Quản lý vai trò</Typography.Title>
                <FormRole form={form} initialValues={{}} onFinish={handleSubmit}>
                    <Flex justify="center" gap="large">
                        <Link to="/admin/cai-dat/quan-ly-vai-tro"><Button style={{backgroundColor: '#FFF2E7'}}
                                                                          htmlType="button"
                                                                          type="primary"
                                                                          size="large" ghost>Hủy bỏ</Button></Link>
                        <Button disabled={addRoleCall.status === "loading"} htmlType="submit" type="primary"
                                size="large">Thêm</Button>
                    </Flex>
                </FormRole>
            </div>
        </div>
    );
};

export default RoleAddPage;