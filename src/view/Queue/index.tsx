import React, {useEffect, useState} from 'react';
import {IconCircle, IconSquarePlus} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import {Flex, Form, TableProps, Typography} from "antd";
import Table from "@shared/components/Table";
import {Link} from "react-router-dom";
import ActionButton from "src/shared/components/ActionButton";
import Select from "@shared/components/Select";
import Input from "@shared/components/Input";
import Breadcrumb from "@shared/components/Breadcrumb";
import ButtonLink from "@shared/components/ButtonLink";
import {useSingleAsync} from "@shared/hook/useAsync";
import {getServices} from "@modules/services/repository";
import {Service} from "@modules/services/interface";
import {Queue} from "@modules/queue/interface";
import {getQueues} from "@modules/queue/repository";
import dayjs, {Dayjs} from "dayjs";
import RangePicker from "@shared/components/RangePicker";

const columns: TableProps<Queue>['columns'] = [
    {
        title: 'STT',
        dataIndex: 'serialNumber',
        key: 'queue_serialNumber',
    },
    {
        title: 'Tên khách hàng',
        dataIndex: 'customer',
        key: 'queue_customerName',
        render: (_, record) => record.customer.name
    },
    {
        title: 'Tên dịch vụ',
        dataIndex: 'service',
        key: 'queue_service',
        render: (service) => service.name,
    },
    {
        title: 'Thời gian cấp',
        dataIndex: 'issueTime',
        key: 'queue_issueTime',
        render: (issueTime) => dayjs(issueTime).format('HH:mm - DD/MM/YYYY'),
    },
    {
        title: 'Hạn sử dụng',
        dataIndex: 'expiryDate',
        key: 'queue_expiryDate',
        render: (expiryDate) => dayjs(expiryDate).format('HH:mm - DD/MM/YYYY'),
    },
    {
        title: 'Trạng thái',
        key: 'queue_status',
        dataIndex: 'status',
        render: (status) => (
            <>
                {
                    status === 'USED' ? (
                        <Flex gap="small"><IconCircle style={{color: '#7E7D88'}}/>Đã sử dụng</Flex>
                    ) : status === 'WAITING' ? (
                        <Flex gap="small"><IconCircle style={{color: '#4277FF'}}/>Đang chờ</Flex>
                    ) : (
                        <Flex gap="small"><IconCircle style={{color: '#E73F3F'}}/>Bỏ qua</Flex>
                    )
                }
            </>
        ),
    },
    {
        title: 'Nguồn cấp',
        dataIndex: 'issueSource',
        key: 'queue_issueSource',
    },
    {
        title: '',
        key: 'detail',
        render: (_, record) => (
            <Link to={`/admin/cap-so/${record.id}`}>
                <ButtonLink>
                    Chi tiết
                </ButtonLink>
            </Link>
        ),
    },
];

type Filters = {
    status: string;
    issueSource: string;
    service: string;
    startDate: Dayjs | null;
    endDate: Dayjs | null;
}

const QueuePage = () => {
    const [filters, setFilters] = useState<Filters>({
        status: 'ALL',
        issueSource: 'ALL',
        service: 'ALL',
        startDate: dayjs().startOf('month'),
        endDate: dayjs(),
    });
    const [services, setServices] = useState<Service[]>([]);
    const [queues, setQueues] = useState<Queue[]>([]);
    const loadServices = useSingleAsync(getServices);
    const loadQueues = useSingleAsync(getQueues);

    const handleDateChange = (start: Dayjs | null, end: Dayjs | null) => {
        setFilters(prev => ({ ...prev, startDate: start, endDate: end }));
    };

    useEffect(() => {
        loadQueues.execute({}).then(setQueues).catch(() => setQueues([]));
        loadServices.execute('ACTIVE').then(setServices).catch(() => setServices([]));
    }, []);

    useEffect(() => {
        const {status, issueSource, service, startDate, endDate} = filters;
        const statusFilter = status === 'ALL' ? undefined : status;
        const issueSourceFilter = issueSource === 'ALL' ? undefined : issueSource;
        const serviceFilter = service === 'ALL' ? undefined : service;
        loadQueues.execute({
            status: statusFilter,
            issueSource: issueSourceFilter,
            serviceId: serviceFilter,
            startDate: startDate?.toDate(),
            endDate: endDate?.toDate()
        }).then(setQueues).catch(() => setQueues([]));
    }, [filters]);

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
                <Typography.Title level={3} style={{color: '#FF7506', marginBottom: '1.6rem'}}>Quản lý cấp
                    số</Typography.Title>

                <Form layout="vertical"
                      initialValues={filters}
                      onValuesChange={(_, allValues) => setFilters(prevState => ({...prevState, ...allValues}))}
                >
                    <Flex justify="space-between" wrap>
                        <Form.Item label="Tên dịch vụ" name="service">
                            <Select style={{width: '15.5rem'}}>
                                <Select.Option value="ALL">Tất cả</Select.Option>
                                {
                                    services.map((service: Service) => (
                                        <Select.Option key={service.id}
                                                       value={service.id}>{service.name}</Select.Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>

                        <Form.Item label="Tình trạng" name="status">
                            <Select style={{width: '15.5rem'}}
                                    options={[
                                        {key: "STATUS_FILTER_ALL", value: "ALL", label: "Tất cả"},
                                        {key: "STATUS_FILTER_PENDING", value: "PENDING", label: "Đang chờ"},
                                        {key: "STATUS_FILTER_USED", value: "USED", label: "Đã sử dụng"},
                                        {key: "STATUS_FILTER_SKIPPED", value: "SKIPPED", label: "Bỏ qua"},
                                    ]}
                            />
                        </Form.Item>

                        <Form.Item label="Nguồn cấp" name="issueSource">
                            <Select style={{width: '15.5rem'}}
                                    options={[
                                        {key: "ISSUE_SOURCE_FILTER_ALL", value: "ALL", label: "Tất cả"},
                                        {key: "ISSUE_SOURCE_FILTER_KIOSK", value: "Kiosk", label: "Kiosk"},
                                        {key: "ISSUE_SOURCE_FILTER_SYSTEM", value: "Hệ thống", label: "Hệ thống"},
                                    ]}
                            />

                        </Form.Item>

                        <Form.Item label="Chọn thời gian">
                            <RangePicker start={filters.startDate} end={filters.endDate} onChange={handleDateChange}/>
                        </Form.Item>

                        <Form.Item label="Từ khóa" name="search">
                            <Input style={{width: '30rem'}} id="search" placeholder="Nhập từ khóa"/>
                        </Form.Item>
                    </Flex>
                </Form>
                <Table bordered columns={columns} dataSource={queues} rowKey={record => record.id}/>
            </div>

            <ActionButton>
                <ActionButton.Item icon={<IconSquarePlus/>} href="/admin/cap-so/cap-so-moi">
                    Cấp<br/> số mới
                </ActionButton.Item>
            </ActionButton>
        </div>
    );
};

export default QueuePage;