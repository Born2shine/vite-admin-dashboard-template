import ProfileDropdownMenu from "@/pages/protected/components/profile-dropdown-menu";
import { AlignRight, Bell, ChevronDown } from "lucide-react";
import NotificationModal from "./modals/notification-modal";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface IProps {
    // showSidebar: any;
    setShowSidebar: (state: any) => any;
}

const Topnav = ({ setShowSidebar }: IProps) => {
    return (
        <header className="bg-white p-3.5 fixed w-screen z-10 md:w-[calc(100vw_-_14rem)] lg:w-[calc(100vw_-_16rem)] border-b">
            <div className="flex justify-between items-center">
                <span className="cursor-pointer lg:hidden"
                    onClick={() => setShowSidebar((prevState: boolean) => {
                        return !prevState
                    })}
                >
                    <AlignRight className="h-5 w-5 text-gray-600" />
                </span>
                <div className="relative">
                    <h2 className="hidden font-medium text-xl lg:block">Welcome, Friday</h2>
                    {/* <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400"/>
                    <Input placeholder="Search" className="h-9 w-64 rounded-full pl-9 placeholder:text-gray-400 focus-visible:ring-0 "/> */}
                </div>
                <div className="flex gap-x-4 items-center md:mr-6">
                    <NotificationModal
                        showModal={false}
                        trigger={
                            <span className="relative"><Bell className="bg-accent p-2 h-9 w-9 rounded-md text-gray-600 cursor-pointer" /> <span className="absolute -top-2 -right-1 bg-primary grid place-content-center text-white text-[9px] w-4 h-4 rounded-full">5</span> </span>
                        }
                    />
                    {/* <span><SunMoon className="h-5 w-5 text-gray-600 cursor-pointer" /></span> */}
                    <ProfileDropdownMenu
                        trigger={
                            <div className="flex items-center gap-x-2">
                                <Avatar className="w-7 h-7 cursor-pointer">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@zpay" />
                                    <AvatarFallback>ZP</AvatarFallback>
                                </Avatar>
                                <div className="flex items-center">
                                    <span className="w-24 truncate font-normal hidden md:block">Friday Odoh</span>
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </header>
    )
}

export default Topnav