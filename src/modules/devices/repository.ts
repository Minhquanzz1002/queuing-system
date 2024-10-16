import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    orderBy,
    query,
    QueryConstraint,
    updateDoc,
    where
} from "firebase/firestore";
import {db} from "@config/firebaseConfig";
import {Device} from "@modules/devices/interface";
import {Service} from "@modules/services/interface";
import {addUserLog} from "@modules/userLogs/repository";
import store from "@core/store/redux";

const devicesRef = collection(db, 'devices');

export const getDevices = async (status?: "ACTIVE" | "INACTIVE", connected?: boolean): Promise<Device[]> => {
    const conditions: QueryConstraint[] = [
        ...(status ? [where('status', '==', status)] : []),
        ...(connected !== undefined ? [where('connected', '==', connected)] : [])
    ];

    const q = query(devicesRef, ...conditions, orderBy('code', 'asc'));

    const deviceSnapshots = await getDocs(q);
    return await Promise.all(deviceSnapshots.docs.map(async d => {
        const data = d.data();
        const serviceRefs = data.services || [];
        const services = await Promise.all(serviceRefs.map(async (serviceRef: any) => {
            const serviceDoc = await getDoc(serviceRef);
            if (!serviceDoc.exists()) {
                return null;
            }
            const serviceData = serviceDoc.data();
            if (typeof serviceData !== 'object') {
                return null;
            }
            return {id: serviceDoc.id, ...serviceData} as Service;
        }));
        return {
            id: d.id,
            ...data,
            services
        } as Device;
    }));
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
        const serviceRefs = data.services || [];
        const services = await Promise.all(serviceRefs.map(async (serviceRef: any) => {
            const serviceDoc = await getDoc(serviceRef);
            if (!serviceDoc.exists()) {
                return null;
            }
            const serviceData = serviceDoc.data();
            if (typeof serviceData !== 'object') {
                return null;
            }
            return {id: serviceDoc.id, ...serviceData} as Service;
        }));
        return {
            id: doc.id,
            ...data,
            services
        } as Device;
    } else {
        return null;
    }
};

export const addDevice = async (device: Omit<Device, 'id' | 'services'> & { services: string[] }) => {
    try {
        const deviceData = {
            ...device,
            services: device.services.map(serviceId => doc(db, 'services', serviceId))
        };
        const docRef = await addDoc(devicesRef, deviceData);
        await addUserLog({
            action: `Thêm thiết bị thiết bị ${docRef.id}`,
            ipAddress: '192.168.1.1'
        });
        return docRef.id;
    } catch (error) {
        console.error('Error adding device: ', error);
        throw new Error("Unable to add a device");
    }
};

export const updateDevice = async (id: string, updatedData: Partial<Omit<Device, 'id' | 'status' | 'connected' | 'services'>> & {
    services: string[]
}) => {
    try {
        const deviceDocRef = doc(db, 'devices', id);
        if (updatedData.services) {
            const updateServices = updatedData.services.map(serviceId => doc(db, 'services', serviceId));
            await updateDoc(deviceDocRef, {...updatedData, services: updateServices});
        } else {
            await updateDoc(deviceDocRef, updatedData);
        }

        await addUserLog({
            action: `Cập nhật thông tin thiết bị ${id}`,
            ipAddress: '192.168.1.1'
        });
        console.log('Device updated successfully');
    } catch (error) {
        console.error('Error updating device: ', error);
        throw new Error("Unable to update the device");
    }
};
