import React, {useState} from 'react';
import dayjs, {Dayjs} from "dayjs";
import {Flex} from "antd";
import "./styles.scss";
import {IconChevronRight} from "@assets/icons";

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());

    const handlePrevMonth = () => {
        setCurrentDate(currentDate.subtract(1, 'month'));
    };

    const handleNextMonth = () => {
        setCurrentDate(currentDate.add(1, 'month'));
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
                day: prevMonth.endOf('month').subtract(i, 'day').format('DD'),
                currentMonth: false,
                isToday: false
            });
        }

        for (let day = 1; day <= endOfMonth.date(); day++) {
            const date = startOfMonth.date(day);
            daysInMonth.push({
                day: date.format('DD'),
                currentMonth: true,
                isToday: date.isSame(dayjs(), 'day')
            });
        }

        const daysFromNextMonth = 42 - daysInMonth.length;
        const nextMonth = endOfMonth.add(1, 'day');
        for (let i = 1; i <= daysFromNextMonth; i++) {
            daysInMonth.push({
                day: nextMonth.date(i).format('DD'),
                currentMonth: false,
                isToday: false
            });
        }

        return daysInMonth;
    };

    return (
        <div className="calendar">
            <Flex align="center" justify="space-between" className="calendar__header">
                <button onClick={handlePrevMonth}><IconChevronRight/></button>
                <div>{currentDate.format("MMMM YYYY")}</div>
                <button onClick={handleNextMonth}><IconChevronRight/></button>
            </Flex>
            <div className="calendar__divider"/>
            <div className="calendar__grid" style={{marginTop: '0.8rem'}}>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <Flex justify="center" align="center" key={day} className="calendar__day-name">{day}</Flex>
                ))}
            </div>
            <div className="calendar__grid">
                {generateDays().map(({day, currentMonth, isToday}, index) => (
                    <Flex align="center" justify="center"
                          key={index}
                          className={`calendar__day ${currentMonth ? 'calendar__day--current' : 'calendar__day--other-month'} ${isToday && 'calendar__day--today'}`}
                    >
                        {day}
                    </Flex>
                ))}
            </div>
        </div>
    );
};

export default Calendar;