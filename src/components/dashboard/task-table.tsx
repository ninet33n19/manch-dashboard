"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronRight,
  MoreHorizontal,
  GripVertical,
  GitMerge,
  Link2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ArrowLoopRight from "@/icons/ArrowLoopRight";

// --- TYPE DEFINITIONS ---
type Party = {
  name: string;
  avatarUrl: string;
};

type Task = {
  id: string;
  title: string;
  isParent: boolean;
  hearingDate?: string;
  priority?: "Urgent" | "Normal";
  disputeValue?: number;
  parties?: Party[];
  subTasks?: Task[];
};

// --- MOCK DATA (matches the image) ---
const mockTasks: Task[] = [
  {
    id: "task-1",
    title: "Legal Notices",
    isParent: true,
    subTasks: [
      {
        id: "task-1-1",
        title: "Notice of Arbitration - 1",
        isParent: false,
        parties: [
          { name: "John Doe", avatarUrl: "https://github.com/shadcn.png" },
          { name: "Jane Smith", avatarUrl: "https://github.com/vercel.png" },
        ],
        hearingDate: "Jan 10, 2025",
        priority: "Urgent",
        disputeValue: 12283,
      },
      {
        id: "task-1-2",
        title: "Pending for Objections",
        isParent: false,
        parties: [
          { name: "John Doe", avatarUrl: "https://github.com/shadcn.png" },
        ],
        hearingDate: "Jan 10, 2025",
        priority: "Urgent",
        disputeValue: 1920.23,
      },
      {
        id: "task-1-3",
        title: "Arbitrator's Prelim Notice",
        isParent: false,
        parties: [
          { name: "John Doe", avatarUrl: "https://github.com/shadcn.png" },
          { name: "Jane Smith", avatarUrl: "https://github.com/vercel.png" },
          { name: "Sam Wilson", avatarUrl: "https://github.com/nextjs.png" },
        ],
        hearingDate: "Jan 22, 2025",
        priority: "Normal",
        disputeValue: 1920.23,
      },
    ],
  },
];

// --- HELPER COMPONENTS ---

// Avatar Stack for Parties
const AvatarStack = ({ parties }: { parties: Party[] }) => (
  <div className="flex -space-x-2 overflow-hidden">
    {parties.map((party, index) => (
      <Avatar
        key={index}
        className="h-6 w-6 border-2 border-white dark:border-gray-800"
      >
        <AvatarImage src={party.avatarUrl} alt={party.name} />
        <AvatarFallback>{party.name.charAt(0)}</AvatarFallback>
      </Avatar>
    ))}
  </div>
);

// Priority Badge
const PriorityBadge = ({ priority }: { priority: "Urgent" | "Normal" }) => {
  const isUrgent = priority === "Urgent";
  return (
    <Badge
      variant="outline"
      className={cn(
        "border font-normal",
        isUrgent
          ? "border-red-200 bg-red-50 text-red-600"
          : "border-green-200 bg-green-50 text-green-600",
      )}
    >
      <span
        className={cn(
          "mr-2 h-2 w-2 rounded-full",
          isUrgent ? "bg-red-500" : "bg-green-500",
        )}
      ></span>
      {priority}
    </Badge>
  );
};

// --- MAIN COMPONENT ---

export function TasksDataTable() {
  const [expandedRows, setExpandedRows] = useState<string[]>(["task-1"]);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const toggleRowExpansion = (id: string) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
    );
  };

  const handleSelectRow = (
    id: string,
    isParent: boolean,
    subTasks: Task[] = [],
  ) => {
    setSelectedRows((prev) => {
      let newSelection = [...prev];
      const isSelected = newSelection.includes(id);

      if (isSelected) {
        newSelection = newSelection.filter((rowId) => rowId !== id);
        if (isParent) {
          subTasks.forEach((subTask) => {
            newSelection = newSelection.filter((subId) => subId !== subTask.id);
          });
        }
      } else {
        newSelection.push(id);
        if (isParent) {
          subTasks.forEach((subTask) => {
            if (!newSelection.includes(subTask.id)) {
              newSelection.push(subTask.id);
            }
          });
        }
      }
      return newSelection;
    });
  };

  const isAllSubTasksSelected = (subTasks: Task[] = []) => {
    if (subTasks.length === 0) return false;
    return subTasks.every((task) => selectedRows.includes(task.id));
  };

  const renderTaskRow = (task: Task, level = 0) => {
    const isExpanded = expandedRows.includes(task.id);
    const isSelected = selectedRows.includes(task.id);
    const areAllChildrenSelected = isAllSubTasksSelected(task.subTasks);

    const checkboxState = (isParent: boolean) => {
      if (isParent) {
        return areAllChildrenSelected
          ? true
          : isSelected
            ? "indeterminate"
            : false;
      }
      return isSelected;
    };

    return (
      <React.Fragment key={task.id}>
        <TableRow className="group text-gray-600 hover:bg-gray-50">
          {/* Task Column */}
          <TableCell style={{ paddingLeft: `${level * 24 + 12}px` }}>
            <div className="flex items-center space-x-2">
              {task.isParent ? (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => toggleRowExpansion(task.id)}
                >
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
              ) : (
                // <GitMerge className="h-5 w-5 text-gray-400" />
                <ArrowLoopRight className="size-5 text-gray-400" />
              )}
              {!task.isParent && (
                <GripVertical className="h-4 w-4 text-gray-300 group-hover:text-gray-500" />
              )}

              <Checkbox
                checked={checkboxState(task.isParent)}
                onCheckedChange={() =>
                  handleSelectRow(task.id, task.isParent, task.subTasks)
                }
              />

              <span className="font-medium">{task.title}</span>
              {task.isParent && (
                <div className="flex items-center space-x-1 text-gray-400">
                  <Link2 className="h-4 w-4" />
                  <span className="text-xs font-semibold">
                    {task.subTasks?.length}
                  </span>
                </div>
              )}
            </div>
          </TableCell>

          {/* Parties Column */}
          <TableCell>
            {task.parties && task.parties.length > 0 && (
              <AvatarStack parties={task.parties} />
            )}
          </TableCell>

          {/* Hearing Date Column */}
          <TableCell>{task.hearingDate}</TableCell>

          {/* Priority Column */}
          <TableCell>
            {task.priority && <PriorityBadge priority={task.priority} />}
          </TableCell>

          {/* Dispute Value Column */}
          <TableCell className="text-right">
            {task.disputeValue?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </TableCell>

          {/* Actions Column */}
          <TableCell>
            <div className="flex justify-end">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100"
                  >
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Edit Task</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </TableCell>
        </TableRow>

        {/* Render Sub-tasks */}
        {isExpanded &&
          task.subTasks?.map((subTask) => renderTaskRow(subTask, level + 1))}
      </React.Fragment>
    );
  };

  return (
    <div className="rounded-lg border bg-white p-4">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-semibold">Tasks</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Add New Task</DropdownMenuItem>
            <DropdownMenuItem>Import Tasks</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="border-b hover:bg-white">
            <TableHead className="w-[40%] text-gray-500 font-semibold">
              Task
            </TableHead>
            <TableHead className="text-gray-500 font-semibold">
              No of Claims/Parties
            </TableHead>
            <TableHead className="text-gray-500 font-semibold">
              Hearing date
            </TableHead>
            <TableHead className="text-gray-500 font-semibold">
              Priority
            </TableHead>
            <TableHead className="text-right text-gray-500 font-semibold">
              Dispute Value
            </TableHead>
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{mockTasks.map((task) => renderTaskRow(task, 0))}</TableBody>
      </Table>
    </div>
  );
}
