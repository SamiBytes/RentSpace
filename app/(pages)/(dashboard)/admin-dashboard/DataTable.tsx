import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { FcApproval } from "react-icons/fc";
const ProductList = () => {
  const RentalSpaces = [
    {
      title: "Modern Apartment",
      location: "Dhaka, Bangladesh",
      price: "$800/month",
      status: "Approved",
    },
    {
      title: "Modern Apartment",
      location: "Dhaka, Bangladesh",
      price: "$800/month",
      status: "Rejected",
    },
    {
      title: "Modern Apartment",
      location: "Dhaka, Bangladesh",
      price: "$800/month",
      status: "Pending",
    },
    {
      title: "Modern Apartment",
      location: "Dhaka, Bangladesh",
      price: "$800/month",
      status: "Approved",
    },
    {
      title: "Modern Apartment",
      location: "Dhaka, Bangladesh",
      price: "$800/month",
      status: "Rejected",
    },
    {
      title: "Modern Apartment",
      location: "Dhaka, Bangladesh",
      price: "$800/month",
      status: "Pending",
    },
    {
      title: "Modern Apartment",
      location: "Dhaka, Bangladesh",
      price: "$800/month",
      status: "Approved",
    },
    {
      title: "Modern Apartment",
      location: "Dhaka, Bangladesh",
      price: "$800/month",
      status: "Rejected",
    },
    {
      title: "Modern Apartment",
      location: "Dhaka, Bangladesh",
      price: "$800/month",
      status: "Pending",
    },
   
  ];
  return (
    <div>
      <div className="flex items-center space-x-3"></div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Rent Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {RentalSpaces.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell className="text-right flex items-end justify-end cursor-pointer">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <BsThreeDotsVertical size={18} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                  <DropdownMenuItem className="text-green-500 cursor-pointer">
                      <FcApproval className="mr-2" />
                      Approve
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-500 cursor-pointer">
                      <MdDeleteForever className="mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductList;
