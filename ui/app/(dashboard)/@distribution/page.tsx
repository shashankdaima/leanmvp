"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CounterProps, YearlyDistributionProps } from "../props";
import { Skeleton } from "@/components/ui/skeleton";
import { GetCounterValues, GetYearlyDistribution } from "@/lib/getDashboardData";
import useErrorStore from "@/lib/dashboardErrorHook";
import CountUp from "react-countup";
import Link from "next/link";
import TabLayout from "@/components/tabLayout";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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


export default function Distribution() {
    const [data, setData] = useState<any>();
    const { setErrorMessage } = useErrorStore();
    const getData = async () => {
        try {
            const response = await GetYearlyDistribution();
            // console.log(response);
            if (response.code == 200) {
                // console.log(response.data);
                setData(response.data);
            }
        }
        catch (e: any) {
            // console.log(e);
            setErrorMessage(e.toString())
        }
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        !data ? <Skeleton className="flex-grow p-5 flex flex-col rounded-2xl h-80 gap-2" />
            :
            <>
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: .75 }}
                    className="px-1 py-5 bg-[hsl(var(--secondary))] flex flex-col rounded-2xl gap-5 text-sm items-start" style={{ height: '360px' }}>
                    <div className='px-6 pt-1 flex flex-row gap-4  text-[#CBCDCE] items-center justify-center'>
                        <a href='#' className='font-semibold text-[hsl(var(--foreground))]'>Total Users</a>
                        <a href='#' className='hidden md:block  hover:text-gray-400'>Total Projects</a>
                        <a href='#' className='hidden md:block hover:text-gray-400'>Operating Status</a>
                        {/* <DividerVerticalIcon height="100%" color='#CBCDCE' /> */}
                        <div className="flex items-center gap-2 text-[hsl(var(--foreground))] text-sm">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="hsl(var(--foreground))" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="5" />
                            </svg>
                            This Year
                        </div>
                        <div className="flex items-center gap-2 text-[hsl(var(--foreground))] text-sm">
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
                            <Line type="monotone" dataKey="sale" stroke="hsl(var(--foreground))" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                    <TabLayout className='px-6' />
                </motion.div>
            </>


    );
}