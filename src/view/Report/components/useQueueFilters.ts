import {Queue} from "@modules/queue/interface";
import {useMemo, useState} from "react";
import dayjs from "dayjs";

interface Filters {
    serviceFilters: string[];
    statusFilter: string;
    sourceFilter: string;
    serialNumberFilter: string;
    issueTimeFilter: Date | string;
}

export const useQueueFilters = (queues: Queue[]) => {
    const [filters, setFilters] = useState<Filters>({
        serviceFilters: [],
        statusFilter: "ALL",
        sourceFilter: "ALL",
        serialNumberFilter: "ALL",
        issueTimeFilter: "ALL"
    });

    const filteredQueues = useMemo(() => {
        return queues.filter(queue => {
            const serviceMatch = filters.serviceFilters.length === 0 || filters.serviceFilters.includes(queue.service.name);
            const statusMatch = filters.statusFilter === 'ALL' || filters.statusFilter === queue.status;
            const sourceMatch = filters.sourceFilter === 'ALL' || filters.sourceFilter === queue.issueSource;
            const serialNumberMatch = filters.serialNumberFilter === 'ALL' || filters.serialNumberFilter === queue.serialNumber;
            const issueTimeMatch = filters.issueTimeFilter === 'ALL' || (filters.issueTimeFilter instanceof Date && queue.issueTime.getTime() === filters.issueTimeFilter.getTime());
            return serialNumberMatch && serviceMatch && statusMatch && sourceMatch && issueTimeMatch;
        });
    }, [queues, filters]);

    const uniqueServices = useMemo(() => {
        const services = queues.map(queue => queue.service.name);
        return Array.from(new Set(services));
    }, [queues]);

    const uniqueSerialNumbers = useMemo(() => {
        const serialNumbers = queues.map(queue => queue.serialNumber);
        return Array.from(new Set(serialNumbers));
    }, [queues]);

    const uniqueIssueTimes = useMemo(() => {
        const issueTimes = queues.map(queue => queue.issueTime);
        return Array.from(new Set(issueTimes)).sort((a, b) => dayjs(b).diff(dayjs(a)));
    }, [queues]);

    const setServiceFilters = (checkedValues: string[]) => {
        setFilters(prev => ({
            ...prev,
            serviceFilters: checkedValues.includes('ALL') ? [] : checkedValues
        }));
    };

    const setStatusFilter = (status: string) => {
        setFilters(prev => ({ ...prev, statusFilter: status }));
    };

    const setSourceFilter = (source: string) => {
        setFilters(prev => ({ ...prev, sourceFilter: source }));
    };

    const setSerialNumberFilter = (serialNumber: string) => {
        setFilters(prev => ({ ...prev, serialNumberFilter: serialNumber }));
    };

    const setIssueTimeFilter = (issueTime: Date | string) => {
        setFilters(prev => ({ ...prev, issueTimeFilter: issueTime }));
    };

    return {
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
    };
};