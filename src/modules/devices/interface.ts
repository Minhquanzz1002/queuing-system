export interface Device {
    code: string;
    name: string;
    ip: string;
    status: 'ACTIVE' | 'INACTIVE';
    connected: boolean;
    services: string[];
}