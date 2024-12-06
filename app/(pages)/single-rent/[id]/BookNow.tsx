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

export default function AppointmentDialog() {
  const [data, setData] = useState({
    date: "",
    requiredRooms: "",
    daysToStay: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <Dialog>
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
              Select Date
            </label>
            <input
              onChange={handleChange}
              value={data.date}
              type="date"
              name="date"
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
              Required Rooms
            </label>
            <input
              onChange={handleChange}
              value={data.requiredRooms}
              type="number"
              name="requiredRooms"
              id="required-rooms"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>

          {/* Days to Stay */}
          <div>
            <label
              htmlFor="days-to-stay"
              className="block text-sm font-medium text-gray-700"
            >
              Days to Stay
            </label>
            <input
              onChange={handleChange}
              value={data.daysToStay}
              type="number"
              name="daysToStay"
              id="days-to-stay"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>



          {/* Submit Button */}
          <div>
            <Button className="bg-[#008966]" type="submit">Confirm</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
