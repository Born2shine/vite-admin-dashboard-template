import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOutIcon, Settings, User } from "lucide-react"

interface DropdownMenuProps {
    trigger: React.ReactNode
}

const ProfileDropdownMenu = ({ trigger }: DropdownMenuProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
            <DropdownMenuContent
                align="start"
                alignOffset={2}
                className="mr-4 w-52 rounded-xl p-0"
            >
                <DropdownMenuLabel className="flex items-center gap-x-2 p-4 font-normal px-6 border-b border-b-gray-100 bg-gray-100">
                    {/* <User className="bg-white rounded-full text-gray-400 w-6 h-6" /> */}
                    <span className="text-gray-500 w-24 truncate font-normal">Friday Odoh</span>
                </DropdownMenuLabel>
                {/* <DropdownMenuSeparator /> */}
                <DropdownMenuItem className="cursor-pointer p-4 font-normal px-6 border-b border-b-gray-100">
                    <User className="w-4 h-4 mr-2" />
                    <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer p-4 font-normal px-6 border-b border-b-gray-100">
                    <Settings className="w-4 h-4 mr-2" />
                    <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer p-4 font-normal px-6 text-red-600">
                    <LogOutIcon className="w-4 h-4 mr-2" />
                    <span>Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ProfileDropdownMenu