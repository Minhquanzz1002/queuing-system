import React, {useEffect, useState} from 'react';
import {IconCircle, IconSquarePlus} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import {Flex, TableProps, Typography} from "antd";
import Table from "@shared/components/Table";
import {Link} from "react-router-dom";
import ActionButton from "src/shared/components/ActionButton";
import Select from "@shared/components/Select";
import Input from "@shared/components/Input";
import DateRangePicker from "@shared/components/DateRangePicker";
import ButtonLink from "@shared/components/ButtonLink";
import {useSingleAsync} from "@shared/hook/useAsync";
import {getServices} from "@modules/services/repository";
import Breadcrumb from "@shared/components/Breadcrumb";
import {Service} from "@modules/services/interface";

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
            <Link to={`/dich-vu/chi-tiet/${record.code}`}>
                <ButtonLink >
                    Chi tiết
                </ButtonLink>
            </Link>),
    },
    {
        title: '',
        key: 'update',
        render: (_, record) => (
            <Link to={`/dich-vu/cap-nhat/${record.code}`}>
                <ButtonLink>
                    Cập nhật
                </ButtonLink>
            </Link>
        ),
    },
];

const ServicePage = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>(new Date());

    const loadServices = useSingleAsync(getServices);

    useEffect(() => {
        loadServices.execute().then(setServices).catch(() => setServices([]));
    }, []);

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
                <Table bordered columns={columns} dataSource={services}/>;
            </div>

            <ActionButton>
                <ActionButton.Item icon={<IconSquarePlus/>} href="/dich-vu/them-moi">Thêm<br/> dịch vụ</ActionButton.Item>
            </ActionButton>
        </div>
    );
};

export default ServicePage;