import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import TabLayout from "./tabLayout";
const generateData = () => {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const data = months.map(month => {
        // Generate base sales and previous year sales
        let baseSale = getRandomInt(10000, 20000);
        let basePrevYearSale = baseSale - getRandomInt(1000, 3000); // Previous year sale slightly lower

        // Simulate fluctuations with a random factor
        let saleFluctuation = getRandomInt(-2000, 2000); // Random fluctuation up to +/- 2000
        let prevYearFluctuation = getRandomInt(-1500, 1500); // Random fluctuation up to +/- 1500

        // Apply fluctuations to base sales
        let sale = baseSale + saleFluctuation;
        let prevYearSale = basePrevYearSale + prevYearFluctuation;

        return {
            month: month,
            sale: Math.max(0, sale),               // Ensure sale is non-negative
            prevYearSale: Math.max(0, prevYearSale) // Ensure prevYearSale is non-negative
        };
    });

    return data;
};
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


// Function to generate random integer within a range
const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Example usage:
const data = generateData();

export const YearlyDistribution = () => {
    return (<motion.div
        initial={{ opacity: 0, y: 10, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: .75 }}
        className="gap-2 px-1 py-5 bg-[#F7F9FB] flex flex-col rounded-2xl gap-5 text-sm items-start" style={{ height: '360px' }}>
        <div className='px-6 pt-1 flex flex-row gap-4  text-[#CBCDCE] items-center justify-center'>
            <a href='#' className='font-semibold text-[#1C1C1C]'>Total Users</a>
            <a href='#' className=' hover:text-gray-400'>Total Projects</a>
            <a href='#' className=' hover:text-gray-400'>Operating Status</a>
            {/* <DividerVerticalIcon height="100%" color='#CBCDCE' /> */}
            <div className="flex items-center gap-2 text-[#1C1C1C] text-sm">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="#1C1C1C" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="5" />
                </svg>
                This Year
            </div>
            <div className="flex items-center gap-2 text-[#1C1C1C] text-sm">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="#A8C5DA" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="5" />
                </svg>
                Last Year
            </div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                }}
            >
                <CartesianGrid vertical={false} stroke='#ECEEF0' />
                <XAxis dataKey="month" stroke='#9FA1A2' />
                <YAxis tickFormatter={DataFormater} axisLine={false} stroke='#9FA1A2' />

                <Tooltip />
                <Line type="monotone" dataKey="prevYearSale" stroke="#A8C5DA" strokeWidth={3} />
                <Line type="monotone" dataKey="sale" stroke="#1C1C1C" strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
        <TabLayout className='px-6' />
    </motion.div>);
}