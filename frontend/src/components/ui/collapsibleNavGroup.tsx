import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react';
import React, { useState } from 'react';
// import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid';

interface NavItem {
    title: string;
    items: string[];
}

interface CollapsibleNavGroupProps {
    navItem: NavItem;
}

const CollapsibleNavGroup: React.FC<CollapsibleNavGroupProps> = ({ navItem }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="mb-2">
            <button
                onClick={toggleExpand}
                className="flex flex-row items-center space-x-1 w-full px-2 py-2 text-left text-gray-700 hover:bg-gray-200 !rounded"
            >
                {isExpanded ? (
                    <ChevronDownIcon className="w-4 h-4" />
                ) : (
                    <ChevronRightIcon className="w-4 h-4" />
                )}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 4.375V6.25H2.5V4.375C2.5 4.20924 2.56585 4.05027 2.68306 3.93306C2.80027 3.81585 2.95924 3.75 3.125 3.75H16.875C17.0408 3.75 17.1997 3.81585 17.3169 3.93306C17.4342 4.05027 17.5 4.20924 17.5 4.375Z" fill="#1C1C1C" fill-opacity="0.1" />
                    <path d="M16.875 3.125H3.125C2.79348 3.125 2.47554 3.2567 2.24112 3.49112C2.0067 3.72554 1.875 4.04348 1.875 4.375V15.625C1.875 15.9565 2.0067 16.2745 2.24112 16.5089C2.47554 16.7433 2.79348 16.875 3.125 16.875H16.875C17.2065 16.875 17.5245 16.7433 17.7589 16.5089C17.9933 16.2745 18.125 15.9565 18.125 15.625V4.375C18.125 4.04348 17.9933 3.72554 17.7589 3.49112C17.5245 3.2567 17.2065 3.125 16.875 3.125ZM16.875 4.375V5.625H3.125V4.375H16.875ZM16.875 15.625H3.125V6.875H16.875V15.625ZM13.75 8.75C13.75 9.74456 13.3549 10.6984 12.6517 11.4017C11.9484 12.1049 10.9946 12.5 10 12.5C9.00544 12.5 8.05161 12.1049 7.34835 11.4017C6.64509 10.6984 6.25 9.74456 6.25 8.75C6.25 8.58424 6.31585 8.42527 6.43306 8.30806C6.55027 8.19085 6.70924 8.125 6.875 8.125C7.04076 8.125 7.19973 8.19085 7.31694 8.30806C7.43415 8.42527 7.5 8.58424 7.5 8.75C7.5 9.41304 7.76339 10.0489 8.23223 10.5178C8.70107 10.9866 9.33696 11.25 10 11.25C10.663 11.25 11.2989 10.9866 11.7678 10.5178C12.2366 10.0489 12.5 9.41304 12.5 8.75C12.5 8.58424 12.5658 8.42527 12.6831 8.30806C12.8003 8.19085 12.9592 8.125 13.125 8.125C13.2908 8.125 13.4497 8.19085 13.5669 8.30806C13.6842 8.42527 13.75 8.58424 13.75 8.75Z" fill="#1C1C1C" />
                </svg>

                <span>{navItem.title}</span>

            </button>
            {isExpanded && (
                <ul className="mt-1 space-y-1">
                    {navItem.items.map((item, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 !rounded"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CollapsibleNavGroup;