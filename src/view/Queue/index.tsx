import React, {useEffect, useState} from 'react';
import {IconCircle, IconSquarePlus} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import {Flex, Form, TableProps, Typography} from "antd";
import Table from "@shared/components/Table";
import {Link} from "react-router-dom";
import ActionButton from "src/shared/components/ActionButton";
import Select from "@shared/components/Select";
import Input from "@shared/components/Input";
import DateRangePicker from "@shared/components/DateRangePicker";
import Breadcrumb from "@shared/components/Breadcrumb";
import ButtonLink from "@shared/components/ButtonLink";
import {useSingleAsync} from "@shared/hook/useAsync";
import {getServices} from "@modules/services/repository";
import {Service} from "@modules/services/interface";

const columns: TableProps<Service>['columns'] = [
    {
        title: 'STT',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: 'Tên khách hàng',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Tên dịch vụ',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Thời gian cấp',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Hạn sử dụng',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Nguồn cấp',
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
            <Link to={`/cap-so/chi-tiet/${record.code}`}>
                <ButtonLink>
                    Chi tiết
                </ButtonLink>
            </Link>
        ),
    },
];

const QueuePage = () => {
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>(new Date());

    const [services, setServices] = useState<Service[]>([]);
    const loadServices = useSingleAsync(getServices);

    useEffect(() => {
        loadServices.execute('ACTIVE').then(setServices).catch(() => setServices([]));
    }, []);

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

                <Form layout="vertical">
                    <Flex justify="space-between" wrap>
                        <Form.Item label="Tên dịch vụ">
                            <Select style={{width: '15.5rem'}}
                                    defaultValue="Tất cả"
                            >
                                <Select.Option key="" value="Tất cả">Tất cả</Select.Option>
                                {
                                    services.map((service: Service) => (
                                        <Select.Option key={service.code} value={service.code}>{service.name}</Select.Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>

                        <Form.Item label="Tình trạng">
                            <Select style={{width: '15.5rem'}}
                                    defaultValue="Tất cả"
                                    options={[
                                        {key: "", value: "Tất cả"},
                                        {key: "PENDING", value: "Đang chờ"},
                                        {key: "USED", value: "Đã sử dụng"},
                                        {key: "SKIPPED", value: "Bỏ qua"}
                                    ]}
                            />

                        </Form.Item>

                        <Form.Item label="Nguồn cấp">
                            <Select style={{width: '15.5rem'}}
                                    defaultValue="Tất cả"
                                    options={[
                                        {key: "", value: "Tất cả"},
                                        {key: "Kiosk", value: "Kiosk"},
                                        {key: "System", value: "Hệ thống"},
                                    ]}
                            />

                        </Form.Item>

                        <Form.Item label="Chọn thời gian">
                            <DateRangePicker onChangeStartDate={(date) => setStartDate(date)} endDate={endDate}
                                             startDate={startDate}
                                             onChangeEndDate={(date) => setEndDate(date)}/>
                        </Form.Item>

                        <Form.Item label="Từ khóa">
                            <Input style={{width: '30rem'}} id="search" placeholder="Nhập từ khóa"/>
                        </Form.Item>
                    </Flex>
                </Form>
                <Table bordered columns={columns}/>;
            </div>

            <ActionButton>
                <ActionButton.Item icon={<IconSquarePlus/>} href="/cap-so/cap-so-moi">
                    Cấp<br/> số mới
                </ActionButton.Item>
            </ActionButton>
        </div>
    );
};

export default QueuePage;