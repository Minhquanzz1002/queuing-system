import {DatePicker, DatePickerProps, Flex} from "antd";
import {IconCalendarDays} from "@assets/icons";
import dayjs from "dayjs";
import React, {useEffect, useState} from "react";

interface DateRangePickerProps {
    // eslint-disable-next-line no-unused-vars
    onChangeStartDate: (date?: Date) => void;
    // eslint-disable-next-line no-unused-vars
    onChangeEndDate: (date?: Date) => void;
    startDate?: Date;
    endDate?: Date;
}

const DateRangePicker = (props: DateRangePickerProps) => {
    const dateFormat = 'DD/MM/YYYY';
    const [startDate, setStartDate] = useState<dayjs.Dayjs | undefined>(dayjs(props.startDate));
    const [endDate, setEndDate] = useState<dayjs.Dayjs | undefined>(dayjs(props.endDate));

    useEffect(() => {
        setStartDate(props.startDate ? dayjs(props.startDate) : undefined);
    }, [props.startDate]);

    useEffect(() => {
        setEndDate(props.endDate ? dayjs(props.endDate) : undefined);
    }, [props.endDate]);

    const onChangeStartDate: DatePickerProps['onChange'] = (date) => {
        props.onChangeStartDate(date?.toDate());
    };

    const onChangeEndDate: DatePickerProps['onChange'] = (date) => {
        props.onChangeEndDate(date?.toDate());
    };

    return (
        <Flex gap="small" align="center">
            <DatePicker size="large" format={dateFormat} placeholder="DD/MM/YYYY"
                        value={startDate}
                        defaultValue={props.startDate && dayjs(props.startDate)}
                        suffixIcon={<IconCalendarDays style={{color: '#FF7506'}}/>} onChange={onChangeStartDate}/>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" viewBox="0 0 6 8" fill="none">
                <path
                    d="M5.51129 3.13807L3.96467 2.01241L1.44455 0.178209C0.910697 -0.20463 0 0.0696425 0 0.618188V4.17802V7.38359C0 7.93213 0.910697 8.20641 1.44455 7.81785L5.51129 4.85799C6.1629 4.38944 6.1629 3.61233 5.51129 3.13807Z"
                    fill="#0054A6"/>
            </svg>
            <DatePicker size="large" onChange={onChangeEndDate} defaultValue={props.endDate && dayjs(props.endDate)} value={endDate}
                        format={dateFormat} placeholder="DD/MM/YYYY" suffixIcon={<IconCalendarDays style={{color: '#FF7506'}}/>}/>
        </Flex>
    );
};

export default DateRangePicker;