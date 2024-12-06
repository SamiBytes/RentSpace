"use client";
import { useState } from "react";
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

export function EditSpaceDetails() {
  const [spaceDetails, setSpaceDetails] = useState({
    name: "Modern Apartment",
    location: "Dhaka, Bangladesh",
    price: "$800",
    status: "Available",
    description: "Spacious apartment with modern amenities.",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSpaceDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated rental space details:", spaceDetails);
    // Optionally close the dialog after saving
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger className="text-blue-600 flex items-center gap-2 text-sm ml-3 mt-1">
          <FaRegEdit size={17} className="mr-2" />
          Edit
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Rental Space Details</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 mt-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={spaceDetails.name}
                onChange={handleChange}
                placeholder="Enter space name"
                required
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={spaceDetails.location}
                onChange={handleChange}
                placeholder="Enter location"
                required
              />
            </div>
            <div>
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                value={spaceDetails.price}
                onChange={handleChange}
                placeholder="Enter price"
                required
              />
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              <Input
                id="status"
                value={spaceDetails.status}
                onChange={handleChange}
                placeholder="Available or Booked"
                required
              />
            </div>
            <div className="col-span-full ">
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
