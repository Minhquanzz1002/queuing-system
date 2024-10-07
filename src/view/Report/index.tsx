import React, {useEffect, useState} from 'react';
import {IconCircle, IconDocumentDownload} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import {Flex, TableProps} from "antd";
import Table from "@shared/components/Table";
import ActionButton from "src/shared/components/ActionButton";
import Breadcrumb from "@shared/components/Breadcrumb";
import {Queue} from "@modules/queue/interface";
import dayjs, {Dayjs} from "dayjs";
import {useSingleAsync} from "@shared/hook/useAsync";
import {getQueues} from "@modules/queue/repository";
import RangePicker from "@shared/components/RangePicker";

const columns: TableProps<Queue>['columns'] = [
    {
        title: 'Số thứ tự',
        dataIndex: 'serialNumber',
        key: 'report_serialNumber',
    },
    {
        title: 'Tên dịch vụ',
        dataIndex: 'service',
        key: 'report_service',
        render: (service) => service.name,
    },
    {
        title: 'Thời gian cấp',
        dataIndex: 'issueTime',
        key: 'report_issueTime',
        render: (issueTime) => dayjs(issueTime).format('HH:mm - DD/MM/YYYY'),
    },
    {
        title: 'Trạng thái',
        key: 'report_status',
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
        key: 'report_issueSource',
    },
];

const ReportPage = () => {
    const [queues, setQueues] = useState<Queue[]>([]);
    const [startDate, setStartDate] = useState<Dayjs | null>(dayjs().startOf('month'));
    const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());

    const loadQueues = useSingleAsync(getQueues);

    useEffect(() => {
        loadQueues.execute({}).then(setQueues).catch(() => setQueues([]));
    }, []);

    const handleDateChange = (start: Dayjs | null, end: Dayjs | null) => {
        setStartDate(start);
        setEndDate(end);
    };

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
                        <RangePicker start={startDate} end={endDate} onChange={handleDateChange}/>
                    </Flex>
                </Flex>
                <Table bordered columns={columns} dataSource={queues} rowKey={record => record.id}/>;
            </div>

            <ActionButton>
                <ActionButton.Item icon={<IconDocumentDownload/>}>Tải về</ActionButton.Item>
            </ActionButton>
        </div>
    );
};

export default ReportPage;