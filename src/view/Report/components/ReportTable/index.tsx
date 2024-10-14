import "./styles.scss";
import React, {useEffect, useRef, useState} from "react";
import {Flex, Menu, MenuProps, TableProps} from "antd";
import {Queue} from "@modules/queue/interface";
import {IconChecked, IconSort} from "@assets/icons";
import dayjs from "dayjs";
import Table from "@shared/components/Table";
import {useQueueFilters} from "@view/Report/components/useQueueFilters";
import useClickOutside from "@shared/hook/useClickOutside";

const Header = ({title, dropdownRender}: { title: string; dropdownRender: () => React.ReactNode }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref, () => setIsDropdownOpen(false));
    return (
        <Flex justify="space-between" align="center" className="report-table__header">
            <div>{title}</div>
            <button className="report-table__header-filter-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <IconSort/>
            </button>

            {
                isDropdownOpen && (
                    <div className="report-table__header-filter" ref={ref}>
                        {dropdownRender()}
                    </div>
                )
            }
        </Flex>
    );
};

const Checkbox = ({checked, onChange, children}: {
    checked: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    children: React.ReactNode
}) => (
    <label>
        {children}
        <input type="checkbox" checked={checked} onChange={onChange} style={{display: "none"}}/>
        <div className={`checkbox ${checked ? 'checkbox-checked' : ''}`}>
            {checked ? <IconChecked/> : null}
        </div>
    </label>
);

type ReportTableProps = {
    queues: Queue[];
    setFilteredQueues: React.Dispatch<React.SetStateAction<Queue[]>>;
};

const ReportTable = ({queues, setFilteredQueues}: ReportTableProps) => {

    const {
        filters,
        filteredQueues,
        uniqueServices,
        uniqueSerialNumbers,
        uniqueIssueTimes,
        setServiceFilters,
        setStatusFilter,
        setSourceFilter,
        setSerialNumberFilter,
        setIssueTimeFilter
    } = useQueueFilters(queues);

    useEffect(() => {
        setFilteredQueues(filteredQueues);
    }, [filteredQueues]);

    const handleServiceFilterChange = (checkedValues: string[]) => {
        if (checkedValues.includes('ALL')) {
            setServiceFilters([]);
        } else {
            setServiceFilters(checkedValues);
        }
    };

    const columns: TableProps<Queue>['columns'] = [
        {
            title: () => {
                const menuItems: MenuProps['items'] = [
                    {
                        key: 'ALL',
                        onClick: () => setSerialNumberFilter('ALL'),
                        label: 'Tất cả'
                    },
                    ...uniqueSerialNumbers.map(serialNumber => ({
                        key: serialNumber,
                        onClick: () => setSerialNumberFilter(serialNumber),
                        label: serialNumber
                    }))
                ];
                return (
                    <Header title="Số thứ tự"
                            dropdownRender={() => <Menu className="report-table__header-filter-content"
                                                        defaultSelectedKeys={['ALL']} items={menuItems}/>}
                    />
                );
            },
            dataIndex: 'serialNumber',
            key: 'report_serialNumber',
        },
        {
            title: () => (
                <Header title="Tên dịch vụ"
                        dropdownRender={() => (
                            <div className="report-table__header-filter-checkbox">
                                <div className="report-table__header-filter-checkbox-item">
                                    <Checkbox checked={filters.serviceFilters.length === 0}
                                              onChange={e => handleServiceFilterChange(e.target.checked ? ['ALL'] : [])}
                                    >
                                        Tất cả
                                    </Checkbox>
                                </div>
                                {
                                    uniqueServices.map(service => (
                                        <div key={service} className="report-table__header-filter-checkbox-item">
                                            <Checkbox checked={filters.serviceFilters.includes(service)}
                                                      onChange={e => {
                                                          const newServices = e.target.checked
                                                              ? [...filters.serviceFilters, service]
                                                              : filters.serviceFilters.filter((s) => s !== service);
                                                          setServiceFilters(newServices);
                                                      }}
                                            >
                                                {service}
                                            </Checkbox>
                                        </div>
                                    ))
                                }
                            </div>
                        )}
                />
            ),
            dataIndex: 'service',
            key: 'report_service',
            render: (service) => service.name,
        },
        {
            title: () => {
                const menuItems: MenuProps['items'] = [
                    {
                        key: 'ALL',
                        onClick: () => setIssueTimeFilter('ALL'),
                        label: 'Tất cả'
                    },
                    ...uniqueIssueTimes.map((time, index) => ({
                        key: index,
                        onClick: () => setIssueTimeFilter(time),
                        label: dayjs(time).format('HH:mm - DD/MM/YYYY')
                    }))
                ];
                return (
                    <Header title="Thời gian cấp"
                            dropdownRender={() => <Menu className="report-table__header-filter-content"
                                                        defaultSelectedKeys={['ALL']} items={menuItems}/>}
                    />
                );
            },
            dataIndex: 'issueTime',
            key: 'report_issueTime',
            render: (issueTime) => dayjs(issueTime).format('HH:mm - DD/MM/YYYY'),
        },
        {
            title: () => {
                const menuItems: MenuProps['items'] = [
                    {
                        key: 'ALL',
                        onClick: () => setStatusFilter('ALL'),
                        label: 'Tất cả'
                    },
                    {
                        key: 'WAITING',
                        onClick: () => setStatusFilter('WAITING'),
                        label: 'Đang chờ'
                    },
                    {
                        key: 'USED',
                        onClick: () => setStatusFilter('USED'),
                        label: 'Đã sử dụng'
                    },
                    {
                        key: 'SKIPPED',
                        onClick: () => setStatusFilter('SKIPPED'),
                        label: 'Bỏ qua'
                    }
                ];
                return (
                    <Header title="Trạng thái"
                            dropdownRender={() => <Menu className="report-table__header-filter-content"
                                                        defaultSelectedKeys={['ALL']} items={menuItems}/>}
                    />
                );
            },
            key: 'report_status',
            dataIndex: 'status',
            render: (status) => {
                switch (status) {
                    case 'WAITING':
                        return 'Đang chờ';
                    case 'USED':
                        return 'Đã sử dụng';
                    case 'SKIPPED':
                        return 'Bỏ qua';
                    default:
                        return '';
                }
            }
        },
        {
            dataIndex: 'issueSource',
            key: 'report_issueSource',
            title: () => {
                const menuItems: MenuProps['items'] = [
                    {
                        key: 'ALL',
                        onClick: () => setSourceFilter('ALL'),
                        label: 'Tất cả'
                    },
                    {
                        key: 'KIOSK',
                        onClick: () => setSourceFilter('Kiosk'),
                        label: 'Kiosk'
                    },
                    {
                        key: 'SYSTEM',
                        onClick: () => setSourceFilter('Hệ thống'),
                        label: 'Hệ thống'
                    }
                ];
                return (
                    <Header title="Nguồn cấp"
                            dropdownRender={() => (
                                <Menu className="report-table__header-filter-content" defaultSelectedKeys={['ALL']}
                                      items={menuItems}/>
                            )}
                    />
                );
            },
        },
    ];

    return (
        <div className="report-table">
            <Table bordered columns={columns} dataSource={filteredQueues} rowKey={record => record.id}/>
        </div>
    );
};

export default ReportTable;