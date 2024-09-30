import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {db} from "@config/firebaseConfig";
import {UserLog} from "@modules/userLogs/interface";

const userLogsRef = collection(db, 'user_logs');

export const getUserLogs = async (): Promise<UserLog[]> => {
    const q = query(userLogsRef, orderBy('actionTime', 'asc'));

    const snapshots = await getDocs(q);
    return snapshots.docs.map(doc => {
        const {actionTime, ...data} = doc.data();
        return {
            id: doc.id,
            actionTime: actionTime.toDate(),
            ...data
        } as UserLog;
    });
};