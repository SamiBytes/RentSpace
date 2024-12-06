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
import AddNewSpace from "./AddNewSpace";
import EditSpaceDetails from "./EditSpaceDetails";

const ProductList = () => {
  const RentalSpaces = [
    {
      title: "Modern Apartment",
      location: "Dhaka, Bangladesh",
      price: "$800/month",
      status: "Available",
    },
    {
      title: "Modern Apartment",
      location: "Dhaka, Bangladesh",
      price: "$800/month",
      status: "Available",
    },
    {
      title: "Modern Apartment",
      location: "Dhaka, Bangladesh",
      price: "$800/month",
      status: "Available",
    },
    {
      title: "Modern Apartment",
      location: "Dhaka, Bangladesh",
      price: "$800/month",
      status: "Available",
    },
    {
      title: "Modern Apartment",
      location: "Dhaka, Bangladesh",
      price: "$800/month",
      status: "Available",
    },
    {
      title: "Cozy Studio",
      location: "Chattogram, Bangladesh",
      price: "$500/month",
      status: "Booked",
    },
    {
      title: "Luxury Villa",
      location: "Sylhet, Bangladesh",
      price: "$2000/month",
      status: "Available",
    },
  ];
  return (
    <div>
      <div className="flex items-center space-x-3">
        {/* addNewSpace */}
        <AddNewSpace />
      </div>
     
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Space Name</TableHead>
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
                    <DropdownMenuItem className="text-red-500 cursor-pointer">
                      <MdDeleteForever className="mr-2" />
                      Delete
                    </DropdownMenuItem>
                    <EditSpaceDetails/>
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
