import { TrafficByLocationProp } from '@/app/(dashboard)/props';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const TrafficByLocation = (props: { data: TrafficByLocationProp[] }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <ResponsiveContainer width="50%" height={200}>
                <PieChart>
                    <Pie
                        data={props.data}
                        dataKey="percentage"
                        innerRadius={55}
                        outerRadius={75}
                        fill="#82ca9d"
                        cornerRadius={'10'}
                    >
                        {props.data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="text-sm ml-8 text-gray-700">
                {props.data.map((entry, index) => (
                    <div key={`text-${index}`} className="flex items-center mb-2 text-[hsl(var(--foreground))]">
                        <span className={`inline-block h-3 w-3 rounded-full mr-2`} style={{ backgroundColor: entry.color }}></span>
                        <span className='mr-4'>{entry.country}</span>
                        <span className="ml-auto">{parseFloat(entry.percentage.toFixed(2))
                        }%</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TrafficByLocation;
