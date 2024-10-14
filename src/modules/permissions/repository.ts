import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {Permission} from "@modules/permissions/interface";
import {db} from "@config/firebaseConfig";

const permissionsRef = collection(db, 'permissions');

export const getPermissions = async (): Promise<Permission[]> => {
    const q = query(permissionsRef, orderBy('name'));

    const permissionSnapshots = await getDocs(q);
    return permissionSnapshots.docs.map(d => {
        return {id: d.id, ...d.data()} as Permission;
    });
};