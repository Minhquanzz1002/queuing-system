import React, {useEffect, useState} from 'react';
import TopBar from "@shared/components/TopBar";
import {Flex, Form, TableProps} from "antd";
import Table from "@shared/components/Table";
import Input from "@shared/components/Input";
import Breadcrumb from "@shared/components/Breadcrumb";
import {UserLog} from "@modules/userLogs/interface";
import {useSingleAsync} from "@shared/hook/useAsync";
import {getUserLogs} from "@modules/userLogs/repository";
import dayjs, {Dayjs} from "dayjs";
import RangePicker from "@shared/components/RangePicker";

const columns: TableProps<UserLog>['columns'] = [
    {
        title: 'Tên đăng nhập',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'Thời gian tác động',
        dataIndex: 'actionTime',
        key: 'actionTime',
        render: (actionTime: Date) => dayjs(actionTime).format('DD/MM/YYYY HH:mm:ss'),
    },
    {
        title: 'IP thực hiện',
        dataIndex: 'ipAddress',
        key: 'ipAddress',
    },
    {
        title: 'Thao tác thực hiện',
        dataIndex: 'action',
        key: 'action',
    }
];

const UserLogSettingPage = () => {
    const [userLogs, setUserLogs] = useState<UserLog[]>([]);
    const loadUserLogs = useSingleAsync(getUserLogs);

    const [startDate, setStartDate] = useState<Dayjs | null>(dayjs().startOf('month'));
    const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());

    const handleDateChange = (start: Dayjs | null, end: Dayjs | null) => {
        setStartDate(start);
        setEndDate(end);

        if (start && end) {
            loadUserLogs.execute(start.toDate(), end.toDate()).then(setUserLogs).catch(() => setUserLogs([]));
        }
    };

    useEffect(() => {
        loadUserLogs.execute().then(setUserLogs).catch(() => setUserLogs([]));
    }, []);

    useEffect(() => {

    }, [endDate]);

    return (
        <div>
            <Flex style={{padding: '2.4rem'}} align="center" justify="space-between">
                <Breadcrumb
                    items={[
                        {
                            title: 'Cài đặt hệ thống'
                        },
                        {
                            title: 'Nhật ký người dùng'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>

            <div style={{paddingLeft: '2.4rem', paddingRight: '10.4rem'}}>
                <Form layout="vertical">
                    <Flex justify="space-between">
                        <Form.Item label="Tên vai trò">
                            <RangePicker start={startDate} end={endDate} onChange={handleDateChange}/>
                        </Form.Item>

                        <Form.Item label="Từ khóa">
                            <Input style={{width: '30rem'}} id="search" placeholder="Nhập từ khóa"/>
                        </Form.Item>
                    </Flex>
                </Form>
                <Table bordered columns={columns} dataSource={userLogs}/>
            </div>
        </div>
    );
};

export default UserLogSettingPage;