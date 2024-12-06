"use client";
import { BiSolidEditAlt } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default () => {
  const [profile, setProfile] = useState({
    name: "Night Fury",
    location: "Dhaka, Bangladesh",
    contact: "+880123456789",
    address: "123 Main St, Dhaka, Bangladesh",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProfile((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-4">
          <BiSolidEditAlt className="mr-2" />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={profile.name}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Location
            </Label>
            <Input
              id="location"
              value={profile.location}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="contact" className="text-right">
              Contact
            </Label>
            <Input
              id="contact"
              value={profile.contact}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-right">
              Address
            </Label>
            <Input
              id="address"
              value={profile.address}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            className="bg-[#008966]"
            onClick={() => console.log("Profile updated:", profile)}
            type="submit"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
