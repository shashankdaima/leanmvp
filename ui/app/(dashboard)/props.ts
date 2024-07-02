
export interface CounterProps {
    data: {
        views: {
            "actualNo": string,
            "changePercentage": string
        },
        visits: {
            "actualNo": string,
            "changePercentage": string
        },
        newUsers: {
            "actualNo": string,
            "changePercentage": string
        },
        activeUsers: {
            "actualNo": string,
            "changePercentage": string
        }
    }
}
export interface YearlyDistributionProps {
    data: [
        {
            "month": string,
            "prevYearSale": number,
            "sale": number
        }
    ]
}
export interface TrafficByDeviceProp {
    device: string;
    count: number;
}

export interface TrafficByLocationProp {
    country: string;
    percentage: number;
    color: string;
}

export interface TrafficDataProps {
    trafficByDevice: TrafficByDeviceProp[];
    trafficByLocation: TrafficByLocationProp[];
}

