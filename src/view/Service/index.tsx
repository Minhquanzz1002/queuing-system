import React, {useEffect, useState} from 'react';
import {IconCircle, IconSquarePlus} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import {Flex, Form, TableProps, Typography} from "antd";
import Table from "@shared/components/Table";
import {Link} from "react-router-dom";
import ActionButton from "src/shared/components/ActionButton";
import Select from "@shared/components/Select";
import Input from "@shared/components/Input";
import ButtonLink from "@shared/components/ButtonLink";
import {useSingleAsync} from "@shared/hook/useAsync";
import {getServices} from "@modules/services/repository";
import Breadcrumb from "@shared/components/Breadcrumb";
import {Service} from "@modules/services/interface";
import RangePicker from "@shared/components/RangePicker";
import dayjs, {Dayjs} from "dayjs";

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
        render: (_, record) => (
            <Link to={`/admin/dich-vu/${record.code}`}>
                <ButtonLink>
                    Chi tiết
                </ButtonLink>
            </Link>),
    },
    {
        title: '',
        key: 'update',
        render: (_, record) => (
            <Link to={`/admin/dich-vu/${record.code}/cap-nhat`}>
                <ButtonLink>
                    Cập nhật
                </ButtonLink>
            </Link>
        ),
    },
];

type Filters = {
    status: string;
}

const ServicePage = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [filters, setFilters] = useState<Filters>({status: 'ALL'});

    const [startDate, setStartDate] = useState<Dayjs | null>(dayjs().startOf('month'));
    const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());

    const handleDateChange = (start: Dayjs | null, end: Dayjs | null) => {
        setStartDate(start);
        setEndDate(end);
    };

    const loadServices = useSingleAsync(getServices);

    useEffect(() => {
        loadServices.execute().then(setServices).catch(() => setServices([]));
    }, []);

    useEffect(() => {
        const {status} = filters;
        const statusFilter = status !== 'ALL' ? status : undefined;
        loadServices.execute(statusFilter).then(setServices).catch(() => setServices([]));
    }, [filters]);

    const onFiltersChange = (_changedValues: any, allValues: Filters) => {
        setFilters(allValues);
    };

    return (
        <div>
            <Flex style={{padding: '2.4rem'}} align="center" justify="space-between">
                <Breadcrumb
                    items={[
                        {
                            title: 'Dịch vụ'
                        },
                        {
                            title: 'Danh sách dịch vụ'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>

            <div style={{paddingLeft: '2.4rem', paddingRight: '10.4rem'}}>
                <Typography.Title level={3} style={{color: '#FF7506', marginBottom: '1.6rem'}}>Danh sách dịch
                    vụ</Typography.Title>
                <Form layout="vertical" initialValues={filters} onValuesChange={onFiltersChange}>
                    <Flex justify="space-between">
                        <Flex gap="middle">
                            <Form.Item label="Trạng thái hoạt động" name="status">
                                <Select id="status"
                                        style={{width: '30rem'}}
                                        options={[
                                            {value: 'ALL', label: 'Tất cả'},
                                            {value: 'ACTIVE', label: 'Hoạt động'},
                                            {value: 'INACTIVE', label: 'Ngưng hoạt động'}
                                        ]}
                                />
                            </Form.Item>

                            <Form.Item label="Chọn thời gian" name="datePicker">
                                <RangePicker start={startDate} end={endDate} onChange={handleDateChange}/>
                            </Form.Item>
                        </Flex>

                        <Form.Item label="Từ khóa" name="search">
                            <Input style={{width: '30rem'}} id="search" placeholder="Nhập từ khóa"/>
                        </Form.Item>
                    </Flex>
                </Form>
                <Table bordered columns={columns} dataSource={services} rowKey={record => record.id}/>;
            </div>

            <ActionButton>
                <ActionButton.Item icon={<IconSquarePlus/>} href="/admin/dich-vu/them-moi">Thêm<br/> dịch
                    vụ</ActionButton.Item>
            </ActionButton>
        </div>
    );
};

export default ServicePage;