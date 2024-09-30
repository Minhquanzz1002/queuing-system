import {collection, getDocs, limit, orderBy, query, where} from "firebase/firestore";
import {db} from "@config/firebaseConfig";
import {Service} from "@modules/services/interface";

const servicesRef = collection(db, 'services');

export const getServices = async (status?: "ACTIVE" | "INACTIVE"): Promise<Service[]> => {
    const conditions = [];
    if (status) {
        conditions.push(where('status', '==', status));
    }

    const q = query(servicesRef, ...conditions, orderBy('code', 'asc'));

    const serviceSnapshots = await getDocs(q);
    return serviceSnapshots.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            ...data
        } as Service;
    });
};

export const getServiceNames = async () => {
    const q = query(servicesRef, orderBy('code', 'asc'));

    const serviceSnapshots = await getDocs(q);
    return serviceSnapshots.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            name: data.name
        };
    });
};

export const getServiceByCode = async (code: string): Promise<Service | null> => {
    const q = query(
        servicesRef,
        where('code', '==', code),
        limit(1)
    );

    const deviceSnapshots = await getDocs(q);

    if (!deviceSnapshots.empty) {
        const doc = deviceSnapshots.docs[0];
        const data = doc.data();
        return {
            id: doc.id,
            ...data
        } as Service;
    } else {
        return null;
    }

};