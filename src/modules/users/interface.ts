import {Role} from "@modules/roles/interface";

export interface User {
    id: string;
    username: string;
    name: string;
    password: string;
    phone: string;
    status: "ACTIVE" | "INACTIVE";
    role: Role;
}