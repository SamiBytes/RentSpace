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
import { Textarea } from "@/components/ui/textarea";
import { PlusIcon } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";


const AddNewSpace = ({ fun }: { fun: Function }) => {
  const [newSpace, setNewSpace] = useState({
    image: "",
    address: "",
    room_type: "",
    room_vacancy: 0,
    price_per_day: 0,
    description: "",
    latitude: 0,
    longitude: 0,
  });


  const [isUploading, setIsUploading] = useState(false);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State for dialog open/close

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setNewSpace((prev) => ({ ...prev, [id]: value }));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const imgbbAPIKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`,
        formData
      );

      const imageUrl = response.data.data.url; // Get the uploaded image URL
      setNewSpace((prev) => ({ ...prev, image: imageUrl }));
      toast.success("Image uploaded successfully.");
    } catch (error) {
      toast.error("Failed to upload image. Please try again.");
      console.error("Image upload error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New rental space details:", newSpace);

    try {
      const userData = JSON.parse(localStorage.getItem("user_data") || "{}");
      await axios.post(
        `${process.env.NEXT_PUBLIC_ROOT_URL}/users/rent-space/`,
        {
          ...newSpace,
          latitude,
          longitude,
        },
        {
          headers: {
            Authorization: `Bearer ${userData.access_token}`,
          },
        }
      );

      toast.success("Added new rental space.");
      fun();
      setIsDialogOpen(false); // Close the dialog after successful submission
    } catch (_error) {
      toast.error("Failed to add new rental space.");
    }

    // Reset form after submission
    setNewSpace({
      image: "",
      address: "",
      room_type: "",
      room_vacancy: 0,
      price_per_day: 0,
      description: "",
      latitude: 0,
      longitude: 0,
    });
    setLatitude(null);
    setLongitude(null);
  };

  // Fetch geolocation on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting geolocation", error);
        }
      );
    }
  }, []);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <div className="mb-4 bg-[#008966] text-primary-foreground shadow hover:bg-primary/90 flex items-center px-2 py-2 rounded-md cursor-pointer">
          <PlusIcon size={20} className="mr-2" />
          Add New Space
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Rental Space</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 mt-4">
          <div>
            <Label htmlFor="address">Location</Label>
            <Input
              id="address"
              value={newSpace.address}
              onChange={handleChange}
              placeholder="Enter location"
              required
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <Label htmlFor="price_per_day">Price per day</Label>
              <Input
                id="price_per_day"
                type="number"
                value={newSpace.price_per_day}
                onChange={handleChange}
                placeholder="Enter price per day"
                required
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="room_vacancy">Room vacancy</Label>
              <Input
                id="room_vacancy"
                type="number"
                value={newSpace.room_vacancy}
                onChange={handleChange}
                placeholder="Enter number of rooms available"
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="room_type">Room Type</Label>
            <Input
              id="room_type"
              value={newSpace.room_type}
              onChange={handleChange}
              placeholder="Enter room type"
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={newSpace.description}
              onChange={handleChange}
              placeholder="Enter a brief description of the space"
              required
            />
          </div>
          <div>
            <Label htmlFor="image">Space Image</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            {newSpace.image && (
              <div className="mt-2">
                <img
                  src={newSpace.image}
                  alt="Space Preview"
                  className="w-32 h-32 object-cover rounded-md"
                />
              </div>
            )}
          </div>
          <Button className="bg-[#008966]" type="submit" disabled={isUploading}>
            {isUploading ? "Uploading Image..." : "Add Space"}
          </Button>
        </form>
        {latitude !== null && longitude !== null && (
          <div className="mt-2">
            <p>Latitude: {latitude}, Longitude: {longitude}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AddNewSpace;