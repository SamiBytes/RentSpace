"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";

export function EditSpaceDetails({ data, fun }: { data: any; fun: Function }) {
  const [spaceDetails, setSpaceDetails] = useState({
    id: 0,
    image: "",
    address: "",
    room_type: "",
    room_vacancy: 0,
    price_per_day: 0,
    description: "",
    latitude: 0,
    longitude: 0,
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to control dialog visibility

  useEffect(() => {
    setSpaceDetails(data);
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSpaceDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated rental space details:", spaceDetails);
    EditSpaceDetails(); // Call the API to update the data    
  };

  const EditSpaceDetails = async () => {
    const userData = JSON.parse(localStorage.getItem("user_data") || "{}");
    await axios.put(
      `${process.env.NEXT_PUBLIC_ROOT_URL}/users/rent-space/${spaceDetails.id}`,
      spaceDetails,
      {
        headers: {
          Authorization: `Bearer ${userData.access_token}`,
        },
      }
    );
    fun();
    setIsDialogOpen(false);
  };

  return (
    <div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger
          className="text-blue-600 flex items-center gap-2 text-sm ml-3 mt-1"
          onClick={() => setIsDialogOpen(true)}
        >
          <FaRegEdit size={17} className="mr-2" />
          Edit
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Rental Space Details</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 mt-4">
            <div>
              <Label htmlFor="name">Address</Label>
              <Input
                id="address"
                value={spaceDetails.address}
                onChange={handleChange}
                placeholder="Enter space name"
                required
              />
            </div>
            <div>
              <Label htmlFor="price">Price/Night</Label>
              <Input
                id="price_per_day"
                value={spaceDetails.price_per_day}
                onChange={handleChange}
                placeholder="Enter price"
                required
              />
            </div>
            <div>
              <Label htmlFor="status">Room Type</Label>
              <Input
                id="room_type"
                value={spaceDetails.room_type}
                onChange={handleChange}
                placeholder="Available or Booked"
                required
              />
            </div>
            <div>
              <Label htmlFor="status">Description</Label>
              <Input
                id="description"
                value={spaceDetails.description}
                onChange={handleChange}
                placeholder="Available or Booked"
                required
              />
            </div>
            <div>
              <Label htmlFor="status">Room Vacancy</Label>
              <Input
                id="room_vacancy"
                value={spaceDetails.room_vacancy}
                onChange={handleChange}
                placeholder="Available or Booked"
                required
              />
            </div>
            <div className="col-span-full">
              <Button type="submit" className="w-full bg-[#008966]">
                Save Changes
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditSpaceDetails;