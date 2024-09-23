import React from 'react';
import {IconChevronRight, IconCircle, IconSquarePlus} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import {Breadcrumb, Button, Flex, TableProps, Typography} from "antd";
import Table from "@shared/components/Table";
import {Link} from "react-router-dom";
import ActionButton from "@shared/components/Button/ActionButton";
import Select from "@shared/components/Select";
import Input from "@shared/components/Input";
import {Device} from "@modules/devices/interface";

const columns: TableProps<Device>['columns'] = [
    {
        title: 'Mã thiết bị',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: 'Tên thiết bị',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Địa chỉ IP',
        dataIndex: 'ip',
        key: 'ip',
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
        title: 'Trạng thái kết nối',
        key: 'connected',
        dataIndex: 'connected',
        render: (connected) => (
            <>
                {
                    connected ? <Flex gap="small"><IconCircle style={{color: '#35C75A'}}/> Kết nối</Flex> :
                        <Flex gap="small"><IconCircle style={{color: '#E73F3F'}}/>Mất kết nối</Flex>
                }
            </>
        ),
    },
    {
        title: 'Dịch vụ sử dụng',
        key: 'services',
        dataIndex: 'services',
        render: (_, {services}) => (
            <>
                {
                    services.join(', ')
                }
            </>
        ),
    },
    {
        title: '',
        key: 'detail',
        render: (_, record) => (<Link to={`/thiet-bi/chi-tiet/${record.code}`}><Button type="link"
                                                                                       style={{textDecorationLine: 'underline'}}>Chi
            tiết</Button></Link>),
    },
    {
        title: '',
        key: 'update',
        render: (_, record) => (<Link to={`/thiet-bi/cap-nhat/${record.code}`}><Button type="link"
                                                                                       style={{textDecorationLine: 'underline'}}>Cập
            nhật</Button></Link>),
    },
];

const data: Device[] = [
    {
        code: 'KIO_01',
        name: 'Kiosk',
        ip: '192.168.1.10',
        status: 'ACTIVE',
        connected: false,
        services: [
            'Khám tim mạch', 'Khám mắt', 'Khám tim'
        ]
    },
    {
        code: 'KIO_02',
        name: 'Kiosk',
        ip: '192.168.1.10',
        status: 'INACTIVE',
        connected: false,
        services: [
            'Khám tim mạch', 'Khám mắt', 'Khám tim'
        ]
    },
    {
        code: 'KIO_03',
        name: 'Kiosk',
        ip: '192.168.1.10',
        status: 'ACTIVE',
        connected: true,
        services: [
            'Khám tim mạch', 'Khám mắt', 'Khám tim'
        ]
    },
    {
        code: 'KIO_04',
        name: 'Kiosk',
        ip: '192.168.1.10',
        status: 'ACTIVE',
        connected: false,
        services: [
            'Khám tim mạch', 'Khám mắt', 'Khám tim'
        ]
    },
    {
        code: 'KIO_05',
        name: 'Kiosk',
        ip: '192.168.1.10',
        status: 'ACTIVE',
        connected: true,
        services: [
            'Khám tim mạch', 'Khám mắt', 'Khám tim'
        ]
    },
    {
        code: 'KIO_06',
        name: 'Kiosk',
        ip: '192.168.1.10',
        status: 'ACTIVE',
        connected: false,
        services: [
            'Khám tim mạch', 'Khám mắt', 'Khám tim'
        ]
    },
    {
        code: 'KIO_07',
        name: 'Kiosk',
        ip: '192.168.1.10',
        status: 'INACTIVE',
        connected: false,
        services: [
            'Khám tim mạch', 'Khám mắt', 'Khám tim'
        ]
    },
    {
        code: 'KIO_08',
        name: 'Kiosk',
        ip: '192.168.1.10',
        status: 'ACTIVE',
        connected: true,
        services: [
            'Khám tim mạch', 'Khám mắt', 'Khám tim'
        ]
    },
    {
        code: 'KIO_09',
        name: 'Kiosk',
        ip: '192.168.1.10',
        status: 'INACTIVE',
        connected: false,
        services: [
            'Khám tim mạch', 'Khám mắt', 'Khám tim'
        ]
    },
    {
        code: 'KIO_010',
        name: 'Kiosk',
        ip: '192.168.1.10',
        status: 'ACTIVE',
        connected: false,
        services: [
            'Khám tim mạch', 'Khám mắt', 'Khám tim'
        ]
    },
    {
        code: 'KIO_011',
        name: 'Kiosk',
        ip: '192.168.1.10',
        status: 'ACTIVE',
        connected: false,
        services: [
            'Khám tim mạch', 'Khám mắt', 'Khám tim'
        ]
    },
];

const DevicePage = () => {
    return (
        <div>
            <Flex style={{padding: '2.4rem'}} align="center" justify="space-between">
                <Breadcrumb
                    separator={<IconChevronRight/>}
                    items={[
                        {
                            title: 'Thiết bị'
                        },
                        {
                            title: 'Danh sách thiết bị'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>

            <div style={{paddingLeft: '2.4rem', paddingRight: '10.4rem'}}>
                <Typography.Title level={3} style={{marginBottom: '1.6rem'}}>Danh sách thiết
                    bị</Typography.Title>
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
                                   htmlFor="connected">Trạng thái kết nối</label>
                            <Select id="connected"
                                    style={{width: '30rem'}}
                                    defaultValue="all"
                                    options={[
                                        {value: 'all', label: 'Tất cả'},
                                        {value: '1', label: 'Kết nối'},
                                        {value: '2', label: 'Mất kết nối'}
                                    ]}
                            />
                        </Flex>
                    </Flex>

                    <Flex vertical gap={4}>
                        <label style={{fontSize: '1.6rem', fontWeight: 600, lineHeight: '2.4rem'}} htmlFor="search">Từ
                            khóa</label>
                        <Input id="search" style={{width: '30rem'}} placeholder="Nhập từ khóa"/>
                    </Flex>
                </Flex>
                <Table bordered columns={columns} dataSource={data}/>;
            </div>

            <ActionButton icon={<IconSquarePlus/>} to="/thiet-bi/them-moi">
                Thêm<br/> thiết bị
            </ActionButton>
        </div>
    );
};

export default DevicePage;