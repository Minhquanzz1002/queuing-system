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
import {Option} from "antd/es/mentions";

const columns: TableProps<User>['columns'] = [
    {
        title: 'Tên đăng nhập',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'Họ tên',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Vai trò',
        dataIndex: 'role',
        key: 'role',
        render: (role: Role) => role.name
    },
    {
        title: 'Trạng thái hoạt động',
        dataIndex: 'status',
        key: 'status',
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
        key: 'update',
        render: (_, record) => (
            <Link to={`/cai-dat/quan-ly-tai-khoan/${record.username}/cap-nhat`}>
                <ButtonLink>
                    Cập nhật
                </ButtonLink>
            </Link>),
    },
];

const UserManagementSettingPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [roles, setRoles] = useState<Role[]>([]);

    const loadUsers = useSingleAsync(getUsers);
    const loadRoles = useSingleAsync(getRoles);

    useEffect(() => {
        loadUsers.execute().then(setUsers).catch(() => setUsers([]));
        loadRoles.execute().then(setRoles).catch(() => setRoles([]));
    }, []);

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
                <Form layout="vertical">
                    <Flex justify="space-between">
                        <Flex vertical gap={4}>
                            <Form.Item label="Tên vai trò">
                                <Select style={{width: '30rem'}}
                                        defaultValue=""
                                >
                                    <Option key="">Tất cả</Option>
                                    {
                                        roles.map((role: Role) => <Option key={role.id} value={role.name}></Option>)
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
                <Table bordered columns={columns} dataSource={users}/>;
            </div>

            <ActionButton>
                <ActionButton.Item icon={<IconSquarePlus/>} href="/cai-dat/quan-ly-tai-khoan/them-moi">Thêm<br/> tài
                    khoản</ActionButton.Item>
            </ActionButton>
        </div>
    );
};

export default UserManagementSettingPage;