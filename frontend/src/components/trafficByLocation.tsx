import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data02 = [
    {
        "country": "United States",
        "percentage": 38.6,
        "color": "#1C1C1C"
    },
    {
        "country": "Canada",
        "percentage": 22.5,
        "color": "#BAEDBD"
    },
    {
        "country": "Mexico",
        "percentage": 30.8,
        "color": "#95A4FC"
    },
    {
        "country": "Other",
        "percentage": 8.1,
        "color": "#B1E3FF"
    }
];

const TrafficByLocation = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <ResponsiveContainer width="50%" height={200}>
                <PieChart>
                    <Pie
                        data={data02}
                        dataKey="percentage"
                        innerRadius={55}
                        outerRadius={75}
                        fill="#82ca9d"
                        cornerRadius={'10'}
                    >
                        {data02.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="text-sm ml-8 text-gray-700">
                {data02.map((entry, index) => (
                    <div key={`text-${index}`} className="flex items-center mb-2">
                        <span className={`inline-block h-3 w-3 rounded-full mr-2`} style={{ backgroundColor: entry.color }}></span>
                        <span className='mr-4'>{entry.country}</span>
                        <span className="ml-auto">{entry.percentage}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TrafficByLocation;
