import React, {useCallback} from 'react';

type ProgressDatasets = {
    data: number[];
    colors: [string, string] | [string, string, string];
};

type ProgressCircleProps = {
    size: number;
    datasets: ProgressDatasets;
};

const ProgressCircle = ({size, datasets}: ProgressCircleProps) => {
    const strokeWidth = 2;
    const cx = size / 2;
    const cy = size / 2;
    const {data, colors} = datasets;

    const renderProgressCircle = useCallback((progress: number, color: string, index: number) => {
        const radius = (size / 2) - strokeWidth - (index * 5);
        const strokeDasharray = 2 * Math.PI * radius;
        const strokeDashoffset = strokeDasharray * ((100 - progress) / 100);

        return (
            <React.Fragment key={index}>
                <circle r={radius} cx={cx} cy={cy} fill="transparent" stroke="#EAEAEC"
                        strokeWidth={strokeWidth}></circle>
                <circle r={radius} cx={cx} cy={cy} fill="transparent" stroke={color} strokeLinecap="round"
                        strokeWidth={strokeWidth} strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}></circle>
            </React.Fragment>
        );

    }, [size, cx, cy, strokeWidth]);

    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{transform: 'rotate(-90deg)'}}>
            {data.map((progress, index) => renderProgressCircle(progress, colors[index], index))}
        </svg>
    );
};

export default ProgressCircle;