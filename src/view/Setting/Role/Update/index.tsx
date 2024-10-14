import React, {useEffect, useState} from 'react';
import {Button, Flex, Form, message, Spin, Typography} from "antd";
import TopBar from "@shared/components/TopBar";
import {Link, useNavigate, useParams} from "react-router-dom";
import Breadcrumb from "@shared/components/Breadcrumb";
import {useSingleAsync} from "@shared/hook/useAsync";
import NotFound from "@shared/components/NotFound";
import {getRoleById, updateRole} from "@modules/roles/repository";
import {Role} from "@modules/roles/interface";
import FormRole from "@view/Setting/Role/components/FormRole";

const RoleUpdatePage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const {id} = useParams<{ id: string }>();
    const [role, setRole] = useState<Role | null>(null);
    const loadRole = useSingleAsync(getRoleById);
    const updateRoleCall = useSingleAsync(updateRole);

    useEffect(() => {
        if (id) {
            loadRole.execute(id).then(setRole).catch(() => setRole(null));
        }
    }, [id]);

    if (loadRole.status === "loading") {
        return (
            <Flex align="center" justify="center" className="h-100vh">
                <Spin size="large"/>
            </Flex>
        );
    }

    if (!role) {
        return <NotFound/>;
    }

    const handleSubmitUpdate = async (values: any) => {
        try {
            await updateRoleCall.execute(role.id, {
                ...values,
                description: values.description || '',
            });
            message.success("Cập nhật vai trò thành công", 5);
            navigate("/admin/cai-dat/quan-ly-vai-tro");
        } catch (error) {
            console.error(error);
            message.error('Đã có lỗi xảy ra. Hãy thử lại sau', 5);
        }
    };

    const initialValues = {
        ...role,
        permissions: role.permissions.map(permission => permission.id)
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
                            title: 'Cập nhật vai trò'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>

            <div style={{paddingLeft: '2.4rem', paddingRight: '6.4rem'}}>
                <Typography.Title level={3} style={{marginBottom: '1.6rem'}}>Danh sách vai trò</Typography.Title>
                <FormRole form={form} initialValues={initialValues} onFinish={handleSubmitUpdate}>
                    <Flex justify="center" gap="large">
                        <Link to="/admin/cai-dat/quan-ly-vai-tro"><Button style={{backgroundColor: '#FFF2E7'}}
                                                                          htmlType="button"
                                                                          type="primary"
                                                                          size="large" ghost>Hủy bỏ</Button></Link>
                        <Button htmlType="submit" type="primary" size="large">Cập nhật</Button>
                    </Flex>
                </FormRole>
            </div>
        </div>
    );
};

export default RoleUpdatePage;