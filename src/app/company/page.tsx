import { AddCompanyDialog } from "@/components/company/AddCompanyDialog";
import { AddBranchDialog } from "@/components/company/AddBranchDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockData = [
  {
    srNo: 1,
    companyName: "Jaffer Company",
    registeredAddress: "Jan 10, 2025",
    gstNumber: "1",
    authorizedPerson: "Abc",
    noOfBranches: 1,
  },
  {
    srNo: 2,
    companyName: "Tyger Capital Pvt Ltd",
    registeredAddress: "Jan 10, 2025",
    gstNumber: "1",
    authorizedPerson: "Abc",
    noOfBranches: 1,
  },
  {
    srNo: 3,
    companyName: "ABC Company",
    registeredAddress: "Jun 22, 2025",
    gstNumber: "1",
    authorizedPerson: "Abc",
    noOfBranches: 1,
  },
];

export default function CompanyPage() {
  return (
    <div className="bg-gray-50/50 p-4 lg:p-6">
      <h1 className="self-stretch font-inter text-2xl font-normal leading-8 tracking-tight text-[#2B2D2D]">
        Company
      </h1>

      <div>
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-4 mt-5">
          <AddCompanyDialog />
          <AddBranchDialog />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 mt-5">
            <div className="flex flex-col gap-4">
              <span className="font-medium text-lg">Search Company: </span>
              <Input
                type="text"
                placeholder="Company Name"
                className="min-w-72 h-12"
              />
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-medium text-lg">Filter By Branch: </span>
              <Input
                type="text"
                placeholder="Branch Name"
                className="min-w-72 h-12"
              />
            </div>
          </div>
          <Button className="mt-2 h-12 w-[88px] bg-[#2B2D2D]" variant="default">
            Submit
          </Button>
        </div>
      </div>

      {/* The container now has padding `p-2` to accommodate row spacing */}
      <div className="overflow-x-auto mt-6 border border-gray-300 rounded-lg p-2">
        {/* Add border-separate and border-spacing for the desired layout */}
        <Table className="border-separate border-spacing-y-2">
          <TableHeader>
            <TableRow>
              <TableHead className="text-start">Sr No.</TableHead>
              <TableHead className="text-start">Company Name</TableHead>
              <TableHead className="text-start">Registered Address</TableHead>
              <TableHead className="text-start">GST Number</TableHead>
              <TableHead className="text-start">Authorized Person</TableHead>
              <TableHead className="text-start">No. of Branches</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockData.map((company) => (
              <TableRow key={company.srNo} className="group">
                <TableCell className="text-start group-hover:bg-[#D8F9B8] rounded-l-lg">
                  {company.srNo}
                </TableCell>
                <TableCell className="text-start group-hover:bg-[#D8F9B8]">
                  {company.companyName}
                </TableCell>
                <TableCell className="text-start group-hover:bg-[#D8F9B8]">
                  {company.registeredAddress}
                </TableCell>
                <TableCell className="text-start group-hover:bg-[#D8F9B8]">
                  {company.gstNumber}
                </TableCell>
                <TableCell className="text-start group-hover:bg-[#D8F9B8]">
                  {company.authorizedPerson}
                </TableCell>
                <TableCell className="text-start group-hover:bg-[#D8F9B8] rounded-r-lg">
                  {company.noOfBranches}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
