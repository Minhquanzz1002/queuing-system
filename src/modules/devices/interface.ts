import {Service} from "@modules/services/interface";

export interface Device {
    id: string;
    code: string;
    name: string;
    ip: string;
    status: 'ACTIVE' | 'INACTIVE';
    connected: boolean;
    services: Service[];
    username: string;
    password: string;
    type: string;
}