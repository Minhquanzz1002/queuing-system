import useClickOutside from "@shared/hook/useClickOutside";
import React, {useEffect, useRef, useState} from "react";
import dayjs from "dayjs";
import {Queue} from "@modules/queue/interface";
import {useSingleAsync} from "@shared/hook/useAsync";
import {getQueues} from "@modules/queue/repository";
import {Link} from "react-router-dom";

type CardNotificationProps = {
    name: string;
    date: Date;
}

const CardNotification = ({name, date} : CardNotificationProps) => {

    return (
        <div className="notification-card">
            <div className="notification-card__user">Người dùng: {name}</div>
            <div className="notification-card__time" title={`Thời gian nhận số: ${dayjs(date).format("HH[h]mm [ngày] DD/MM/YYYY")}`}>Thời gian nhận số: {dayjs(date).format("HH[h]mm [ngày] DD/MM/YYYY")}</div>
        </div>
    );
};

type NotificationPopupProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NotificationPopup = ({open, setOpen}: NotificationPopupProps) => {
    const ref = useRef<HTMLDivElement>(null);
    useClickOutside<HTMLDivElement>(ref, () => setOpen(false));
    const [queues, setQueues] = useState<Queue[]>([]);
    const loadQueues = useSingleAsync(getQueues);

    useEffect(() => {
        loadQueues.execute({}).then(setQueues).catch(() => setQueues([]));
    }, []);

    if (!open) return null;

    return (
        <div className="topbar__notification-popup" ref={ref}>
            <div className="topbar__notification-popup__title">Thông báo</div>
            <div className="topbar__notification-popup__content">
                {
                    queues.map((queue, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && <div className="notification-card__divider" />}
                            <Link to={`/admin/cap-so/${queue.id}`}>
                                <CardNotification name={queue.customer.name} date={queue.expiryDate} />
                            </Link>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
};

export default NotificationPopup;