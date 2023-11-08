import { Bell, ChevronDown, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import ProfileDropdownMenu from "@/pages/protected/components/profile-dropdown-menu";
import NotificationModal from "./modals/notification-modal";

interface IProps {
    // showSidebar: any;
    setShowSidebar: (state: any) => any;
}

const Topnav = ({ setShowSidebar }: IProps) => {
    return (
        <header className="bg-white p-5 fixed w-screen z-10 md:w-[calc(100vw_-_14rem)] lg:w-[calc(100vw_-_16rem)] shadow-sm">
            <div className="flex justify-between items-center">
                <span className="cursor-pointer lg:hidden"
                    onClick={() => setShowSidebar((prevState: boolean) => {
                        return !prevState
                    })}
                >
                    <Menu className="h-5 w-5 text-gray-600" />
                </span>
                <div>
                    <h2 className="hidden font-medium text-xl lg:block">Welcome, Friday</h2>
                </div>
                <div className="flex gap-x-4 items-center md:mr-6">
                    <NotificationModal
                        trigger={
                            <span><Bell className="h-5 w-5 text-gray-600 cursor-pointer" /></span>
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
                                    <span className="w-24 truncate font-normal">Friday Odoh</span>
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