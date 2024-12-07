"use client";
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
import { useState, useEffect } from "react";
import axios from "axios";

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
      `${process.env.NEXT_PUBLIC_ROOT_URL}/users/rent-space/`,
      {
        headers: {
          Authorization: `Bearer ${userData.access_token}`,
        },
      }
    );
    setRentalSpaces(res.data);
  };

  const deleteSpace = async (id: number) => {
    const userData = JSON.parse(localStorage.getItem("user_data") || "{}");
    await axios.delete(
      `${process.env.NEXT_PUBLIC_ROOT_URL}/users/rent-space/${id}`,
      {
        headers: {
          Authorization: `Bearer ${userData.access_token}`,
        },
      }
    );
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <div className="flex items-center space-x-3">
        {/* addNewSpace */}
        <AddNewSpace fun={fetchData} />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Space Address</TableHead>
            <TableHead>Vacany</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {RentalSpaces.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.address}</TableCell>
              <TableCell>{item.room_vacancy}</TableCell>
              <TableCell>{item.price_per_day}</TableCell>
              <TableCell>{item.verified ? "Verified" : "Not Verified"}</TableCell>
              <TableCell className="text-right flex items-end justify-end cursor-pointer">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <BsThreeDotsVertical size={18} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="text-red-500 cursor-pointer" onClick={() => deleteSpace(item.id)}>
                      <MdDeleteForever className="mr-2" />
                      Delete
                    </DropdownMenuItem>
                    <EditSpaceDetails data={item} fun={fetchData} />
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
