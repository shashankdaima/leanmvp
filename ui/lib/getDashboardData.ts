import { CounterProps, TrafficDataProps, YearlyDistributionProps } from "@/app/(dashboard)/props";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
export const GetCounterValues = async () => {
    const response = await fetch(`${backendUrl}/static-info`, {
        method: 'GET',
        credentials: 'include',
    });
    const responseBody = await response.json();
    return { data: responseBody } as CounterProps;
}
export const GetYearlyDistribution = async () => {
    const response = await fetch(`${backendUrl}/yearly-data`, {
        method: 'GET',
        credentials: 'include',
    });
    const responseBody = await response.json();
    return { data: responseBody } as YearlyDistributionProps;
}
export const GetTrafficDistributionData = async () => {
    const response = await fetch(`${backendUrl}/traffic-distribution`, {
        method: 'GET',
        credentials: 'include',
    });
    const responseBody = await response.json();
    return responseBody as TrafficDataProps;
}