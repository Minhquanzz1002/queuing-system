import dayjs from "dayjs";

export const formatDateTime = (date: Date): string => {
    return dayjs(date).format("HH:mm - DD/MM/YYYY");
};