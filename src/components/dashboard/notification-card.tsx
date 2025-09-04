"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

// --- MOCK DATA ---
const notifications = [
  {
    id: 1,
    amount: 12890.0,
    currency: "USD",
    cardLastFour: "1100",
    isHighlighted: true,
  },
  {
    id: 2,
    amount: 12890.0,
    currency: "USD",
    cardLastFour: "1100",
    isHighlighted: false,
  },
];

// --- HELPER COMPONENTS ---

// NEW: Transaction Status Icon (Red Dot)
const TransactionStatusIcon = () => (
  <svg
    width="34"
    height="20"
    viewBox="0 0 34 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Adjusted circles to be side-by-side and appropriately sized */}
    <circle cx="10" cy="10" r="10" fill="#EB001B" />
    <circle cx="24" cy="10" r="10" fill="#F79E1B" />
  </svg>
);

// Notification Item Card
type NotificationCardProps = {
  amount: number;
  currency: string;
  cardLastFour: string;
  isHighlighted: boolean;
};

// UPDATED: NotificationCard component
const NotificationCard = ({
  amount,
  currency,
  cardLastFour,
  isHighlighted,
}: NotificationCardProps) => {
  return (
    <Card
      className={cn(
        "relative rounded-xl pl-4 pb-0 transition-colors flex-1 flex flex-col", // <-- Added flex-1 and flex flex-col
        isHighlighted ? "bg-[#e8f7d3]" : "bg-white border",
      )}
    >
      {/* Top Section */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-2xl font-bold text-slate-800">
            {amount.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="text-sm text-slate-500">{currency}</p>
        </div>
      </div>

      {/* Spacer to push content to the bottom */}
      <div className="flex-grow" />

      {/* Bottom Section */}
      <div className="relative h-10">
        <div
          className={cn(
            "absolute bottom-0 right-0 w-2/3 h-20 bg-white rounded-tl-xl flex items-center pl-4",
            isHighlighted ? "bg-white border" : "bg-[#e8f7d3]",
          )}
        >
          <div className="flex flex-col items-start gap-3">
            <TransactionStatusIcon />
            <p className="text-xs text-slate-600 tracking-wider">
              **** {cardLastFour}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

// --- MAIN COMPONENT ---
export function SettlementNotifications() {
  return (
    <Card className="w-full md:w-[22rem] h-full flex flex-col rounded-xl border bg-white p-4 shadow-none">
      <CardHeader className="p-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium text-[#2B2D2D]">
            Settlement Notifications
          </CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 text-gray-400">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Mark all as read</DropdownMenuItem>
              <DropdownMenuItem>View all</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-2 flex-grow flex flex-col gap-4">
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            amount={notification.amount}
            currency={notification.currency}
            cardLastFour={notification.cardLastFour}
            isHighlighted={notification.isHighlighted}
          />
        ))}
      </CardContent>
    </Card>
  );
}
