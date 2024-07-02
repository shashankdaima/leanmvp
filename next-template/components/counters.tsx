import { CounterProps } from "@/app/(dashboard)/props";
import Link from "next/link";
import CountUp from "react-countup";

const Counters = (props: CounterProps) => {
    return (
        <>
            <Link href="" className="flex-grow p-5 bg-[#E3F5FF] flex flex-col rounded-2xl gap-2">
                <p className="text-sm font-semibold">Views</p>
                <div className="flex flex-row items-center gap-1" >
                    <CountUp className='text-3xl flex-grow font-semibold' end={parseInt(props.data.views.actualNo) / 1000} suffix="K" />
                    <CountUp className='text-sm' end={parseFloat(props.data.views.changePercentage)} suffix="%" />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z" fill="#1C1C1C" />
                    </svg>

                </div>

            </Link>
            <Link href="" className="flex-grow p-5 bg-[#E5ECF6] flex flex-col rounded-2xl gap-2">
                <p className="text-sm font-semibold">Visits</p>
                <div className="flex flex-row items-center gap-1" >

                    <CountUp className='text-3xl flex-grow font-semibold' end={parseInt(props.data.visits.actualNo) / 1000} suffix="K" />
                    <CountUp className='text-sm' end={parseFloat(props.data.visits.changePercentage)} suffix="%" />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z" fill="#1C1C1C" />
                    </svg>

                </div>

            </Link>
            <Link href="" className="flex-grow p-5 bg-[#E3F5FF] flex flex-col rounded-2xl gap-2">
                <p className="text-sm font-semibold">New Users</p>
                <div className="flex flex-row items-center gap-1" >
                    <CountUp className='text-3xl flex-grow font-semibold' end={parseInt(props.data.newUsers.actualNo) / 1000} suffix="K" />
                    <CountUp className='text-sm' end={parseFloat(props.data.newUsers.changePercentage)} suffix="%" />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z" fill="#1C1C1C" />
                    </svg>

                </div>

            </Link>
            <Link href="" className="flex-grow p-5 bg-[#E5ECF6] flex flex-col rounded-2xl gap-2">
                <p className="text-sm font-semibold">Active Users</p>
                <div className="flex flex-row items-center gap-1" >

                    <CountUp className='text-3xl flex-grow font-semibold' end={parseInt(props.data.activeUsers.actualNo) / 1000} suffix="K" />
                    <CountUp className='text-sm' end={parseFloat(props.data.activeUsers.changePercentage)} suffix="%" />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z" fill="#1C1C1C" />
                    </svg>

                </div>

            </Link>


        </>
    );
}
export default Counters;