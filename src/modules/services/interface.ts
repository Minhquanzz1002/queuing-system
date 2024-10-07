export interface Service {
    id: string;
    code: string;
    name: string;
    description?: string;
    fromNumber: number;
    toNumber: number;
    prefix: string;
    suffix: string;
    isDaily: string;
    usePrefix: boolean;
    useSuffix: boolean;
    useFromToNumber: boolean;
    status: 'ACTIVE' | 'INACTIVE';
}