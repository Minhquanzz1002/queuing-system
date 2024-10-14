import React, {useEffect, useState} from 'react';
import {Col, Flex, Form, FormInstance, Input, Row, Typography} from "antd";
import Card from "@shared/components/Card";
import {useSingleAsync} from "@shared/hook/useAsync";
import {getPermissions} from "@modules/permissions/repository";
import {Permission} from "@modules/permissions/interface";
import GroupedPermissionsComponent from "@view/Setting/Role/components/FormRole/GroupedPermissionsComponent";
import FormNote from "@shared/components/FormNote";

type FormRoleProps = {
    form: FormInstance;
    onFinish: ((values: any) => void);
    children: React.ReactNode;
    initialValues: any;
};

const FormRole = ({form, children, onFinish, initialValues}: FormRoleProps) => {
    const loadPermissions = useSingleAsync(getPermissions);
    const [permissions, setPermissions] = useState<Permission[]>([]);
    const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

    const handlePermissionChange = (newCheckedList: string[]) => {
        form.setFieldsValue({permissions: newCheckedList});
        setSelectedPermissions(newCheckedList);
        console.log(newCheckedList);
    };

    useEffect(() => {
        loadPermissions.execute().then(setPermissions).catch(() => setPermissions([]));
    }, []);

    useEffect(() => {
        const currentPermissions = form.getFieldValue('permissions') || [];
        setSelectedPermissions(currentPermissions);
    }, [form]);

    const handleSubmit = (values: any) => {
        const formatedValues = {
            ...values,
            permissions: Array.isArray(selectedPermissions) ? selectedPermissions : [selectedPermissions].filter(Boolean)
        };

        onFinish(formatedValues);
    };

    return (
        <Form
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            initialValues={initialValues}
        >
            <Card>
                <Typography.Title level={4} style={{marginBottom: '1.6rem'}}>Thông tin vai
                    trò</Typography.Title>
                <Row gutter={[24, 0]}>
                    <Col span={12}>
                        <Form.Item label="Tên vai trò:" name="name" required
                                   rules={[
                                       {required: true, message: 'Vui lòng nhập tên vai trò'}
                                   ]}
                        >
                            <Input placeholder="Nhập mã thiết bị" size="large" autoFocus/>
                        </Form.Item>

                        <Form.Item label="Mô tả" name="description">
                            <Input.TextArea rows={4} placeholder="Nhập mô tả" size="large"/>
                        </Form.Item>

                        <FormNote/>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Phân quyền theo chức năng "
                                   required
                                   name="permissions"
                                   rules={[
                                       {validator: (_, value) => value && value.length > 0 ? Promise.resolve() : Promise.reject('Vui lòng chọn ít nhất một tùy chọn')}
                                   ]}
                        >
                            <Card style={{background: '#FFF2E7', minHeight: 'unset', borderRadius: '0.8rem'}}>
                                <Flex vertical gap="middle">
                                    <GroupedPermissionsComponent permissions={permissions}
                                                                 checkedList={selectedPermissions}
                                                                 onChange={handlePermissionChange}
                                    />
                                </Flex>
                            </Card>
                        </Form.Item>
                    </Col>
                </Row>
            </Card>

            {children}
        </Form>
    );
};

export default FormRole;