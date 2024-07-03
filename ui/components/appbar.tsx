import { Search } from "./search";
import { ThemeToggle } from "./theme-toggle";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { Button } from "./ui/button";
import { Toggle } from "./ui/toggle";
import { Slash } from "lucide-react";

interface AppbarProps {
    isLeftCollapsed: boolean;
    isRightCollapsed: boolean;

    setIsLeftCollapsed: (val: boolean) => void;
    setIsRightCollapsed: (val: boolean) => void;
    className?: string;
}

export const AppBar = ({ setIsLeftCollapsed, isLeftCollapsed, setIsRightCollapsed, isRightCollapsed, className }: AppbarProps) => {
    return (
        <div className={` border-b-2 p-4 flex flex-row flex-grow items-center space-x-2 ${className}`}>
            {/* this is topbar */}
            <Toggle onPressedChange={setIsLeftCollapsed} pressed={(isLeftCollapsed)} size={"icon"} aria-label="Toggle Let">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.875 7.75V20.25H7.125C6.95924 20.25 6.80027 20.1842 6.68306 20.0669C6.56585 19.9497 6.5 19.7908 6.5 19.625V8.375C6.5 8.20924 6.56585 8.05027 6.68306 7.93306C6.80027 7.81585 6.95924 7.75 7.125 7.75H10.875Z" fill="#1C1C1C" fillOpacity="0.1" />
                    <path d="M20.875 7.125H7.125C6.79348 7.125 6.47554 7.2567 6.24112 7.49112C6.0067 7.72554 5.875 8.04348 5.875 8.375V19.625C5.875 19.9565 6.0067 20.2745 6.24112 20.5089C6.47554 20.7433 6.79348 20.875 7.125 20.875H20.875C21.2065 20.875 21.5245 20.7433 21.7589 20.5089C21.9933 20.2745 22.125 19.9565 22.125 19.625V8.375C22.125 8.04348 21.9933 7.72554 21.7589 7.49112C21.5245 7.2567 21.2065 7.125 20.875 7.125ZM7.125 15.875H8.375C8.54076 15.875 8.69973 15.8092 8.81694 15.6919C8.93415 15.5747 9 15.4158 9 15.25C9 15.0842 8.93415 14.9253 8.81694 14.8081C8.69973 14.6908 8.54076 14.625 8.375 14.625H7.125V13.375H8.375C8.54076 13.375 8.69973 13.3092 8.81694 13.1919C8.93415 13.0747 9 12.9158 9 12.75C9 12.5842 8.93415 12.4253 8.81694 12.3081C8.69973 12.1908 8.54076 12.125 8.375 12.125H7.125V10.875H8.375C8.54076 10.875 8.69973 10.8092 8.81694 10.6919C8.93415 10.5747 9 10.4158 9 10.25C9 10.0842 8.93415 9.92527 8.81694 9.80806C8.69973 9.69085 8.54076 9.625 8.375 9.625H7.125V8.375H10.25V19.625H7.125V15.875ZM20.875 19.625H11.5V8.375H20.875V19.625Z" fill="#1C1C1C" />
                </svg>
            </Toggle>

            <Button variant={"ghost"} size={"icon"} aria-label="Toggle bold">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3851 15.5391C18.2995 15.6143 18.2358 15.7114 18.2009 15.8199C18.1659 15.9284 18.161 16.0444 18.1867 16.1555L19.2429 20.7289C19.2709 20.8484 19.263 20.9734 19.2204 21.0884C19.1777 21.2034 19.1022 21.3034 19.0031 21.3757C18.9041 21.4481 18.786 21.4898 18.6634 21.4955C18.5409 21.5012 18.4194 21.4707 18.314 21.4078L14.3218 18.986C14.2248 18.927 14.1135 18.8958 14 18.8958C13.8864 18.8958 13.7751 18.927 13.6781 18.986L9.68591 21.4078C9.58058 21.4707 9.45907 21.5012 9.33654 21.4955C9.214 21.4898 9.09585 21.4481 8.99682 21.3757C8.89778 21.3034 8.82223 21.2034 8.77959 21.0884C8.73695 20.9734 8.72909 20.8484 8.75701 20.7289L9.81326 16.1555C9.83893 16.0444 9.83404 15.9284 9.7991 15.8199C9.76416 15.7114 9.70048 15.6143 9.61482 15.5391L6.0906 12.4649C5.99638 12.3848 5.92803 12.2785 5.8942 12.1596C5.86038 12.0407 5.86259 11.9144 5.90056 11.7967C5.93853 11.679 6.01056 11.5753 6.10752 11.4985C6.20449 11.4218 6.32203 11.3755 6.44529 11.3656L11.0906 10.9641C11.2039 10.954 11.3124 10.9131 11.4042 10.846C11.496 10.7788 11.5678 10.6878 11.6117 10.5828L13.4265 6.25782C13.475 6.146 13.5551 6.0508 13.657 5.98392C13.7589 5.91704 13.8781 5.88141 14 5.88141C14.1218 5.88141 14.2411 5.91704 14.3429 5.98392C14.4448 6.0508 14.5249 6.146 14.5734 6.25782L16.3883 10.5828C16.4322 10.6878 16.5039 10.7788 16.5958 10.846C16.6876 10.9131 16.796 10.954 16.9094 10.9641L21.5547 11.3656C21.6779 11.3755 21.7955 11.4218 21.8924 11.4985C21.9894 11.5753 22.0614 11.679 22.0994 11.7967C22.1374 11.9144 22.1396 12.0407 22.1057 12.1596C22.0719 12.2785 22.0036 12.3848 21.9094 12.4649L18.3851 15.5391Z" fill="#1C1C1C" fillOpacity="0.1" />
                    <path d="M22.6875 11.6008C22.6118 11.3675 22.4692 11.1616 22.2773 11.0088C22.0855 10.856 21.8529 10.763 21.6086 10.7414L16.9688 10.3414L15.15 6.01643C15.0553 5.78949 14.8956 5.59564 14.691 5.45929C14.4863 5.32294 14.2459 5.25018 14 5.25018C13.7541 5.25018 13.5137 5.32294 13.3091 5.45929C13.1044 5.59564 12.9447 5.78949 12.85 6.01643L11.0367 10.3414L6.39142 10.7438C6.14614 10.7644 5.9124 10.857 5.71952 11.0099C5.52663 11.1628 5.38319 11.3693 5.30718 11.6034C5.23117 11.8375 5.22598 12.0889 5.29225 12.3259C5.35852 12.563 5.49331 12.7752 5.6797 12.936L9.20392 16.0157L8.14767 20.5891C8.09182 20.8284 8.10776 21.0789 8.19349 21.3092C8.27923 21.5396 8.43095 21.7395 8.6297 21.8841C8.82845 22.0286 9.0654 22.1114 9.31093 22.122C9.55647 22.1326 9.79968 22.0706 10.0102 21.9438L13.9945 19.5219L17.9875 21.9438C18.198 22.0706 18.4412 22.1326 18.6868 22.122C18.9323 22.1114 19.1692 22.0286 19.368 21.8841C19.5667 21.7395 19.7185 21.5396 19.8042 21.3092C19.8899 21.0789 19.9059 20.8284 19.85 20.5891L18.7945 16.011L22.318 12.936C22.5044 12.7746 22.6389 12.5618 22.7046 12.3243C22.7704 12.0867 22.7644 11.835 22.6875 11.6008ZM21.4985 11.9914L17.975 15.0664C17.8035 15.2156 17.676 15.4087 17.606 15.625C17.5361 15.8412 17.5265 16.0724 17.5781 16.2938L18.6367 20.875L14.6469 18.4532C14.4522 18.3346 14.2287 18.2719 14.0008 18.2719C13.7729 18.2719 13.5494 18.3346 13.3547 18.4532L9.37033 20.875L10.4219 16.2969C10.4736 16.0756 10.4639 15.8443 10.394 15.6281C10.3241 15.4118 10.1965 15.2187 10.025 15.0696L6.50002 11.9961C6.49973 11.9938 6.49973 11.9914 6.50002 11.9891L11.1438 11.5875C11.3705 11.5675 11.5874 11.486 11.7712 11.3518C11.955 11.2176 12.0987 11.0357 12.1867 10.8258L14 6.50628L15.8125 10.8258C15.9005 11.0357 16.0442 11.2176 16.228 11.3518C16.4118 11.486 16.6288 11.5675 16.8555 11.5875L21.5 11.9891C21.5 11.9891 21.5 11.9938 21.5 11.9946L21.4985 11.9914Z" fill="#1C1C1C" />
                </svg>

            </Button>
            <Breadcrumb className="flex-grow text-sm font-normal text-[#1C1C1C66]">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        /
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-[#1C1C1C]">Default</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <Search />
            <ThemeToggle />
            <Button variant={"ghost"} size={"icon"} aria-label="Toggle bold">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.875 14C20.875 15.3597 20.4718 16.689 19.7164 17.8195C18.9609 18.9501 17.8872 19.8313 16.631 20.3517C15.3747 20.872 13.9924 21.0082 12.6588 20.7429C11.3251 20.4776 10.1001 19.8228 9.13864 18.8614C8.17716 17.8999 7.52238 16.6749 7.2571 15.3412C6.99183 14.0076 7.12798 12.6253 7.64833 11.3691C8.16868 10.1128 9.04987 9.03908 10.1805 8.28365C11.311 7.52821 12.6403 7.125 14 7.125C15.8234 7.125 17.5721 7.84933 18.8614 9.13864C20.1507 10.428 20.875 12.1766 20.875 14Z" fill="#1C1C1C" fillOpacity="0.1" />
                    <path d="M14.625 10.25V13.6461L17.4469 15.3391C17.589 15.4245 17.6914 15.5628 17.7316 15.7237C17.7717 15.8845 17.7463 16.0548 17.6609 16.1969C17.5756 16.339 17.4372 16.4414 17.2764 16.4816C17.1155 16.5217 16.9453 16.4963 16.8031 16.411L13.6781 14.536C13.5856 14.4804 13.5091 14.4018 13.456 14.3079C13.4029 14.214 13.375 14.1079 13.375 14V10.25C13.375 10.0843 13.4408 9.92529 13.5581 9.80808C13.6753 9.69087 13.8342 9.62502 14 9.62502C14.1658 9.62502 14.3247 9.69087 14.4419 9.80808C14.5592 9.92529 14.625 10.0843 14.625 10.25ZM14 6.50002C13.0141 6.49757 12.0374 6.69067 11.1266 7.06817C10.2158 7.44566 9.38889 8.00005 8.69375 8.69924C8.12578 9.27424 7.62109 9.82737 7.125 10.4063V9.00002C7.125 8.83426 7.05915 8.67529 6.94194 8.55808C6.82473 8.44087 6.66576 8.37502 6.5 8.37502C6.33424 8.37502 6.17527 8.44087 6.05806 8.55808C5.94085 8.67529 5.875 8.83426 5.875 9.00002V12.125C5.875 12.2908 5.94085 12.4498 6.05806 12.567C6.17527 12.6842 6.33424 12.75 6.5 12.75H9.625C9.79076 12.75 9.94973 12.6842 10.0669 12.567C10.1842 12.4498 10.25 12.2908 10.25 12.125C10.25 11.9593 10.1842 11.8003 10.0669 11.6831C9.94973 11.5659 9.79076 11.5 9.625 11.5H7.82812C8.38672 10.8422 8.94297 10.2227 9.57734 9.58049C10.446 8.71186 11.5513 8.11847 12.7553 7.87446C13.9592 7.63045 15.2084 7.74665 16.3467 8.20853C17.485 8.67041 18.4619 9.45749 19.1555 10.4714C19.849 11.4854 20.2283 12.6812 20.2461 13.9095C20.2639 15.1378 19.9193 16.3441 19.2554 17.3777C18.5915 18.4113 17.6377 19.2263 16.5132 19.7209C15.3888 20.2155 14.1435 20.3678 12.933 20.1587C11.7225 19.9496 10.6004 19.3885 9.70703 18.5453C9.64732 18.4889 9.57708 18.4448 9.50032 18.4155C9.42356 18.3862 9.34179 18.3724 9.25967 18.3747C9.17754 18.377 9.09668 18.3955 9.0217 18.429C8.94672 18.4626 8.87908 18.5106 8.82266 18.5703C8.76623 18.63 8.72212 18.7003 8.69283 18.777C8.66355 18.8538 8.64967 18.9356 8.652 19.0177C8.65432 19.0998 8.67279 19.1807 8.70636 19.2557C8.73993 19.3306 8.78795 19.3983 8.84766 19.4547C9.73785 20.2948 10.8201 20.9042 12 21.2298C13.1799 21.5554 14.4215 21.5873 15.6166 21.3226C16.8116 21.058 17.9237 20.505 18.8559 19.7117C19.788 18.9184 20.5118 17.9091 20.9642 16.7718C21.4165 15.6344 21.5836 14.4037 21.4509 13.1869C21.3182 11.9701 20.8897 10.8043 20.2029 9.79122C19.516 8.77813 18.5916 7.94854 17.5104 7.37485C16.4292 6.80117 15.224 6.50082 14 6.50002Z" fill="#1C1C1C" />
                </svg>


            </Button>
            <Button variant={"ghost"} size={"icon"} aria-label="Toggle bold">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.25 19H7.75002C7.64063 18.9993 7.53333 18.97 7.43884 18.9149C7.34435 18.8597 7.26599 18.7808 7.21158 18.6859C7.15717 18.591 7.12862 18.4835 7.12878 18.3741C7.12895 18.2647 7.15783 18.1572 7.21252 18.0625C7.72737 17.1719 8.37502 14.9227 8.37502 12.125C8.37502 10.6332 8.96766 9.20242 10.0225 8.14752C11.0774 7.09263 12.5082 6.5 14 6.5C15.4919 6.5 16.9226 7.09263 17.9775 8.14752C19.0324 9.20242 19.625 10.6332 19.625 12.125C19.625 14.9234 20.2735 17.1719 20.7891 18.0625C20.8438 18.1574 20.8727 18.2649 20.8728 18.3745C20.8729 18.484 20.8442 18.5916 20.7896 18.6865C20.735 18.7815 20.6565 18.8604 20.5618 18.9154C20.467 18.9705 20.3595 18.9996 20.25 19Z" fill="#1C1C1C" fillOpacity="0.1" />
                    <path d="M21.3281 17.7453C20.8945 16.9984 20.2499 14.8852 20.2499 12.125C20.2499 10.4674 19.5915 8.87769 18.4194 7.70558C17.2473 6.53348 15.6576 5.875 13.9999 5.875C12.3423 5.875 10.7526 6.53348 9.58053 7.70558C8.40843 8.87769 7.74995 10.4674 7.74995 12.125C7.74995 14.8859 7.10464 16.9984 6.67104 17.7453C6.56032 17.9352 6.50162 18.1509 6.50086 18.3707C6.50011 18.5905 6.55733 18.8066 6.66674 18.9973C6.77616 19.1879 6.93392 19.3463 7.12409 19.4565C7.31427 19.5667 7.53015 19.6248 7.74995 19.625H10.9382C11.0824 20.3306 11.4659 20.9647 12.0238 21.4201C12.5817 21.8756 13.2798 22.1243 13.9999 22.1243C14.7201 22.1243 15.4182 21.8756 15.9761 21.4201C16.534 20.9647 16.9175 20.3306 17.0617 19.625H20.2499C20.4697 19.6247 20.6855 19.5665 20.8755 19.4562C21.0656 19.346 21.2232 19.1875 21.3326 18.9969C21.4419 18.8063 21.499 18.5903 21.4983 18.3705C21.4975 18.1508 21.4388 17.9351 21.3281 17.7453ZM13.9999 20.875C13.6123 20.8749 13.2342 20.7546 12.9178 20.5308C12.6013 20.3069 12.362 19.9905 12.2328 19.625H15.7671C15.6379 19.9905 15.3986 20.3069 15.0821 20.5308C14.7657 20.7546 14.3876 20.8749 13.9999 20.875ZM7.74995 18.375C8.35151 17.3406 8.99995 14.9438 8.99995 12.125C8.99995 10.7989 9.52673 9.52715 10.4644 8.58947C11.4021 7.65178 12.6739 7.125 13.9999 7.125C15.326 7.125 16.5978 7.65178 17.5355 8.58947C18.4732 9.52715 18.9999 10.7989 18.9999 12.125C18.9999 14.9414 19.6468 17.3383 20.2499 18.375H7.74995Z" fill="#1C1C1C" />
                </svg>

            </Button>
            <Toggle onPressedChange={setIsRightCollapsed} pressed={(isRightCollapsed)} size={"icon"} aria-label="Toggle Right">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.875 7.75V20.25H7.125C6.95924 20.25 6.80027 20.1842 6.68306 20.0669C6.56585 19.9497 6.5 19.7908 6.5 19.625V8.375C6.5 8.20924 6.56585 8.05027 6.68306 7.93306C6.80027 7.81585 6.95924 7.75 7.125 7.75H10.875Z" fill="#1C1C1C" fillOpacity="0.1" />
                    <path d="M20.875 7.125H7.125C6.79348 7.125 6.47554 7.2567 6.24112 7.49112C6.0067 7.72554 5.875 8.04348 5.875 8.375V19.625C5.875 19.9565 6.0067 20.2745 6.24112 20.5089C6.47554 20.7433 6.79348 20.875 7.125 20.875H20.875C21.2065 20.875 21.5245 20.7433 21.7589 20.5089C21.9933 20.2745 22.125 19.9565 22.125 19.625V8.375C22.125 8.04348 21.9933 7.72554 21.7589 7.49112C21.5245 7.2567 21.2065 7.125 20.875 7.125ZM7.125 15.875H8.375C8.54076 15.875 8.69973 15.8092 8.81694 15.6919C8.93415 15.5747 9 15.4158 9 15.25C9 15.0842 8.93415 14.9253 8.81694 14.8081C8.69973 14.6908 8.54076 14.625 8.375 14.625H7.125V13.375H8.375C8.54076 13.375 8.69973 13.3092 8.81694 13.1919C8.93415 13.0747 9 12.9158 9 12.75C9 12.5842 8.93415 12.4253 8.81694 12.3081C8.69973 12.1908 8.54076 12.125 8.375 12.125H7.125V10.875H8.375C8.54076 10.875 8.69973 10.8092 8.81694 10.6919C8.93415 10.5747 9 10.4158 9 10.25C9 10.0842 8.93415 9.92527 8.81694 9.80806C8.69973 9.69085 8.54076 9.625 8.375 9.625H7.125V8.375H10.25V19.625H7.125V15.875ZM20.875 19.625H11.5V8.375H20.875V19.625Z" fill="#1C1C1C" />
                </svg>

            </Toggle>

        </div>
    );
}