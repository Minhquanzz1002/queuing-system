import React from 'react';
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

interface DataPoint {
    date: string;
    revenue: number;
}

const data: DataPoint[] = [
    {date: '1', revenue: 4000},
    {date: '2', revenue: 3000},
    {date: '3', revenue: 5000},
    {date: '4', revenue: 2780},
    {date: '5', revenue: 1890},
    {date: '6', revenue: 2390},
    {date: '7', revenue: 3490},
];

type CustomActiveDotProps = {
    cx: number;
    cy: number;
    stroke: string;
    payload: DataPoint;
    value: number;
}

const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
};

const CustomActiveDot: React.FC<CustomActiveDotProps> = ({cx, cy, stroke, payload}) => {
    const value = payload.revenue;

    return (
        <g>
            {/* Label */}
            <rect x={cx - 30} y={cy - 40} width="60" height="25" rx="5" ry="5" fill="#4a90e2"/>
            <text x={cx} y={cy - 22} textAnchor="middle" fill="white" fontSize="12">
                {formatCurrency(value)}
            </text>

            {/* Connecting line */}
            <line x1={cx} y1={cy - 15} x2={cx} y2={cy - 5} stroke="#4a90e2" strokeWidth="2"/>
            <circle cx={cx} cy={cy} r={10} stroke={stroke} strokeWidth={3} fill="white"/>
            <circle cx={cx} cy={cy} r={6} stroke="none" fill={"#5185F7"}/>
        </g>
    );
};

const CustomTooltip = () => {
    return null;
};

interface CustomLabelProps {
    x?: number;
    y?: number;
    payload?: {
        value: string;
    };
}

interface CustomLabelProps {
    viewBox?: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
}

const CustomXLabel: React.FC<CustomLabelProps> = ({viewBox}) => {
    if (!viewBox) return null;

    const {y, height} = viewBox;

    return (
        <g>
            <text
                x={30}
                y={y + height + 5}
                dy={-10}
                dx={5}
                textAnchor="start"
                fill="#666"
                fontSize="12"
            >
                ngày
            </text>
        </g>
    );
};

const CustomYLabel: React.FC<CustomLabelProps> = ({viewBox}) => {
    if (!viewBox) return null;
    const {y, height} = viewBox;

    return (
        <text
            x={10}
            y={y + height + 15}
            dy={-10}
            dx={5}
            textAnchor="start"
            fill="#666"
            fontSize="12"
        >
            sl
        </text>
    );
};

const AreaChartStatistics = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} height={370} width={810} margin={{top: 50}}>
                <defs>
                    <linearGradient id="paint0_linear_3700_711" x1="0" y1="0" x2="0" y2="100%"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#CEDDFF"/>
                        <stop offset="1" stopColor="#CEDDFF" stopOpacity="0"/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeWidth={0.5} stroke="#ccc" strokeDasharray="" vertical={false}/>
                <XAxis dataKey="date" stroke="#ccc" axisLine={false} tickLine={false}
                       label={<CustomXLabel/>}
                />
                <YAxis tickLine={false} axisLine={false} label={<CustomYLabel/>} allowDecimals={false}
                       tickFormatter={(value) => formatCurrency(value)}/>
                <Tooltip content={<CustomTooltip/>}/>
                <Area type="monotone" dataKey="revenue" stroke="#5185F7" strokeWidth={2}
                      activeDot={(props) => <CustomActiveDot {...props}/>}
                      fill="url(#paint0_linear_3700_711)"/>
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default AreaChartStatistics;