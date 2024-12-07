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
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";



const ProductList = () => {
  interface RentalSpace {
    id: number,
    image: string,
    address: string,
    room_type: string,
    room_vacancy: number,
    price_per_day: number,
    description: string,
    latitude: number,
    longitude: number,
    created_at: string,
    verified: boolean,
  }

  const [RentalSpaces, setRentalSpaces] = useState<RentalSpace[]>([]);
  const fetchData = async () => {
    const userData = JSON.parse(localStorage.getItem("user_data") || "{}");
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_ROOT_URL}/administration/rent-space-approve/`,
      {
        headers: {
          Authorization: `Bearer ${userData.access_token}`,
        },
      }
    );
    setRentalSpaces(res.data);
  };

  const approveSpace = async (id: number) => {
    const userData = JSON.parse(localStorage.getItem("user_data") || "{}");
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_ROOT_URL}/administration/rent-space-approve/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userData.access_token}`,
          }
        }
      );
      toast.success("Space Approved");
      fetchData();
    }
    catch (error: any) {
      console.log(error);
      toast.error("Failed to approve space");
    }
  }

  const deleteSpace = async (id: number) => {
    const userData = JSON.parse(localStorage.getItem("user_data") || "{}");
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_ROOT_URL}/administration/rent-space-approve/${id}`,
      {
        headers: {
          Authorization: `Bearer ${userData.access_token}`,
        },
      }
    );
    if (res.status === 200) {
      toast.success("Space Deleted");
    }
    else {
      toast.error("Failed to delete space");
    }
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <div className="flex items-center space-x-3"></div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              Image
            </TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Room Type</TableHead>
            <TableHead>Vacancy</TableHead>
            <TableHead>Price/Day</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        {
          RentalSpaces.length > 0 ?
            <TableBody>
              {RentalSpaces.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <img src={item.image} alt="rental-space" className="w-10 h-10" />
                  </TableCell>
                  <TableCell>{item.address}</TableCell>
                  <TableCell>{item.room_type}</TableCell>
                  <TableCell>{item.room_vacancy}</TableCell>
                  <TableCell>{item.price_per_day}</TableCell>
                  <TableCell>{item.description.length < 50 ? item.description : item.description.slice(0, 50) + "..."
                  }</TableCell>
                  <TableCell className="text-right flex items-end justify-end cursor-pointer">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <BsThreeDotsVertical size={18} />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem className="text-green-500 cursor-pointer" onClick={
                          () => approveSpace(item.id)}>
                          <FcApproval className="mr-2" />
                          Approve
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500 cursor-pointer"
                          onClick={() => deleteSpace(item.id)}
                        >
                          <MdDeleteForever className="mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            :
            <TableBody>
              <TableRow>
                <TableCell colSpan={7} className="text-center py-10">No Data</TableCell>
              </TableRow>
            </TableBody>
        }
      </Table>
    </div>
  );
};

export default ProductList;
