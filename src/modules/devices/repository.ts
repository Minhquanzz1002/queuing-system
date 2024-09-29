import {addDoc, collection, getDocs, limit, orderBy, query, where, updateDoc, doc} from "firebase/firestore";
import {db} from "@config/firebaseConfig";
import {Device} from "@modules/devices/interface";

const devicesRef = collection(db, 'devices');

export const getDevices = async (): Promise<Device[]> => {
    const q = query(devicesRef, orderBy('code', 'asc'));

    const deviceSnapshots = await getDocs(q);
    return deviceSnapshots.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            ...data
        } as Device;
    });
};

export const getDeviceByCode = async (code: string): Promise<Device | null> => {
    const q = query(
        devicesRef,
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
        } as Device;
    } else {
        return null;
    }

};

export const addDevice = async (device: Omit<Device, 'id'>) => {
    try {
        const docRef = await addDoc(devicesRef, device);
        return docRef.id;
    } catch (error) {
        console.error('Error adding device: ', error);
        throw new Error("Unable to add a device");
    }
};

export const updateDevice = async (id: string, updatedData: Partial<Omit<Device, 'id' | 'status' | 'connected'>>) => {
    try {
        const deviceDocRef = doc(db, 'devices', id);
        await updateDoc(deviceDocRef, updatedData);
        console.log('Device updated successfully');
    } catch (error) {
        console.error('Error updating device: ', error);
        throw new Error("Unable to update the device");
    }
};