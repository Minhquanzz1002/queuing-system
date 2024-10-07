import {collection, getDocs, orderBy, query, Timestamp, where} from "firebase/firestore";
import {db} from "@config/firebaseConfig";
import {UserLog} from "@modules/userLogs/interface";

const userLogsRef = collection(db, 'user_logs');

export const getUserLogs = async (startDate?: Date, endDate?: Date): Promise<UserLog[]> => {
    const conditions = [];
    if (startDate) {
        conditions.push(where('actionTime', '>=', Timestamp.fromDate(startDate)));
    }
    if (endDate) {
        conditions.push(where('actionTime', '<=', Timestamp.fromDate(endDate)));
    }

    const q = query(userLogsRef, ...conditions, orderBy('actionTime', 'asc'));

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