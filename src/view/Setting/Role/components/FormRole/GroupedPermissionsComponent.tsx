import React, {useEffect, useState} from 'react';
import {Checkbox, Typography} from "antd";
import {Permission, PermissionResourceEnum} from "@modules/permissions/interface";
import {PermissionResourceMapping} from "@shared/utils/enumMapping";
import {CheckboxChangeEvent} from "antd/es/checkbox";

type GroupedPermissionsProps = {
    permissions: Permission[];
    checkedList: string[];
    onChange: (list: string[]) => void;
}

type GroupedPermissions = {
    [_key in PermissionResourceEnum]: Permission[];
};

const GroupedPermissionsComponent = ({permissions, checkedList, onChange}: GroupedPermissionsProps) => {
    const [groupedPermissions, setGroupedPermissions] = useState<GroupedPermissions>({} as GroupedPermissions);

    useEffect(() => {
        const grouped = permissions.reduce((acc, permission) => {
            if (!acc[permission.resource]) {
                acc[permission.resource] = [];
            }
            acc[permission.resource].push(permission);
            return acc;
        }, {} as GroupedPermissions);
        setGroupedPermissions(grouped);
    }, [permissions]);

    const onGroupChange = (resource: PermissionResourceEnum, checkedValues: string[]) => {
        const otherPermissions = checkedList.filter(id =>
            !groupedPermissions[resource].some(gp => gp.id === id)
        );
        onChange([...otherPermissions, ...checkedValues]);
    };

    const onGroupCheckAllChange = (resource: PermissionResourceEnum, e: CheckboxChangeEvent) => {
        const groupPermissionIds = groupedPermissions[resource].map(p => p.id);
        if (e.target.checked) {
            const newCheckedList = [...new Set([...checkedList, ...groupPermissionIds])];
            onChange(newCheckedList);
        } else {
            const newCheckedList = checkedList.filter(id => !groupPermissionIds.includes(id));
            onChange(newCheckedList);
        }
    };

    return (
        <div>
            {
                Object.entries(groupedPermissions).map(([resource, perms]) => {
                    const groupOptions = perms.map(p => ({ label: p.description, value: p.id }));
                    const groupCheckedList = checkedList.filter(id => perms.some(p => p.id === id));
                    const indeterminate = groupCheckedList.length > 0 && groupCheckedList.length < perms.length;
                    const checkAll = groupCheckedList.length === perms.length;
                    const resourceName = PermissionResourceMapping[resource as keyof typeof PermissionResourceMapping];
                    return (
                        <div style={{marginBottom: '2rem'}} key={resourceName}>
                            <Typography.Title level={4}>Nhóm chức năng cho {resourceName}</Typography.Title>
                            <Checkbox
                                indeterminate={indeterminate}
                                onChange={(e) => onGroupCheckAllChange(resource as PermissionResourceEnum, e)}
                                checked={checkAll}
                                style={{marginBottom: '1.2rem'}}
                            >
                                Tất cả
                            </Checkbox>
                            <Checkbox.Group
                                options={groupOptions}
                                value={groupCheckedList}
                                onChange={(checkedValues) => onGroupChange(resource as PermissionResourceEnum, checkedValues as string[])}
                            />
                        </div>

                    );
                })
            }
        </div>
    );
};

export default GroupedPermissionsComponent;