import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"; // Assuming these are your custom components
import {
  ArrowLeftToLine,
  Home,
  ArrowRightLeft,
  BarChart3,
  LayoutGrid,
  Plus,
  User,
  RefreshCw,
  Settings,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";

const mainNavItems = [
  { name: "Home", url: "#", icon: <Home size={18} />, active: false },
  {
    name: "Company",
    url: "#",
    icon: <ArrowRightLeft size={18} />,
    active: true,
  },
  { name: "Claims", url: "#", icon: <BarChart3 size={18} />, active: false },
  {
    name: "Case Details",
    url: "#",
    icon: <BarChart3 size={18} />,
    active: false,
  },
  {
    name: "Case Updates",
    url: "#",
    icon: <BarChart3 size={18} />,
    active: false,
  },
  {
    name: "Hearing Board",
    url: "#",
    icon: <LayoutGrid size={18} />,
    active: false,
  },
];

const secondaryNavItems = [
  { name: "Add quick link", url: "#", icon: <Plus size={18} /> },
  { name: "My Account", url: "#", icon: <User size={18} /> },
];

const footerNavItems = [
  { name: "Refresh", url: "#", icon: <RefreshCw size={18} /> },
  { name: "Settings", url: "#", icon: <Settings size={18} /> },
  { name: "Help Center", url: "#", icon: <Headphones size={18} /> },
];

export function AppSidebar() {
  return (
    <Sidebar className="px-3 py-3 flex flex-col h-screen border-r">
      <SidebarHeader>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">मंच</span>
            <span className="text-lg italic text-gray-700">manch.</span>
          </div>
          <ArrowLeftToLine className="w-5 h-5" />
        </div>
      </SidebarHeader>

      <SidebarContent className="flex-grow mt-6">
        <SidebarMenu className="space-y-1">
          {mainNavItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <Link
                href={item.url}
                className={clsx(
                  "flex items-center gap-x-3 rounded-md p-2 text-sm font-medium text-gray-600 hover:bg-gray-50",
                  item.active && "bg-gray-100 text-gray-900",
                )}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <div className="border-t my-4" />

        <SidebarMenu className="space-y-1">
          {secondaryNavItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <Link
                href={item.url}
                className="flex items-center gap-x-3 rounded-md p-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu className="space-y-1">
          {footerNavItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <Link
                href={item.url}
                className="flex items-center gap-x-3 rounded-md p-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
