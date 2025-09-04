import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

export function AddBranchDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 h-12 min-w-52"
        >
          <PlusIcon className="size-5" /> Add New Branch
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-inter font-normal">
            Enter Branch Details
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 pb-4">
          <Input placeholder="Company Name" className="h-12" />
          <Input placeholder="Branch Name" className="h-12" />
          <Input placeholder="Enter Email Address" className="h-12" />
          <Input placeholder="Branch Address" className="h-12" />
          <Input placeholder="Contact Number" className="h-12" />
          <Select>
            <SelectTrigger className="min-h-12 w-full">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <div className="flex justify-start w-full gap-2">
            <Button type="submit" className="bg-[#2B2D2D] h-12">
              Add Branch
            </Button>
            <Button variant="outline" className="h-12">
              Cancel
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
