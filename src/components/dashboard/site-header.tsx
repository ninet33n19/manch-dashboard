import {
  ArrowLeft,
  Bell,
  ChevronRight,
  MoreVertical,
  Search,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SidebarTrigger } from "../ui/sidebar";

export function SiteHeader() {
  return (
    <header className="flex h-16 items-center border-b bg-background px-4 sm:px-6">
      {/* Left side: Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <div className="pr-3">
          <SidebarTrigger />
        </div>
        <div className="flex items-center gap-1.5">
          <Users className="h-4 w-4" />
          <span>Team</span>
        </div>
        <ChevronRight className="h-4 w-4 text-gray-400" />
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-[#D8F9B8] px-2 py-1 text-base font-bold text-black">
            मंच
          </span>
          <span className="text-base italic text-foreground">manch.</span>
        </div>
      </div>

      {/* Right side: Controls & Avatars */}
      <div className="ml-auto flex items-center gap-2">
        {/* Avatar Group */}
        <div className="flex -space-x-2">
          <Avatar className="h-8 w-8 border-2 border-background">
            <AvatarImage src="https://i.pravatar.cc/150?img=1" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <Avatar className="h-8 w-8 border-2 border-background">
            <AvatarImage src="https://i.pravatar.cc/150?img=2" />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <Avatar className="h-8 w-8 border-2 border-background">
            <AvatarImage src="https://i.pravatar.cc/150?img=3" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
        </div>

        {/* Action Icons */}
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <Search className="h-9 w-9" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <Bell className="h-9 w-9" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <MoreVertical className="h-9 w-9" />
        </Button>
      </div>
    </header>
  );
}
