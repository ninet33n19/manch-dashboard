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

export function AddCompanyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 h-12 min-w-52"
        >
          <PlusIcon className="size-5" /> Add New Company
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-inter font-normal">
            Enter Company Details
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 pb-4">
          <Input placeholder="Company Name" className="h-12" />
          <Input placeholder="Company Registered Address" className="h-12" />
          <Input placeholder="GST Number" className="h-12" />
          <Input placeholder="Authorized Person" className="h-12" />
          <Input
            placeholder="Per Arbitration Notice Changes"
            className="h-12"
          />
          <Select>
            <SelectTrigger className="min-h-12 w-full">
              <SelectValue placeholder="Single Panel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">Single Panel</SelectItem>
              <SelectItem value="multi">Multi Panel</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Ar.Section Exp" className="h-12" />
          <Input placeholder="Ar.Section Fee" className="h-12" />
          <Input placeholder="Regular Ar Exp" className="h-12" />
          <Input placeholder="Regular Ar Fee" className="h-12" />
        </div>
        <DialogFooter>
          <div className="flex justify-start w-full gap-2">
            <Button type="submit" className="bg-[#2B2D2D] h-12">
              Add Company
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
