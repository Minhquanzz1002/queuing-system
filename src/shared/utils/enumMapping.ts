import {PermissionResourceEnum} from "@modules/permissions/interface";

export const PermissionResourceMapping = {
    [PermissionResourceEnum.USER]: 'người dùng',
    [PermissionResourceEnum.DEVICE]: 'thiết bị',
    [PermissionResourceEnum.SERVICE]: 'dịch vụ',
    [PermissionResourceEnum.ROLE]: 'vai trò',
} as const;