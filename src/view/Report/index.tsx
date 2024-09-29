import React, {useState} from 'react';
import {IconCircle, IconDocumentDownload} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import {Button, Flex, TableProps} from "antd";
import Table from "@shared/components/Table";
import {Link} from "react-router-dom";
import ActionButton from "src/shared/components/ActionButton";
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
        title: 'Số thứ tự',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: 'Tên dịch vụ',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Thời gian cấp',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Tình trạng',
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
        title: 'Nguồn cấp',
        key: 'detail',
        render: (_, record) => (<Link to={`/dich-vu/chi-tiet/${record.code}`}><Button type="link"
                                                                                      style={{textDecorationLine: 'underline'}}>Chi
            tiết</Button></Link>),
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

const ReportPage = () => {
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>(new Date());
    return (
        <div>
            <Flex style={{padding: '2.4rem'}} align="center" justify="space-between">
                <Breadcrumb
                    items={[
                        {
                            title: 'Báo cáo'
                        },
                        {
                            title: 'Lập báo cáo'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>

            <div style={{paddingLeft: '2.4rem', paddingRight: '10.4rem'}}>
                <Flex style={{marginBottom: '1.6rem'}}>
                    <Flex vertical gap={4}>
                        <label style={{fontSize: '1.6rem', fontWeight: 600, lineHeight: '2.4rem'}}
                               htmlFor="connected">Chọn thời gian</label>
                        <DateRangePicker onChangeStartDate={(date) => setStartDate(date)} endDate={endDate}
                                         startDate={startDate}
                                         onChangeEndDate={(date) => setEndDate(date)}/>
                    </Flex>
                </Flex>
                <Table bordered columns={columns} dataSource={data}/>;
            </div>

            <ActionButton>
                <ActionButton.Item icon={<IconDocumentDownload/>} href="/dich-vu/them">Tải về</ActionButton.Item>
            </ActionButton>
        </div>
    );
};

export default ReportPage;