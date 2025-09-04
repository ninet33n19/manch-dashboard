import React from "react";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

type ActiveCasesCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string | number;
};

export function ActiveCasesCard({ icon, title, value }: ActiveCasesCardProps) {
  return (
    <Card className="flex flex-col gap-2 rounded-2xl border bg-white p-4 shadow-none">
      {/* Header Row */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-[8px] bg-[#D8F9B8] ">
            {icon}
          </div>
          <p className="font-normal text-lg">{title}</p>
        </div>

        {/* Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="size-8 p-0 text-gray-400">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Export</DropdownMenuItem>
            <DropdownMenuItem>Remove</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Value Row */}
      <div className="mt-4">
        <span className="text-2xl font-medium text-slate-900">{value}</span>
      </div>
    </Card>
  );
}
