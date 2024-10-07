import React, {useRef, useState} from 'react';
import {Flex, Input} from "antd";
import {IconCalendarDays, IconChevronRight} from "@assets/icons";
import "./styles.scss";
import useClickOutside from "@shared/hook/useClickOutside";
import dayjs, {Dayjs} from "dayjs";

const Separator: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" viewBox="0 0 6 8" fill="none">
        <path
            d="M5.51129 3.13807L3.96467 2.01241L1.44455 0.178209C0.910697 -0.20463 0 0.0696425 0 0.618188V4.17802V7.38359C0 7.93213 0.910697 8.20641 1.44455 7.81785L5.51129 4.85799C6.1629 4.38944 6.1629 3.61233 5.51129 3.13807Z"
            fill="#535261"/>
    </svg>
);

type RangePickerProps = {
    start: Dayjs | null;
    end: Dayjs | null;
    onChange: (start: Dayjs | null, end: Dayjs | null) => void;
};

const RangePicker = ({start, end, onChange}: RangePickerProps) => {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());

    const calendarRef = useRef<HTMLDivElement>(null);
    useClickOutside<HTMLDivElement>(calendarRef, () => setIsCalendarOpen(false));

    const handlePrevMonth = () => {
        setCurrentDate(currentDate.subtract(1, 'month'));
    };

    const handleNextMonth = () => {
        setCurrentDate(currentDate.add(1, 'month'));
    };

    const handleInputClick = () => {
        setIsCalendarOpen(!isCalendarOpen);
    };

    const handleDateClick = (date: Dayjs) => {
        if (!start || (start && end)) {
            onChange(date, null);
        } else if (date.isBefore(start)) {
            onChange(date, start);
        } else {
            onChange(start, date);
        }
    };

    const generateDays = () => {
        const startOfMonth = currentDate.startOf('month');
        const endOfMonth = currentDate.endOf('month');
        const daysInMonth = [];

        const startDayOfWeek = startOfMonth.day();
        const daysFromPrevMonth = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

        const prevMonth = startOfMonth.subtract(1, 'month');
        for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
            daysInMonth.push({
                date: prevMonth.endOf('month').subtract(i, 'day'),
                currentMonth: false,
            });
        }

        for (let day = 1; day <= endOfMonth.date(); day++) {
            const date = startOfMonth.date(day);
            daysInMonth.push({
                date: date,
                currentMonth: true,
            });
        }

        const daysFromNextMonth = 42 - daysInMonth.length;
        const nextMonth = endOfMonth.add(1, 'day');
        for (let i = 1; i <= daysFromNextMonth; i++) {
            daysInMonth.push({
                date: nextMonth.date(i),
                currentMonth: false,
            });
        }

        return daysInMonth.map(day => ({
            ...day,
            isStart: start && day.date.isSame(start, 'day'),
            isEnd: end && day.date.isSame(end, 'day'),
            isInRange: start && end && day.date.isBetween(start, end, 'day', '[]')
        }));
    };

    return (
        <Flex gap="small" align="center" className="range-picker">
            <Input size="large"
                   prefix={<IconCalendarDays style={{color: '#FF7506'}}/>}
                   placeholder="DD/MM/YYYY"
                   value={start ? start.format("DD/MM/YYYY") : ''}
                   readOnly
                   onClick={handleInputClick}
            />
            <Separator/>
            <Input size="large"
                   prefix={<IconCalendarDays style={{color: '#FF7506'}}/>}
                   placeholder="DD/MM/YYYY"
                   value={end ? end.format("DD/MM/YYYY") : ''}
                   readOnly
                   onClick={handleInputClick}
            />

            {
                isCalendarOpen && (
                    <div className="range-picker__calendar" ref={calendarRef}>
                        <Flex justify="space-between" align="center" className="range-picker__calendar-header">
                            <button onClick={handlePrevMonth}><IconChevronRight/></button>
                            <div>{currentDate.format("MMMM YYYY")}</div>
                            <button onClick={handleNextMonth}><IconChevronRight/></button>
                        </Flex>
                        <div className="range-picker__calendar-divider"/>
                        <div className="range-picker__calendar-weekdays">
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                                <Flex justify="center" align="center" key={day} className="calendar__day-name">{day}</Flex>
                            ))}
                        </div>
                        <div className="range-picker__calendar-body">
                            {generateDays().map(({date, currentMonth, isStart, isEnd, isInRange}, index) => (
                                <Flex align="center" justify="center"
                                      key={index}
                                      onClick={() => handleDateClick(date)}
                                      className={`range-picker__calendar-day ${currentMonth ? 'range-picker__calendar-day--current' : 'range-picker__calendar-day--other-month'} ${isStart ? 'range-picker__calendar-day--start' : ''} ${isEnd ? 'range-picker__calendar-day--end' : ''} ${isInRange ? 'range-picker__calendar-day--in-range' : ''}`}
                                >
                                    {date.format("DD")}
                                </Flex>
                            ))}
                        </div>
                    </div>
                )
            }
        </Flex>
    );
};

export default RangePicker;