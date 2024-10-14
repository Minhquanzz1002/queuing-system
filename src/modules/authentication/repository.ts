import {collection, doc, getDoc, getDocs, query, where} from "firebase/firestore";
import {db} from "@config/firebaseConfig";
import {User} from "@modules/users/interface";
import {ILoginDTO} from "@modules/authentication/interface";
import {Role} from "@modules/roles/interface";

const usersRef = collection(db, 'users');
const rolesRef = collection(db, 'roles');

const login = async (payload: ILoginDTO) => {

    const q = query(
        usersRef,
        where("username", "==", payload.username),
        where("password", "==", payload.password)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
        console.log("Không tìm thấy user hoặc thông tin đăng nhập không chính xác");
        throw new Error("Sai mật khẩu hoặc tên đăng nhập");
    }

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();
    const roleRef = userData.role;

    let role: Role | null = null;

    if (rolesRef) {
        const roleDoc = await getDoc(doc(rolesRef, roleRef.id));
        if (roleDoc.exists()) {
            role = {id: roleDoc.id, ...roleDoc.data()} as Role;
        }
    }

    return {
        id: userDoc.id,
        ...userData,
        role: role
    } as User;
};

const getProfile = async (userId: string): Promise<User | null> => {
    const userDoc = await getDoc(doc(usersRef, userId));

    if (!userDoc.exists()) {
        console.log("Không tìm thấy user với ID đã cho");
        return null;
    }

    const userData = userDoc.data();
    const roleRef = userData.role;

    let role: Role | null = null;

    if (roleRef) {
        const roleDoc = await getDoc(doc(rolesRef, roleRef.id));
        if (roleDoc.exists()) {
            role = {id: roleDoc.id, ...roleDoc.data()} as Role;
        }
    }

    return {
        id: userDoc.id,
        ...userData,
        role: role
    } as User;
};

export default {
    login,
    getProfile,
};