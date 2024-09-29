import React, {useState} from 'react';
import {IconCircle, IconSquarePlus} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import {Button, Flex, TableProps, Typography} from "antd";
import Table from "@shared/components/Table";
import {Link} from "react-router-dom";
import ActionButton from "src/shared/components/ActionButton";
import Select from "@shared/components/Select";
import Input from "@shared/components/Input";
import DateRangePicker from "@shared/components/DateRangePicker";
import Breadcrumb from "@shared/components/Breadcrumb";

interface Service {
    code: string;
    name: string;
    description: string;
    status: 'ACTIVE' | 'INACTIVE';
}

const columns: TableProps<Service>['columns'] = [
    {
        title: 'Mã dịch vụ',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: 'Tên dịch vụ',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Mô tả',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Trạng thái hoạt động',
        key: 'status',
        dataIndex: 'status',
        render: (status) => (
            <>
                {
                    status === 'ACTIVE' ? (
                        <Flex gap="small"><IconCircle style={{color: '#35C75A'}}/> Hoạt động</Flex>
                    ) : (
                        <Flex gap="small"><IconCircle style={{color: '#E73F3F'}}/>Ngưng hoạt động</Flex>
                    )
                }
            </>
        ),
    },
    {
        title: '',
        key: 'detail',
        render: (_, record) => (<Link to={`/dich-vu/chi-tiet/${record.code}`}><Button type="link"
                                                                                      style={{textDecorationLine: 'underline'}}>Chi
            tiết</Button></Link>),
    },
    {
        title: '',
        key: 'update',
        render: (_, record) => (<Link to={`/dich-vu/cap-nhat/${record.code}`}><Button type="link"
                                                                                      style={{textDecorationLine: 'underline'}}>Cập
            nhật</Button></Link>),
    },
];

const data: Service[] = [
    {
        code: 'DV_01',
        name: 'Dịch vụ',
        description: 'Mô tả',
        status: 'ACTIVE',
    },
    {
        code: 'DV_02',
        name: 'Dịch vụ',
        description: 'Mô tả',
        status: 'ACTIVE',
    },
    {
        code: 'DV_03',
        name: 'Dịch vụ',
        description: 'Mô tả',
        status: 'ACTIVE',
    },
    {
        code: 'DV_04',
        name: 'Dịch vụ',
        description: 'Mô tả',
        status: 'ACTIVE',
    },
    {
        code: 'DV_05',
        name: 'Dịch vụ',
        description: 'Mô tả',
        status: 'ACTIVE',
    },
    {
        code: 'DV_06',
        name: 'Dịch vụ',
        description: 'Mô tả',
        status: 'ACTIVE',
    },
    {
        code: 'DV_07',
        name: 'Dịch vụ',
        description: 'Mô tả',
        status: 'ACTIVE',
    },
    {
        code: 'DV_08',
        name: 'Dịch vụ',
        description: 'Mô tả',
        status: 'ACTIVE',
    },
    {
        code: 'DV_09',
        name: 'Dịch vụ',
        description: 'Mô tả',
        status: 'ACTIVE',
    },
    {
        code: 'DV_010',
        name: 'Dịch vụ',
        description: 'Mô tả',
        status: 'ACTIVE',
    },
    {
        code: 'DV_011',
        name: 'Dịch vụ',
        description: 'Mô tả',
        status: 'ACTIVE',
    },
];

const QueuePage = () => {
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>(new Date());
    return (
        <div>
            <Flex style={{padding: '2.4rem'}} align="center" justify="space-between">
                <Breadcrumb
                    items={[
                        {
                            title: 'Cấp số'
                        },
                        {
                            title: 'Danh sách cấp số'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>

            <div style={{paddingLeft: '2.4rem', paddingRight: '10.4rem'}}>
                <Typography.Title level={3} style={{color: '#FF7506', marginBottom: '1.6rem'}}>Quản lý cấp số</Typography.Title>

                <Flex style={{marginBottom: '1.6rem'}} justify="space-between">
                    <Flex gap="middle">
                        <Flex vertical gap={4}>
                            <label style={{fontSize: '1.6rem', fontWeight: 600, lineHeight: '2.4rem'}} htmlFor="status">Trạng
                                thái hoạt động</label>
                            <Select id="status"
                                    style={{width: '30rem'}}
                                    defaultValue="all"
                                    options={[
                                        {value: 'all', label: 'Tất cả'},
                                        {value: '1', label: 'Hoạt động'},
                                        {value: '2', label: 'Ngưng hoạt động'}
                                    ]}
                            />
                        </Flex>

                        <Flex vertical gap={4}>
                            <label style={{fontSize: '1.6rem', fontWeight: 600, lineHeight: '2.4rem'}}
                                   htmlFor="connected">Chọn thời gian</label>
                            <DateRangePicker onChangeStartDate={(date) => setStartDate(date)} endDate={endDate}
                                             startDate={startDate}
                                             onChangeEndDate={(date) => setEndDate(date)}/>
                        </Flex>
                    </Flex>

                    <Flex vertical gap={4}>
                        <label style={{fontSize: '1.6rem', fontWeight: 600, lineHeight: '2.4rem'}} htmlFor="search">Từ
                            khóa</label>
                        <Input style={{width: '30rem'}} id="search" placeholder="Nhập từ khóa"/>
                    </Flex>
                </Flex>
                <Table bordered columns={columns} dataSource={data}/>;
            </div>

            <ActionButton>
                <ActionButton.Item icon={<IconSquarePlus/>} href="/cap-so/cap-so-moi">Cấp<br/> số mới</ActionButton.Item>
            </ActionButton>
        </div>
    );
};

export default QueuePage;