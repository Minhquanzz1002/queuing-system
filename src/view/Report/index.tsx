import React, {useEffect, useState} from 'react';
import {IconDocumentDownload} from "@assets/icons";
import TopBar from "@shared/components/TopBar";
import {Flex, Form} from "antd";
import ActionButton from "src/shared/components/ActionButton";
import Breadcrumb from "@shared/components/Breadcrumb";
import {Queue} from "@modules/queue/interface";
import dayjs, {Dayjs} from "dayjs";
import {useSingleAsync} from "@shared/hook/useAsync";
import {getQueues} from "@modules/queue/repository";
import RangePicker from "@shared/components/RangePicker";
import ReportTable from "@view/Report/components/ReportTable";
import {exportToExcel} from "@shared/utils/exportToExcel";

interface QueueReport {
    id: string;
    serialNumber: string;
    customerName: string;
    customerPhone: string;
    customerEmail?: string;
    service: string;
    issueTime: Date;
    expiryDate: Date;
    status: 'USED' | 'WAITING' | 'SKIPPED';
    issueSource: string;
}

const ReportPage = () => {
    const [queues, setQueues] = useState<Queue[]>([]);
    const [filteredQueues, setFilteredQueues] = useState<Queue[]>([]);
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

    const handleExport = () => {
        exportToExcel<QueueReport>(filteredQueues.map(queue => ({
            id: queue.id,
            serialNumber: queue.serialNumber,
            customerName: queue.customer.name,
            customerPhone: queue.customer.phone,
            customerEmail: queue.customer.email,
            service: queue.service.name,
            issueTime: queue.issueTime,
            expiryDate: queue.expiryDate,
            status: queue.status,
            issueSource: queue.issueSource,
        })));
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
                <Form layout="vertical">
                    <Flex>
                        <Form.Item label="Chọn thời gian">
                            <RangePicker start={startDate} end={endDate} onChange={handleDateChange}/>
                        </Form.Item>
                    </Flex>
                </Form>
                <ReportTable queues={queues} setFilteredQueues={setFilteredQueues}/>
            </div>

            <ActionButton>
                <ActionButton.Item icon={<IconDocumentDownload/>} onClick={handleExport}>Tải về</ActionButton.Item>
            </ActionButton>
        </div>
    );
};

export default ReportPage;