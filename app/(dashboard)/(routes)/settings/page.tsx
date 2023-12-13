import { Heading } from "@/components/ui/heading";
import { UserButton } from "@clerk/nextjs";
import { Settings } from "lucide-react";

const SettingsPage =() => {
    return(
        <div>
            <Heading 
            title= "Settings"
            description="Manage account Settings."
            icon={Settings}
            iconColor="text-gray-700"
            bgColor="bg-gray-700/10"
            />
             <UserButton afterSignOutUrl="/" /> 
             <h1> FUTURE ENHANCEMENT</h1>
        </div>
            );
}
export default SettingsPage;