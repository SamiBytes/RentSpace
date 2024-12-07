"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import axios from "axios";
import { toast } from "sonner";

export default function AppointmentDialog({ id }: { id: number }) {
  const [isOpen, setIsOpen] = useState(false); // State to control modal visibility
  const [data, setData] = useState({
    rent_space: 0,
    total_days: 0,
    booking_date: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const bookNow = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("user_data") || "{}");
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_ROOT_URL}/users/application/`,
        {
          rent_space: id,
          total_days: data.total_days,
          booking_date: data.booking_date,
        },
        {
          headers: {
            Authorization: `Bearer ${userData.access_token}`,
          },
        }
      );
      console.log(res.data);
      toast.success("Application Submitted");
      setIsOpen(false); // Dismiss the modal
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit application. Please try again.");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <div className="bg-[#008966] flex items-center text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
          <BsCashCoin className="mr-2" /> Book Now
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Schedule an Appointment</DialogTitle>
          <DialogDescription>
            Please fill in the details for your booking.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Date Picker */}
          <div>
            <label
              htmlFor="appointment-date"
              className="block text-sm font-medium text-gray-700"
            >
              Booking Date
            </label>
            <input
              onChange={handleChange}
              value={data.booking_date}
              type="date"
              name="booking_date"
              id="appointment-date"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>

          {/* Required Rooms */}
          <div>
            <label
              htmlFor="required-rooms"
              className="block text-sm font-medium text-gray-700"
            >
              Days to Stay
            </label>
            <input
              onChange={handleChange}
              value={data.total_days}
              type="number"
              name="total_days"
              id="required-rooms"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          {/* Submit Button */}
          <div>
            <Button onClick={bookNow} className="bg-[#008966]" type="button">
              Confirm
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}