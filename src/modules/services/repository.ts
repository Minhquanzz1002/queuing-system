import {addDoc, collection, doc, getDocs, limit, orderBy, query, updateDoc, where} from "firebase/firestore";
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
        return docRef.id;
    } catch (error) {
        console.error('Error adding service: ', error);
        throw new Error("Unable to add a service");
    }
};

export const updateService = async (id: string, updatedData: Partial<Omit<Service, 'id' | 'status'>> & {services: string[]}) => {
    try {
        const deviceDocRef = doc(db, 'devices', id);
        if (updatedData.services) {
            const updateServices = updatedData.services.map(serviceId => doc(db, 'services', serviceId));
            await updateDoc(deviceDocRef, {...updatedData, services: updateServices});
        } else {
            await updateDoc(deviceDocRef, updatedData);
        }
        console.log('Service updated successfully');
    } catch (error) {
        console.error('Error updating service: ', error);
        throw new Error("Unable to update the service");
    }
};