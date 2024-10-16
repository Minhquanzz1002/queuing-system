import {addDoc, collection, doc, getDocs, limit, orderBy, query, updateDoc, where} from "firebase/firestore";
import {db} from "@config/firebaseConfig";
import {Service} from "@modules/services/interface";
import {addUserLog} from "@modules/userLogs/repository";

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

export const addService = async (service: Omit<Service, 'id'>) => {
    console.log(service);
    try {
        const docRef = await addDoc(servicesRef, service);
        await addUserLog({
            action: `Thêm dịch vụ ${docRef.id}`,
            ipAddress: '192.168.1.1'
        });
        return docRef.id;
    } catch (error) {
        console.error('Error adding service: ', error);
        throw new Error("Unable to add a service");
    }
};

export const updateService = async (id: string, updatedData: Partial<Omit<Service, 'id' | 'status'>>) => {
    try {
        const serviceRef = doc(servicesRef, id);
        await updateDoc(serviceRef, updatedData);
        await addUserLog({
            action: `Cập nhật dịch vụ ${id}`,
            ipAddress: '192.168.1.1'
        });
        console.log('Service updated successfully');
    } catch (error) {
        console.error('Error updating service: ', error);
        throw new Error("Unable to update the service");
    }
};