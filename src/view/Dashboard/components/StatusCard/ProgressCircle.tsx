import React from 'react';

type ProgressCircleProps = {
    size: number;
    progressColor?: string;
    progress: number;
}

const ProgressCircle = ({size, progress}: ProgressCircleProps) => {
    const strokeWidth = 2;
    const radius = (size / 2) - strokeWidth;
    const cx = size / 2;
    const cy = size / 2;
    const strokeDasharray = 2 * Math.PI * radius;
    const strokeDashoffset = strokeDasharray * ((100 - progress) / 100);

    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{transform: 'rotate(-90deg)'}}>
            <circle r={radius} cx={cx} cy={cy} fill="transparent" stroke="#EAEAEC" strokeWidth={strokeWidth}></circle>
            <circle r={radius} cx={cx} cy={cy} fill="transparent" stroke="currentColor" strokeLinecap="round"
                    strokeWidth={strokeWidth} strokeDasharray={strokeDasharray} strokeDashoffset={strokeDashoffset}></circle>
        </svg>
    );
};

export default ProgressCircle;