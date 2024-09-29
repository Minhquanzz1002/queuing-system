import React, {useEffect, useState} from 'react';
import {IconSquarePlus} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import {Flex, TableProps, Typography} from "antd";
import Table from "@shared/components/Table";
import {Link} from "react-router-dom";
import ActionButton from "src/shared/components/ActionButton";
import Input from "@shared/components/Input";
import Breadcrumb from "@shared/components/Breadcrumb";
import ButtonLink from "@shared/components/ButtonLink";
import {useSingleAsync} from "@shared/hook/useAsync";
import {getRoles} from "@modules/roles/repository";
import {Role} from "@modules/roles/interface";

const columns: TableProps<Role>['columns'] = [
    {
        title: 'Tên vai trò',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Số người dùng',
        dataIndex: 'count',
        key: 'count',
    },
    {
        title: 'Mô tả',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: '',
        key: 'update',
        render: (_, record) => (
            <Link to={`/cai-dat/quan-ly-vai-tro/${record.code}/cap-nhat`}>
                <ButtonLink>
                    Cập nhật
                </ButtonLink>
            </Link>),
    },
];

const RoleAddPage = () => {
    const [roles, setRoles] = useState<Role[]>([]);

    const loadRoles = useSingleAsync(getRoles);

    useEffect(() => {
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
                            title: 'Quản lý vai trò'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>

            <div style={{paddingLeft: '2.4rem', paddingRight: '10.4rem'}}>
                <Typography.Title level={3} style={{color: '#FF7506', marginBottom: '1.6rem'}}>Danh sách vai
                    trò</Typography.Title>

                <Flex style={{marginBottom: '1.6rem'}} justify="end">
                    <Flex vertical gap={4}>
                        <label style={{fontSize: '1.6rem', fontWeight: 600, lineHeight: '2.4rem'}} htmlFor="search">Từ
                            khóa</label>
                        <Input style={{width: '30rem'}} id="search" placeholder="Nhập từ khóa"/>
                    </Flex>
                </Flex>
                <Table bordered columns={columns} dataSource={roles}/>;
            </div>

            <ActionButton>
                <ActionButton.Item icon={<IconSquarePlus/>} href="/cai-dat/quan-ly-vai-tro/them-moi">Thêm<br/> vai
                    trò</ActionButton.Item>
            </ActionButton>
        </div>
    );
};

export default RoleAddPage;