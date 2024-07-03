
import { TrafficByDeviceProp } from '@/app/(dashboard)/props';
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Cell } from 'recharts';
// const deviceData = [
//     { device: "linux", count: 50000000 },
//     { device: "windows", count: 40000000 },
//     { device: "mac", count: 30000000 },
//     { device: "android", count: 70000000 },
//     { device: "ios", count: 60000000 },
//     { device: "other", count: 20000000 }
// ];
const DataFormater = (number: number) => {
    if (number > 1000000000) {
        return (number / 1000000000).toString() + 'B';
    } else if (number > 1000000) {
        return (number / 1000000).toString() + 'M';
    } else if (number > 1000) {
        return (number / 1000).toString() + 'K';
    } else {
        return number.toString();
    }
}

//main 
// if
const colors = ["#95A4FC", "#BAEDBD", "hsl(var(--foreground))", "#B1E3FF", "#A8C5DA", "#A1E3CB"];


export const TrafficByDevice = (props: { data: TrafficByDeviceProp[] }) => {
    return (<ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={props.data}>
            <CartesianGrid vertical={false} stroke='#ECEEF0' />
            <XAxis dataKey="device" stroke='#9FA1A2' />
            <YAxis tickFormatter={DataFormater} axisLine={false} stroke='#9FA1A2' />
            <Bar className='mx-16' dataKey="count" fill="#8884d8" barSize={25} radius={[8, 8, 0, 0]} >
                {props.data.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)}
            </Bar>
        </BarChart>
    </ResponsiveContainer>);
}