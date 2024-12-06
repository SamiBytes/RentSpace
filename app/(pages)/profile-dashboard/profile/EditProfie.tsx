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
import { useEffect } from "react";
import axios from "axios";

export default ({ data }: { data: any }) => {
  const [profile, setProfile] = useState({
    name: "N/A",
    contact: "N/A",
    address: "N/A",
  });

  useEffect(() => {
    console.log("-----------------------------------");
    console.log(data.name);
    setProfile({
      name: data.name,
      contact: data.contact,
      address: data.address,
    });
  }, [data]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProfile((prev) => ({ ...prev, [id]: value }));
  };

  const submitProfile = () => {
    // Send the updated data to the server
    const access_token = JSON.parse(localStorage.getItem("user_data") || "{}")["access_token"];
    axios
      .put(
        `${process.env.NEXT_PUBLIC_ROOT_URL}/users/profile/`,
        {
          name: profile.name,
          address: profile.address,
          contact: profile.contact,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        // Refresh the page after the API call succeeds
        location.reload();
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });

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
            onClick={() => submitProfile()}
            type="submit"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  );
};
