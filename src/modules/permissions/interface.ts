export enum PermissionEnum {
    // User permissions
    USER_CREATE = 'USER_CREATE',
    USER_VIEW = 'USER_VIEW',
    USER_UPDATE = 'USER_UPDATE',
    USER_VIEW_DETAIL = 'USER_VIEW_DETAIL',

    // Device permissions
    DEVICE_CREATE = 'DEVICE_CREATE',
    DEVICE_VIEW = 'DEVICE_VIEW',
    DEVICE_UPDATE = 'DEVICE_UPDATE',
    DEVICE_VIEW_DETAIL = 'DEVICE_VIEW_DETAIL',

    // Service permissions
    SERVICE_CREATE = 'SERVICE_CREATE',
    SERVICE_VIEW = 'SERVICE_VIEW',
    SERVICE_UPDATE = 'SERVICE_UPDATE',
    SERVICE_VIEW_DETAIL = 'SERVICE_VIEW_DETAIL',

    // Role permissions
    ROLE_CREATE = 'ROLE_CREATE',
    ROLE_VIEW = 'ROLE_VIEW',
    ROLE_UPDATE = 'ROLE_UPDATE',
    ROLE_VIEW_DETAIL = 'ROLE_VIEW_DETAIL',
}

export enum PermissionResourceEnum {
    USER = 'USER',
    DEVICE = 'DEVICE',
    SERVICE = 'SERVICE',
    ROLE = 'ROLE',
}

export interface Permission {
    id: string;
    name: PermissionEnum;
    description: string;
    resource: PermissionResourceEnum;
}