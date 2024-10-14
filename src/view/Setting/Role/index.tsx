import React, {useCallback, useEffect, useState} from 'react';
import {IconSquarePlus} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import {Flex, Form, TableProps, Typography} from "antd";
import Table from "@shared/components/Table";
import {Link} from "react-router-dom";
import ActionButton from "src/shared/components/ActionButton";
import Input from "@shared/components/Input";
import Breadcrumb from "@shared/components/Breadcrumb";
import ButtonLink from "@shared/components/ButtonLink";
import {useSingleAsync} from "@shared/hook/useAsync";
import {getRoles} from "@modules/roles/repository";
import {Role} from "@modules/roles/interface";
import useDebounce from "@shared/hook/useDebounce";

const columns: TableProps<Role>['columns'] = [
    {
        title: 'Tên vai trò',
        dataIndex: 'name',
        key: 'role_name',
    },
    {
        title: 'Số người dùng',
        dataIndex: 'userCount',
        key: 'role_userCount',
    },
    {
        title: 'Mô tả',
        dataIndex: 'description',
        key: 'role_description',
    },
    {
        title: '',
        key: 'role_update',
        render: (_, record) => (
            <Link to={`/admin/cai-dat/quan-ly-vai-tro/${record.id}/cap-nhat`}>
                <ButtonLink>
                    Cập nhật
                </ButtonLink>
            </Link>),
    },
];

const RolePage = () => {
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [roles, setRoles] = useState<Role[]>([]);
    const [filteredRoles, setFilteredRoles] = useState<Role[]>([]);
    const debouncedSearchKeyword = useDebounce(searchKeyword, 300);

    const loadRoles = useSingleAsync(getRoles);

    useEffect(() => {
        loadRoles.execute().then(setRoles).catch(() => setRoles([]));
    }, []);

    const filterRoles = useCallback((keyword: string) => {
        const filtered = roles.filter(role => role.name.toLowerCase().includes(keyword.toLowerCase()));
        setFilteredRoles(filtered);
    }, [roles]);

    useEffect(() => {
        filterRoles(debouncedSearchKeyword);
    }, [debouncedSearchKeyword, filterRoles]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            filterRoles(e.currentTarget.value);
        }
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
                            title: 'Quản lý vai trò'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>

            <div style={{paddingLeft: '2.4rem', paddingRight: '10.4rem'}}>
                <Typography.Title level={3} style={{color: '#FF7506', marginBottom: '1.6rem'}}>Danh sách vai
                    trò</Typography.Title>

                <Form layout="vertical">
                    <Flex justify="end">
                        <Form.Item label="Từ khóa">
                            <Input style={{width: '30rem'}} id="search" name="search"
                                   placeholder="Nhập từ khóa"
                                   value={searchKeyword}
                                   onKeyDown={handleKeyDown}
                                   onChange={(e) => setSearchKeyword(e.target.value)}
                            />
                        </Form.Item>
                    </Flex>
                </Form>
                <Table bordered columns={columns} dataSource={filteredRoles} rowKey={(record) => record.id}/>
            </div>

            <ActionButton>
                <ActionButton.Item icon={<IconSquarePlus/>} href="/admin/cai-dat/quan-ly-vai-tro/them-moi">Thêm<br/> vai
                    trò</ActionButton.Item>
            </ActionButton>
        </div>
    );
};

export default RolePage;