import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  
interface NotificationModalProps {
    trigger: React.ReactNode,
    showModal: boolean
}

const NotificationModal = ({ trigger, showModal }: NotificationModalProps) => {
    return (
        <Sheet open={showModal}>
            <SheetTrigger>{trigger}</SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default NotificationModal