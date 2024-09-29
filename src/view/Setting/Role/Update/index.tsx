import React, {useEffect, useState} from 'react';
import {Button, Flex, Form, message, Spin, Typography} from "antd";
import TopBar from "@shared/components/TopBar";
import "./styles.scss";
import Card from "@shared/components/Card";
import {Link, useParams} from "react-router-dom";
import Breadcrumb from "@shared/components/Breadcrumb";
import {Device} from "@modules/devices/interface";
import {useSingleAsync} from "@shared/hook/useAsync";
import {updateDevice} from "@modules/devices/repository";
import NotFound from "@shared/components/NotFound";
import {getRoleByCode} from "@modules/roles/repository";
import {Role} from "@modules/roles/interface";
import FormRole from "@view/Setting/Role/components/FormRole";

const RoleUpdatePage = () => {
    const [form] = Form.useForm();
    const {code} = useParams<{ code: string }>();
    const [role, setRole] = useState<Role | null>(null);
    const loadDevice = useSingleAsync(getRoleByCode);
    const updateDeviceCall = useSingleAsync(updateDevice);

    useEffect(() => {
        if (code) {
            loadDevice.execute(code).then(setRole).catch(() => setRole(null));
        }
    }, [code]);

    if (loadDevice.status === "loading") {
        return (
            <Flex align="center" justify="center" className="h-100vh">
                <Spin size="large"/>
            </Flex>
        );
    }

    if (!role) {
        return <NotFound/>;
    }

    const handleSubmitUpdate = (values: Omit<Device, 'id'>) => {
        try {
            updateDeviceCall.execute(role.id, values);
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
                            title: 'Quản lý vai trò',
                            href: '/cai-dat/quan-ly-vai-tro'
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
                <Form
                    form={form}
                    onFinish={handleSubmitUpdate}
                    layout="vertical"
                    initialValues={role}
                >
                    <Card>
                        <Typography.Title level={4} style={{marginBottom: '1.6rem'}}>Thông tin vai trò</Typography.Title>
                        <FormRole/>
                    </Card>

                    <Flex justify="center" gap="large">
                        <Link to="/cai-dat/quan-ly-vai-tro"><Button style={{backgroundColor: '#FFF2E7'}} htmlType="button"
                                                     type="primary"
                                                     size="large" ghost>Hủy bỏ</Button></Link>
                        <Button htmlType="submit" type="primary" size="large">Cập nhật</Button>
                    </Flex>
                </Form>
            </div>
        </div>
    );
};

export default RoleUpdatePage;