"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusIcon } from "lucide-react";

const AddNewSpace = () => {
  const [newSpace, setNewSpace] = useState({
    name: "",
    location: "",
    price: "",
    status: "Available",
    description: "",
  });

  const [image, setImage] = useState<File | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setNewSpace((prev) => ({ ...prev, [id]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);

    if (file) {
      const reader = new FileReader();
    //   reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
    //   setImagePreview(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New rental space details:", { ...newSpace, image });

    
    setNewSpace({
      name: "",
      location: "",
      price: "",
      status: "Available",
      description: "",
    });
    setImage(null);
   
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="mb-4 bg-[#008966] text-primary-foreground shadow hover:bg-primary/90 flex items-center px-2 py-2 rounded-md">
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
            <Label htmlFor="name">Space Name</Label>
            <Input
              id="name"
              value={newSpace.name}
              onChange={handleChange}
              placeholder="Enter space name"
              required
            />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={newSpace.location}
              onChange={handleChange}
              placeholder="Enter location"
              required
            />
          </div>
          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              value={newSpace.price}
              onChange={handleChange}
              placeholder="Enter price (e.g., $800/month)"
              required
            />
          </div>
          <div>
            <Label htmlFor="status">Status</Label>
            <Input
              id="status"
              value={newSpace.status}
              onChange={handleChange}
              placeholder="Available or Booked"
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
         
          </div>
          <Button className="bg-[#008966]" type="submit">Add Space</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewSpace;
