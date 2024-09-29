export interface Device {
    id: string;
    code: string;
    name: string;
    ip: string;
    status: 'ACTIVE' | 'INACTIVE';
    connected: boolean;
    services: string[];
    username: string;
    password: string;
    type: string;
}