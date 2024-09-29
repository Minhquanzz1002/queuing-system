import {collection, getDocs, limit, orderBy, query, where} from "firebase/firestore";
import {db} from "@config/firebaseConfig";
import {Role} from "@modules/roles/interface";

const rolesRef = collection(db, 'roles');

export const getRoles = async (): Promise<Role[]> => {
    const q = query(rolesRef, orderBy('name', 'asc'));

    const roleSnapshots = await getDocs(q);
    return roleSnapshots.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            ...data
        } as Role;
    });
};

export const getRoleByCode = async (code: string): Promise<Role | null> => {
    const q = query(
        rolesRef,
        where('code', '==', code),
        limit(1)
    );

    const roleSnapshots = await getDocs(q);

    if (!roleSnapshots.empty) {
        const doc = roleSnapshots.docs[0];
        const data = doc.data();
        return {
            id: doc.id,
            ...data
        } as Role;
    } else {
        return null;
    }

};