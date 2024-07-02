"use client";
import { TrafficByDevice } from '@/components/trafficByDevice';
import TrafficByLocation from '@/components/trafficByLocation';
import Link from 'next/link';
import { motion } from "framer-motion"
import { YearlyDistribution } from '@/components/yearly-distribution';
import Counters from '@/components/counters';
import { Suspense, useEffect, useState } from 'react'
import { useToast } from '@/components/ui/use-toast';
import { GetCounterValues, GetTrafficDistributionData, GetYearlyDistribution } from '@/lib/getDashboardData';
import { CounterProps, TrafficDataProps, YearlyDistributionProps } from './props';
import { redirect } from "next/navigation";

//main 
const Dashboard = () => {
    const [authState, setAuthState] = useState<"authenticated" | "not-authenticated">("authenticated");
    const [error, setError] = useState<string | undefined>(undefined);
    const [counterData, setCounterData] = useState<CounterProps | undefined>(undefined);
    const [yearlyDistribution, setYearlyDistribution] = useState<YearlyDistributionProps>();
    const [trafficDistribution, setTrafficDistribution] = useState<TrafficDataProps>();
    const { toast } = useToast()
    async function getCounterData() {
        try {
            const response = await GetCounterValues();
            setCounterData(response);
        } catch (e: any) {
            setError(e.toString());
        }
    }


    async function getYearlyData() {
        try {
            const response = await GetYearlyDistribution();
            setYearlyDistribution(response);
        } catch (e: any) {
            setError(e.toString());
        }
    }


    async function getTrafficDistribution() {
        try {
            const response = await GetTrafficDistributionData();
            setTrafficDistribution(response);
        } catch (e: any) {
            setError(e.toString());
        }
    }

    useEffect(() => {
        // TODO: Should be done with parellel routing and loading interace. 
        getCounterData();
        getYearlyData();
        getTrafficDistribution();
    }, []);
    useEffect(() => {
        if (authState == "not-authenticated") {
            //move to main dashboard
            toast({
                title: "Not-Authenticated",
                description: "Moving to signup dashboard",
                variant: "destructive"
            });
            redirect("/signup");

        }
    }, [authState]);

    useEffect(() => {
        if (error != undefined) {
            toast({
                title: "Error Happened",
                description: error,
                variant: "destructive"
            })
        }
    }, [error]);

    return (
        <div className="p-6 flex  flex-col flex-grow max-w-6xl gap-6">
            <motion.div initial={{ opacity: 0, y: -10, x: 0, }}
                animate={{ opacity: 1, y: 0, x: 0, }}
                transition={{ duration: .75 }} className="px-2 font-semibold">Today </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: .75 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {counterData != undefined && <Counters data={counterData?.data} />}
            </motion.div>

            {yearlyDistribution != undefined && <YearlyDistribution data={yearlyDistribution?.data || []} />}
            <div className='flex flex-row gap-5'>
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: .75 }} className="gap-2 flex-grow pb-10 pt-6 pr-6 bg-[#F7F9FB] rounded-2xl text-sm items-start" style={{ height: '300px', flexBasis: '50%' }}>
                    <p className="text-sm px-7 font-semibold mb-5">Traffic by Device</p>
                    {trafficDistribution!=undefined && <TrafficByDevice data={trafficDistribution?.trafficByDevice} />}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: .75 }} className="gap-2 flex-grow pb-10 pt-6 pr-6 bg-[#F7F9FB] rounded-2xl text-sm items-start" style={{ height: '300px', flexBasis: '50%' }}>
                    <p className="text-sm px-7 font-semibold mb-5">Traffic by Location</p>
                    {trafficDistribution!=undefined && <TrafficByLocation data={trafficDistribution?.trafficByLocation} />}

                </motion.div>
            </div>
        </div>
    );
}
export default Dashboard;

