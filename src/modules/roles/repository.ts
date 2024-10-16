import {
    collection,
    doc,
    DocumentReference,
    getDoc,
    getDocs,
    orderBy,
    query,
    runTransaction,
    where
} from "firebase/firestore";
import {db} from "@config/firebaseConfig";
import {Role} from "@modules/roles/interface";
import {Permission} from "@modules/permissions/interface";
import {addUserLog} from "@modules/userLogs/repository";


const rolesRef = collection(db, 'roles');
const permissionsRef = collection(db, 'permissions');

export const getRoles = async (role?: string): Promise<Omit<Role, 'permissions'>[]> => {
    const conditions = role ? [where('role', '==', role)] : [];
    const q = query(rolesRef, ...conditions, orderBy('name', 'asc'));

    const roleSnapshots = await getDocs(q);
    return roleSnapshots.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            name: data.name,
            description: data.description,
            userCount: data.userCount,
        } as Role;
    });
};

export const getRoleById = async (id: string): Promise<Role | null> => {
    const roleDoc = doc(rolesRef, id);
    const roleSnapshot = await getDoc(roleDoc);

    if (roleSnapshot.exists()) {
        const data = roleSnapshot.data();
        const permissionRefs = data.permissions as DocumentReference[];

        const permissions = await Promise.all(
            permissionRefs.map(async (ref) => {
                const permissionSnap = await getDoc(ref);
                return permissionSnap.exists() ? {id: permissionSnap.id, ...permissionSnap.data()} as Permission : null;
            })
        );

        return {
            id: roleSnapshot.id,
            ...data,
            permissions
        } as Role;
    } else {
        return null;
    }
};

export const addRole = async (roleData: Partial<Omit<Role, 'id' | 'permissions'>> & { permissions: string[] }) => {
    try {
        return await runTransaction(db, async (transaction) => {
            const roleDocRef = doc(rolesRef);

            const permissionRefs = roleData.permissions.map(permission =>
                doc(permissionsRef, permission)
            );

            transaction.set(roleDocRef, {...roleData, userCount: 0, permissions: permissionRefs});
            await addUserLog({
                action: `Thêm role ${roleDocRef.id}`,
                ipAddress: '192.168.1.1'
            });
            return roleDocRef.id;
        });
    } catch (error) {
        console.error("Error adding new role: ", error);
        throw error;
    }
};

export const updateRole = async (roleId: string, updateData: Partial<Omit<Role, 'id' | 'permissions' | 'userCount'>> & {
    permissions: string[]
}): Promise<void> => {
    const roleDocRef = doc(rolesRef, roleId);

    try {
        await runTransaction(db, async (transaction) => {
            const roleDoc = await transaction.get(roleDocRef);

            if (!roleDoc.exists()) {
                throw new Error("Role does not exist!");
            }

            const updatedData: any = {...updateData};

            if (updateData.permissions) {
                updatedData.permissions = updateData.permissions.map(permissionId =>
                    doc(permissionsRef, permissionId) as DocumentReference
                );
            }

            transaction.update(roleDocRef, updatedData);
        });

        await addUserLog({
            action: `Update role ${roleId}`,
            ipAddress: '192.168.1.1'
        });
        console.log("Role updated successfully");
    } catch (error) {
        console.error("Error updating role: ", error);
        throw error;
    }
};