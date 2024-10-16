import React, {useEffect, useRef, useState} from 'react';
import {IconCircle, IconSquarePlus} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import {Flex, Form, TableProps, Typography} from "antd";
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
import {Service} from "@modules/services/interface";

const RenderServiceColumn = ({services}: { services: Service[] }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const expandedRef = useRef<HTMLDivElement>(null);
    useClickOutside<HTMLDivElement>(expandedRef, () => setIsExpanded(false));

    const handleToggleExpand = () => {
        setIsExpanded(prevState => !prevState);
    };

    const listServiceString = services.map(service => service.name).join(', ');

    return (
        <div style={{width: '25rem', position: 'relative'}}>
            <div style={{textWrap: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                {listServiceString}
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
                        {listServiceString}
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
        key: 'device_code',
    },
    {
        title: 'Tên thiết bị',
        dataIndex: 'name',
        key: 'device_name',
    },
    {
        title: 'Địa chỉ IP',
        dataIndex: 'ip',
        key: 'device_ip',
    },
    {
        title: 'Trạng thái hoạt động',
        key: 'device_status',
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
        key: 'device_connected',
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
        key: 'device_services',
        dataIndex: 'services',
        render: (_, {services}) => <RenderServiceColumn services={services}/>
    },
    {
        title: '',
        key: 'device_detail',
        render: (_, record) => (
            <Link to={`/admin/thiet-bi/${record.code}`}>
                <ButtonLink>
                    Chi tiết
                </ButtonLink>
            </Link>
        ),
    },
    {
        title: '',
        key: 'device_update',
        render: (_, record) => (
            <Link to={`/admin/thiet-bi/${record.code}/cap-nhat`}>
                <ButtonLink>
                    Cập nhật
                </ButtonLink>
            </Link>),
    },
];

type Filters = {
    status: string;
    connected: string;
    search: string;
}

const DevicePage = () => {
    const [filters, setFilters] = useState<Filters>({
        status: 'all',
        connected: 'all',
        search: '',
    });
    const [devices, setDevices] = useState<Device[]>([]);
    const loadDevices = useSingleAsync(getDevices);

    useEffect(() => {
        loadDevices.execute().then(setDevices).catch(() => setDevices([]));
    }, []);

    useEffect(() => {
        const {status, connected} = filters;
        const statusFilter = status !== 'all' ? status : undefined;
        const connectedFilter = connected !== 'all' ? connected === 'true' : undefined;
        loadDevices.execute(statusFilter, connectedFilter).then(setDevices).catch(() => setDevices([]));
    }, [filters]);

    const onFiltersChange = (_changedValues: any, allValues: Filters) => {
        setFilters(allValues);
    };

    return (
        <div>
            <Flex style={{padding: '2.4rem'}} align="center" justify="space-between" wrap="wrap">
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
                <Form layout="vertical"
                      initialValues={filters}
                      onValuesChange={onFiltersChange}
                >
                    <Flex justify="space-between" wrap="wrap">
                        <Flex gap="middle" wrap>
                            <Form.Item label="Trạng thái hoạt động" name="status">
                                <Select id="status"
                                        style={{width: '30rem'}}
                                        options={[
                                            {value: 'all', label: 'Tất cả'},
                                            {value: 'ACTIVE', label: 'Hoạt động'},
                                            {value: 'INACTIVE', label: 'Ngưng hoạt động'}
                                        ]}
                                />
                            </Form.Item>

                            <Form.Item label="Trạng thái kết nối" name="connected">
                                <Select id="connected"
                                        style={{width: '30rem'}}
                                        options={[
                                            {value: 'all', label: 'Tất cả'},
                                            {value: 'true', label: 'Kết nối'},
                                            {value: 'false', label: 'Mất kết nối'}
                                        ]}
                                />
                            </Form.Item>
                        </Flex>

                        <Form.Item label="Từ khóa" name="search">
                            <Input id="search" style={{width: '30rem'}} placeholder="Nhập từ khóa"/>
                        </Form.Item>
                    </Flex>
                </Form>
                <div style={{overflow: 'hidden', borderRadius: '1.2rem'}}>
                    <Table bordered columns={columns} dataSource={devices} scroll={{x: '100%'}} rowKey={(record) => record.id}/>
                </div>
            </div>

            <ActionButton>
                <ActionButton.Item icon={<IconSquarePlus/>} href="/admin/thiet-bi/them-moi">Thêm<br/> thiết bị</ActionButton.Item>
            </ActionButton>
        </div>
    );
};

export default DevicePage;