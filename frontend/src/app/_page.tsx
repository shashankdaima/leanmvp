import TabLayout from '@/components/tabLayout';
import { TrafficByDevice } from '@/components/trafficByDevice';
import TrafficByLocation from '@/components/trafficByLocation';
import { DividerHorizontalIcon, DividerVerticalIcon } from '@radix-ui/react-icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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

//main 
export const Main = () => {
    return (
        <div className="p-6 flex  flex-col flex-grow max-w-6xl gap-6">
            <p className="px-2 font-semibold">Today </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="flex-grow p-5 bg-[#E3F5FF] flex flex-col rounded-2xl gap-2">
                    <p className="text-sm font-semibold">Views</p>
                    <div className="flex flex-row items-center gap-1" >
                        <p className="text-3xl flex-grow font-semibold">721K</p>
                        <p className="text-sm">+11.02%</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z" fill="#1C1C1C" />
                        </svg>

                    </div>

                </div>
                <div className="flex-grow p-5 bg-[#E5ECF6] flex flex-col rounded-2xl gap-2">
                    <p className="text-sm font-semibold">Views</p>
                    <div className="flex flex-row items-center gap-1" >

                        <p className="text-3xl flex-grow font-semibold">721K</p>
                        <p className="text-sm font-normal">+11.02%</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z" fill="#1C1C1C" />
                        </svg>

                    </div>

                </div>
                <div className="flex-grow p-5 bg-[#E3F5FF] flex flex-col rounded-2xl gap-2">
                    <p className="text-sm font-semibold">Views</p>
                    <div className="flex flex-row items-center gap-1" >

                        <p className="text-3xl flex-grow font-semibold">721K</p>
                        <p className="text-sm font-normal">+11.02%</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z" fill="#1C1C1C" />
                        </svg>

                    </div>

                </div>
                <div className="flex-grow p-5 bg-[#E5ECF6] flex flex-col rounded-2xl gap-2">
                    <p className="text-sm font-semibold">Views</p>
                    <div className="flex flex-row items-center gap-1" >
                        <p className="text-3xl flex-grow font-semibold">721K</p>
                        <p className="text-sm font-normal">+11.02%</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z" fill="#1C1C1C" />
                        </svg>

                    </div>

                </div>


            </div>
            <div className="gap-2 px-1 py-5 bg-[#F7F9FB] flex flex-col rounded-2xl gap-5 text-sm items-start" style={{ height: '360px' }}>
                <div className='px-6 pt-1 flex flex-row gap-4  text-[#CBCDCE] items-center justify-center'>
                    <a href='#' className='font-semibold text-[#1C1C1C]'>Total Users</a>
                    <a href='#' className=' hover:text-gray-400'>Total Projects</a>
                    <a href='#' className=' hover:text-gray-400'>Operating Status</a>
                    <DividerVerticalIcon height="100%" color='#CBCDCE' />
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
            </div>
            <div className='flex flex-row  gap-5'>

                <div className="gap-2  flex-grow pb-10 pt-6 pr-6  bg-[#F7F9FB]  rounded-2xl text-sm  items-start" style={{ height: '300px' }}>
                    <p className="text-sm px-7 font-semibold mb-5">Traffic by Device</p>
                    <TrafficByDevice/>
                </div>
                <div className="gap-2  flex-grow p-5 bg-[#F7F9FB]  rounded-2xl text-sm items-start" style={{ height: '300px' }}>
                    <p className="text-sm font-semibold">Traffic by Location</p>
                    <TrafficByLocation  />
                </div>
            </div>
        </div>
    );
}
