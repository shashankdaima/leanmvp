"use client";
import { TrafficByDevice } from '@/components/trafficByDevice';
import TrafficByLocation from '@/components/trafficByLocation';
import Link from 'next/link';
import { motion } from "framer-motion"
import { YearlyDistribution } from '@/components/yearly-distribution';
import CountUp from 'react-countup';

//main 
const Dashboard = () => {
    return (
        <div className="p-6 flex  flex-col flex-grow max-w-6xl gap-6">
            <motion.div initial={{ opacity: 0, y: -10,x:0,  }}
                animate={{ opacity: 1, y: 0, x:0,}}
                transition={{ duration: .75 }} className="px-2 font-semibold">Today </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: .75 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <Link href="" className="flex-grow p-5 bg-[#E3F5FF] flex flex-col rounded-2xl gap-2">
                    <p className="text-sm font-semibold">Views</p>
                    <div className="flex flex-row items-center gap-1" >
                        <CountUp className='text-3xl flex-grow font-semibold' end={721} suffix="K" />
                        <CountUp className='text-sm' end={11.02} prefix='+' suffix="%" />
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z" fill="#1C1C1C" />
                        </svg>

                    </div>

                </Link>
                <Link href="" className="flex-grow p-5 bg-[#E5ECF6] flex flex-col rounded-2xl gap-2">
                    <p className="text-sm font-semibold">Views</p>
                    <div className="flex flex-row items-center gap-1" >

                        <CountUp className='text-3xl flex-grow font-semibold' end={721} suffix="K" />
                        <CountUp className='text-sm' end={11.02} prefix='+' suffix="%" />
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z" fill="#1C1C1C" />
                        </svg>

                    </div>

                </Link>
                <Link href="" className="flex-grow p-5 bg-[#E3F5FF] flex flex-col rounded-2xl gap-2">
                    <p className="text-sm font-semibold">Views</p>
                    <div className="flex flex-row items-center gap-1" >

                        <CountUp className='text-3xl flex-grow font-semibold' end={721} suffix="K" />
                        <CountUp className='text-sm' end={11.02} prefix='+' suffix="%" />
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z" fill="#1C1C1C" />
                        </svg>

                    </div>

                </Link>
                <Link href="" className="flex-grow p-5 bg-[#E5ECF6] flex flex-col rounded-2xl gap-2">
                    <p className="text-sm font-semibold">Views</p>
                    <div className="flex flex-row items-center gap-1" >
                        <CountUp className='text-3xl flex-grow font-semibold' end={721} suffix="K" />
                        <CountUp className='text-sm' end={11.02} prefix='+' suffix="%" />
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z" fill="#1C1C1C" />
                        </svg>

                    </div>

                </Link>


            </motion.div>
            <YearlyDistribution />
            <div className='flex flex-row gap-5'>
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: .75 }} className="gap-2 flex-grow pb-10 pt-6 pr-6 bg-[#F7F9FB] rounded-2xl text-sm items-start" style={{ height: '300px', flexBasis: '50%' }}>
                    <p className="text-sm px-7 font-semibold mb-5">Traffic by Device</p>
                    <TrafficByDevice />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: .75 }} className="gap-2 flex-grow pb-10 pt-6 pr-6 bg-[#F7F9FB] rounded-2xl text-sm items-start" style={{ height: '300px', flexBasis: '50%' }}>
                    <p className="text-sm px-7 font-semibold mb-5">Traffic by Location</p>
                    <TrafficByLocation />
                </motion.div>
            </div>
        </div>
    );
}
export default Dashboard;