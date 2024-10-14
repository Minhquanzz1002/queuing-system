import {Permission} from "@modules/permissions/interface";

export interface Role {
    id: string;
    name: string;
    description?: string;
    userCount: number;
    permissions?: Permission[];
}