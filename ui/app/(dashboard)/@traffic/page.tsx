"use client";

import { TrafficByDevice } from "@/components/trafficByDevice";
import TrafficByLocation from "@/components/trafficByLocation";
import { Skeleton } from "@/components/ui/skeleton";
import useErrorStore from "@/lib/dashboardErrorHook";
import { GetTrafficDistributionData } from "@/lib/getDashboardData";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function traffic() {
    const [data, setData] = useState<any>();
    const { setErrorMessage } = useErrorStore();
    const getData = async () => {
        try {
            const response = await GetTrafficDistributionData();
            // console.log(response);
            if (response.code == 200) {
                // console.log(response.data);
                setData(response.responseBody);
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
        (!data)?
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[120px]">
            <Skeleton className="flex-grow p-5 flex flex-col rounded-2xl h-full gap-2" />
            <Skeleton className="flex-grow p-5 flex flex-col rounded-2xl h-full gap-2" />
        </div>
        :
        <div className='flex flex-col lg:flex-row gap-5'>
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: .75 }} className="gap-2 flex-grow pb-10 pt-6 pr-6 bg-[#F7F9FB] rounded-2xl text-sm items-start" style={{ height: '300px', flexBasis: '50%' }}>
            <p className="text-sm px-7 font-semibold mb-5">Traffic by Device</p>
            {<TrafficByDevice data={data.trafficByDevice} />}
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: .75 }} className="gap-2 flex-grow pb-10 pt-6 pr-6 bg-[#F7F9FB] rounded-2xl text-sm items-start" style={{ height: '300px', flexBasis: '50%' }}>
            <p className="text-sm px-7 font-semibold mb-5">Traffic by Location</p>
            { <TrafficByLocation data={data?.trafficByLocation} />}

        </motion.div>
    </div>
    );
}