import React, {useEffect, useState} from 'react';
import {IconCircle, IconSquarePlus} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import {Flex, Form, TableProps, Typography} from "antd";
import Table from "@shared/components/Table";
import {Link} from "react-router-dom";
import ActionButton from "src/shared/components/ActionButton";
import Input from "@shared/components/Input";
import Breadcrumb from "@shared/components/Breadcrumb";
import ButtonLink from "@shared/components/ButtonLink";
import {useSingleAsync} from "@shared/hook/useAsync";
import {Role} from "@modules/roles/interface";
import Select from "@shared/components/Select";
import {User} from "@modules/users/interface";
import {getUsers} from "@modules/users/repository";
import {getRoles} from "@modules/roles/repository";

const columns: TableProps<User>['columns'] = [
    {
        title: 'Tên đăng nhập',
        dataIndex: 'username',
        key: 'user_username',
    },
    {
        title: 'Họ tên',
        dataIndex: 'name',
        key: 'user_name',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        key: 'user_phone',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'user_email',
    },
    {
        title: 'Vai trò',
        dataIndex: 'role',
        key: 'user_role',
        render: (role: Role) => role.name
    },
    {
        title: 'Trạng thái hoạt động',
        dataIndex: 'status',
        key: 'user_status',
        render: (status) => (
            <>
                {
                    status === 'ACTIVE' ? (
                        <Flex gap="small" className="text-nowrap"><IconCircle style={{color: '#35C75A'}}/> Hoạt
                            động</Flex>
                    ) : (
                        <Flex gap="small" className="text-nowrap"><IconCircle style={{color: '#E73F3F'}}/>Ngưng hoạt
                            động</Flex>
                    )
                }
            </>
        ),
    },
    {
        title: '',
        key: 'user_update',
        render: (_, record) => (
            <Link to={`/admin/cai-dat/quan-ly-tai-khoan/${record.username}/cap-nhat`}>
                <ButtonLink>
                    Cập nhật
                </ButtonLink>
            </Link>),
    },
];

type Filters = {
    role: string;
}

const UserManagementSettingPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [roles, setRoles] = useState<Role[]>([]);
    const [filters, setFilters] = useState<Filters>({role: 'all'});

    const loadUsers = useSingleAsync(getUsers);
    const loadRoles = useSingleAsync(getRoles);

    useEffect(() => {
        loadUsers.execute().then(setUsers).catch(() => setUsers([]));
        loadRoles.execute().then(setRoles).catch(() => setRoles([]));
    }, []);

    useEffect(() => {
        const {role} = filters;
        const roleFilter = role === 'all' ? undefined : role;
        loadUsers.execute(roleFilter).then(setUsers).catch(() => setUsers([]));
    }, [filters]);

    const onFiltersChange = (_changeValues: any, allValues: Filters) => {
        setFilters(allValues);
    };

    return (
        <div>
            <Flex style={{padding: '2.4rem'}} align="center" justify="space-between">
                <Breadcrumb
                    items={[
                        {
                            title: 'Cài đặt hệ thống'
                        },
                        {
                            title: 'Quản lý tài khoản'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>

            <div style={{paddingLeft: '2.4rem', paddingRight: '10.4rem'}}>
                <Typography.Title level={3} style={{color: '#FF7506', marginBottom: '1.6rem'}}>Danh sách tài
                    khoản</Typography.Title>
                <Form layout="vertical" initialValues={filters} onValuesChange={onFiltersChange}>
                    <Flex justify="space-between">
                        <Flex vertical gap={4}>
                            <Form.Item label="Tên vai trò" name="role">
                                <Select style={{width: '30rem'}}>
                                    <Select.Option key="all">Tất cả</Select.Option>
                                    {
                                        roles.map((role: Role) => <Select.Option
                                            key={role.id}>{role.name}</Select.Option>)
                                    }
                                </Select>
                            </Form.Item>
                        </Flex>

                        <Flex vertical gap={4}>
                            <Form.Item label="Từ khóa">
                                <Input style={{width: '30rem'}} id="search" placeholder="Nhập từ khóa"/>
                            </Form.Item>
                        </Flex>
                    </Flex>
                </Form>
                <Table bordered columns={columns} dataSource={users} rowKey={record => record.id}/>;
            </div>

            <ActionButton>
                <ActionButton.Item icon={<IconSquarePlus/>} href="/admin/cai-dat/quan-ly-tai-khoan/them-moi">Thêm<br/> tài
                    khoản</ActionButton.Item>
            </ActionButton>
        </div>
    );
};

export default UserManagementSettingPage;