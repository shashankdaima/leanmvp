import CollapsibleNavGroup from "../ui/collapsibleNavGroup";
import { Toggle } from "../ui/toggle";

export const LeftPanel = () => {
    const DashboardNavItems = [
        {
            title: 'Dashboard',
            items: ['Overview', 'Analytics', 'Reports'],
        },
        {
            title: 'Users',
            items: ['Manage Users', 'User Roles', 'Permissions'],
        }
        // Add more nav items as needed
    ];
    const PagesNavItems = [

        {
            title: 'User Profile',
            items: ['Overview', 'Projects', 'Campaigns', "Documents", "Followers"],
        },
        {
            title: 'Account',
            items: ['Manage Users', 'User Roles', 'Permissions'],
        },
        // Add more nav items as needed
    ];

    return (
        <div className="menu !px-2 flex flex-col space-y-4">
            <div className="pl-3  flex flex-row items-center space-x-3 pb-3">
                <div className="h-8 w-8 flex justify-center items-center object-cover rounded-full" style={{ backgroundImage: "url(/profile.png)" }} />
                <p className="text-sm">ByeWind</p>
            </div>
            <div className="px-3  flex flex-row items-center space-x-4 text-sm">
                <p className=" text-[#A4a4a4]">Favorites</p>
                <p className=" text-[#d2d2d2]">Recently</p>
            </div>
            <ul className="px-2  space-y-3 text-sm ">
                <li className="text-gray-600 flex flex-row gap-2 hover:text-gray-800 cursor-pointer transition-colors">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="#1C1C1C" fillOpacity="0.2" />
                    </svg>

                    Overview
                </li>

                <li className="text-gray-600 flex flex-row gap-2 hover:text-gray-800 cursor-pointer transition-colors">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="#1C1C1C" fillOpacity="0.2" />
                    </svg>

                    Projects
                </li>
            </ul>
            <div className="flex flex-col space-y-2 text-sm">
                <p className="px-4 text-[#A4a4a4]">Dashboards</p>
                <button
                    className="flex flex-row items-center space-x-1 w-full pl-7 pr-2 py-2 text-left text-gray-700 hover:bg-gray-200 !rounded"
                >
                    <div className="flex flex-row flex-grow justify-start space-x-1">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.81261 9.09609C7.90765 9.04123 7.98656 8.96231 8.04142 8.86727C8.09627 8.77223 8.12514 8.66442 8.12511 8.55469V2.92969C8.12456 2.83004 8.10018 2.73198 8.05402 2.64367C8.00786 2.55536 7.94126 2.47936 7.85976 2.42202C7.77826 2.36469 7.68424 2.32766 7.58553 2.31405C7.48681 2.30043 7.38628 2.31062 7.2923 2.34375C5.46807 2.98939 3.93396 4.26457 2.96575 5.94005C1.99755 7.61554 1.65875 9.58145 2.01027 11.4844C2.02849 11.5828 2.07008 11.6754 2.13153 11.7544C2.19298 11.8333 2.27249 11.8964 2.3634 11.9383C2.44531 11.9766 2.53468 11.9963 2.62511 11.9961C2.73481 11.9961 2.84259 11.9673 2.93761 11.9125L7.81261 9.09609ZM6.87511 3.87656V8.19375L3.13449 10.3523C3.12511 10.2344 3.12511 10.1156 3.12511 10C3.12622 8.73309 3.4769 7.49106 4.13855 6.41066C4.80019 5.33025 5.74713 4.45337 6.87511 3.87656ZM18.1251 10C18.1257 11.7837 17.5394 13.518 16.4565 14.9354C15.3737 16.3528 13.8545 17.3745 12.1334 17.8428C10.4122 18.3111 8.58484 18.2 6.9331 17.5267C5.28137 16.8534 3.8971 15.6553 2.99386 14.1172C2.95176 14.0461 2.92415 13.9675 2.91263 13.8857C2.90112 13.8039 2.90592 13.7207 2.92677 13.6407C2.94762 13.5608 2.9841 13.4859 3.0341 13.4201C3.0841 13.3544 3.14664 13.2992 3.21808 13.2578L9.37511 9.67422V2.5C9.37511 2.33424 9.44096 2.17527 9.55817 2.05806C9.67538 1.94085 9.83435 1.875 10.0001 1.875C11.418 1.87572 12.811 2.24729 14.0409 2.95282C15.2707 3.65834 16.2947 4.67328 17.0111 5.89688C17.0196 5.90938 17.0275 5.92188 17.0353 5.93516C17.0431 5.94844 17.0509 5.96406 17.0579 5.97812C17.759 7.20247 18.1269 8.58916 18.1251 10Z" fill="#1C1C1C" />
                        </svg>
                        <p className="text-sm">Default</p>
                    </div>


                </button>
                {DashboardNavItems.map((item, index) => (
                    <CollapsibleNavGroup key={index} navItem={item} />
                ))}
            </div>

            <div className="flex flex-col space-y-2 text-sm">
                <p className="px-4 text-[#A4a4a4]">Pages</p>

                {PagesNavItems.map((item, index) => (
                    <CollapsibleNavGroup key={index} navItem={item} />
                ))}
            </div>
        </div>
    );
}

