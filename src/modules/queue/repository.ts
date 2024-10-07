import {addDoc, collection, doc, getDoc, getDocs, query, QueryConstraint, where} from "firebase/firestore";
import {Service} from "@modules/services/interface";
import {db} from "@config/firebaseConfig";
import {Customer, Queue} from "@modules/queue/interface";
import dayjs from "dayjs";

const queuesRef = collection(db, 'queues');
const servicesRef = collection(db, 'services');

interface IGetQueuesParams {
    status?: 'USED' | 'WAITING' | 'SKIPPED';
    issueSource?: string;
    serviceId?: string;
    startDate?: Date;
    endDate?: Date;
}

export const getQueues = async ({
                                    status,
                                    issueSource,
                                    serviceId,
                                    startDate,
                                    endDate
                                }: IGetQueuesParams): Promise<Queue[]> => {
    const conditions: QueryConstraint[] = [
        ...(status ? [where('status', '==', status)] : []),
        ...(issueSource ? [where('issueSource', '==', issueSource)] : []),
        ...(serviceId ? [where('service', '==', doc(servicesRef, serviceId))] : []),
        ...(startDate ? [where('issueTime', '>=', startDate)] : []),
        ...(endDate ? [where('issueTime', '<=', endDate)] : []),
    ];

    const q = query(queuesRef, ...conditions);

    const queueSnapshots = await getDocs(q);
    return await Promise.all(queueSnapshots.docs.map(async d => {
        const {issueTime, expiryDate, ...data} = d.data();
        const serviceDoc = await getDoc(data.service);
        const serviceData = serviceDoc.data();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const service = {id: serviceDoc.id, ...serviceData} as Service;

        return {
            id: d.id,
            ...data,
            issueTime: issueTime.toDate(),
            expiryDate: expiryDate.toDate(),
            service
        } as Queue;
    }));
};

export const getQueueById = async (id: string): Promise<Queue | null> => {
    const queueDoc = await getDoc(doc(queuesRef, id));
    if (!queueDoc.exists()) {
        return null;
    }

    const {issueTime, expiryDate, ...data} = queueDoc.data();
    const serviceDoc = await getDoc(data.service);
    const serviceData = serviceDoc.data();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const service = {id: serviceDoc.id, ...serviceData} as Service;

    return {
        id: queueDoc.id,
        ...data,
        issueTime: issueTime.toDate(),
        expiryDate: expiryDate.toDate(),
        service
    } as Queue;
};

const generateSerialNumber = async (service: Service) => {
    let code = '';
    if (service.usePrefix && service.prefix) {
        code += service.prefix;
    }

    code += '0001';

    if (service.useSuffix && service.suffix) {
        code += service.suffix;
    }
    return code;
};

export const addQueue = async (queue: {service: Service, customer: Customer, issueSource: string}) : Promise<Queue> => {
    try {
        const now = dayjs();
        const endOfDay = now.endOf('day');

        const serialNumber = await generateSerialNumber(queue.service);

        const queueData = {
            serialNumber,
            customer: queue.customer,
            status: 'WAITING',
            issueTime: now.toDate(),
            issueSource: queue.issueSource,
            expiryDate: endOfDay.toDate(),
            service: doc(db, 'services', queue.service.id)
        };
        const docRef = await addDoc(queuesRef, queueData);
        const newQueueData = (await getDoc(docRef)).data();

        if (!newQueueData) {
            throw new Error('Unable to add a queue');
        }

        return {
            id: docRef.id,
            serialNumber: newQueueData.serialNumber,
            customer: newQueueData.customer,
            status: newQueueData.status,
            issueTime: newQueueData.issueTime.toDate(),
            expiryDate: newQueueData.expiryDate.toDate(),
            service: queue.service,
            issueSource: newQueueData.issueSource
        } as Queue;
    } catch (error) {
        console.error('Error adding device: ', error);
        throw new Error("Unable to add a device");
    }
};

