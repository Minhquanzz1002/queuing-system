import React, {useEffect, useRef, useState} from 'react';
import {IconCircle, IconSquarePlus} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import {Flex, TableProps, Typography} from "antd";
import Table from "@shared/components/Table";
import {Link} from "react-router-dom";
import ActionButton from "src/shared/components/ActionButton";
import Select from "@shared/components/Select";
import Input from "@shared/components/Input";
import {Device} from "@modules/devices/interface";
import {useSingleAsync} from "@shared/hook/useAsync";
import {getDevices} from "@modules/devices/repository";
import useClickOutside from "@shared/hook/useClickOutside";
import ButtonLink from "@shared/components/ButtonLink";
import Breadcrumb from "@shared/components/Breadcrumb";

const RenderServiceColumn = ({services}: { services: string[] }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const expandedRef = useRef<HTMLDivElement>(null);
    useClickOutside<HTMLDivElement>(expandedRef, () => setIsExpanded(false));

    const handleToggleExpand = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <div style={{width: '25rem', position: 'relative'}}>
            <div style={{textWrap: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                {services.join(', ')}
            </div>
            <ButtonLink onClick={handleToggleExpand}>Xem thêm</ButtonLink>
            {
                isExpanded && (
                    <div ref={expandedRef} style={{
                        position: 'absolute',
                        zIndex: 2,
                        top: 0,
                        left: 0,
                        width: '160%',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        border: '1px solid #FFC89B',
                        padding: '4px 8px'
                    }}>
                        {services.join(', ')}
                    </div>
                )
            }
        </div>
    );
};

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
        title: 'Trạng thái kết nối',
        key: 'connected',
        dataIndex: 'connected',
        render: (connected) => (
            <>
                {
                    connected ? <Flex gap="small" className="text-nowrap"><IconCircle style={{color: '#35C75A'}}/> Kết
                            nối</Flex> :
                        <Flex gap="small" className="text-nowrap"><IconCircle style={{color: '#E73F3F'}}/>Mất kết
                            nối</Flex>
                }
            </>
        ),
    },
    {
        title: 'Dịch vụ sử dụng',
        key: 'services',
        dataIndex: 'services',
        render: (_, {services}) => <RenderServiceColumn services={services}/>
    },
    {
        title: '',
        key: 'detail',
        render: (_, record) => (
            <Link to={`/thiet-bi/${record.code}/chi-tiet`}>
                <ButtonLink>
                    Chi tiết
                </ButtonLink>
            </Link>
        ),
    },
    {
        title: '',
        key: 'update',
        render: (_, record) => (
            <Link to={`/thiet-bi/${record.code}/cap-nhat`}>
                <ButtonLink>
                    Cập nhật
                </ButtonLink>
            </Link>),
    },
];

const DevicePage = () => {
    const [devices, setDevices] = useState<Device[]>([]);

    const loadDevices = useSingleAsync(getDevices);

    useEffect(() => {
        loadDevices.execute().then(setDevices).catch(() => setDevices([]));
    }, []);

    return (
        <div>
            <Flex style={{padding: '2.4rem'}} align="center" justify="space-between">
                <Breadcrumb
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
                <Flex style={{marginBottom: '1.6rem'}} justify="space-between" wrap="wrap">
                    <Flex gap="middle" wrap>
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
                <div style={{overflow: 'hidden', borderRadius: '1.2rem'}}>
                    <Table bordered columns={columns} dataSource={devices} scroll={{x: '100%'}}/>
                </div>
            </div>

            <ActionButton>
                <ActionButton.Item icon={<IconSquarePlus/>} href="/thiet-bi/them-moi">Thêm<br/> thiết bị</ActionButton.Item>
            </ActionButton>
        </div>
    );
};

export default DevicePage;