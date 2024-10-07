import React from 'react';
import {PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer} from "recharts";

const data = [
    { uv: 5, fill: '#ffff00' },
    { uv: 15, fill: '#83a6ed' },
    { uv: 80, fill: '#83a6ed' },
];

const SimpleRadialBarChart = () => {
    return (
        <ResponsiveContainer width={80} height={80}>
            <RadialBarChart startAngle={90} endAngle={-270}  cx="50%" cy="50%" innerRadius="50%" outerRadius="120%" data={data} barSize={4}>
                <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={1} tick={false} />
                <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={2} tick={false} />
                <RadialBar background dataKey="uv" angleAxisId={0} data={[data[0]]} />
                <RadialBar background dataKey="uv" angleAxisId={1} data={[data[1]]} />
                <RadialBar background dataKey="uv" angleAxisId={2} data={[data[2]]} />
            </RadialBarChart>
        </ResponsiveContainer>
    );
};

export default SimpleRadialBarChart;