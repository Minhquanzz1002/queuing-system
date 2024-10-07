import {Service} from "@modules/services/interface";

export interface Customer {
    name: string;
    email?: string;
    phone: string;
}

export interface Queue {
    id: string;
    serialNumber: string;
    customer: Customer;
    service: Service;
    issueTime: Date;
    expiryDate: Date;
    status: 'USED' | 'WAITING' | 'SKIPPED';
    issueSource: string;
}

