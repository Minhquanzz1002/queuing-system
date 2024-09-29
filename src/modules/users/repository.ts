import {collection, doc, getDoc, getDocs, limit, orderBy, query, where} from "firebase/firestore";
import {db} from "@config/firebaseConfig";
import {User} from "@modules/users/interface";
import {Role} from "@modules/roles/interface";

const usersRef = collection(db, 'users');
const rolesRef = collection(db, 'roles');

export const getUsers = async (): Promise<User[]> => {
    const q = query(usersRef, orderBy('name', 'asc'));

    const userSnapshots = await getDocs(q);
    return await Promise.all(userSnapshots.docs.map(async docSnapshot => {
        const data = docSnapshot.data();
        const roleRef = data.role;
        let role: Role | null = null;

        if (rolesRef) {
            const roleDoc = await getDoc(doc(rolesRef, roleRef.id));
            if (roleDoc.exists()) {
                role = {id: roleDoc.id, ...roleDoc.data()} as Role;
            }
        }

        return {
            id: docSnapshot.id,
            ...data,
            role: role,
        } as User;

    }));
};

export const getUserByUsername = async (username: string): Promise<User | null> => {
    const q = query(
        usersRef,
        where('username', '==', username),
        limit(1)
    );

    const snapshots = await getDocs(q);

    if (!snapshots.empty) {
        const snapshot = snapshots.docs[0];
        const data = snapshot.data();
        const roleRef = data.role;
        let role: Role | null = null;

        if (roleRef) {
            const roleDoc = await getDoc(doc(rolesRef, roleRef.id));
            if (roleDoc.exists()) {
                role = {id: roleDoc.id, ...roleDoc.data()} as Role;
            }
        }

        return {
            id: snapshot.id,
            ...data,
            role: role,
        } as User;
    } else {
        return null;
    }

};