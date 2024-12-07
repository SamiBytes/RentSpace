"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone } from "lucide-react";
import { FaEnvelope, FaLifeRing, FaPhoneAlt } from "react-icons/fa";
import Appointment from "./BookNow";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
// Define the type for params
interface Params {
  id: string; // or number depending on your actual param type
}

const RentDetails = ({ params }: { params: Params | any }) => {
  // Unwrap params and assert the type
  const unwrappedParams = React.use(params) as Params; // Type assertion here

  const [rentDetails, setRentDetails] = useState({
    "id": 1,
    "image": "",
    "address": "",
    "room_type": "",
    "room_vacancy": 0,
    "price_per_day": 0,
    "description": "",
    "latitude": 232.212,
    "longitude": 12.212,
    "verified": true,
    "created_at": "",
    "user": 0,
  });

  useEffect(() => {
    const fetchingEncyclopedia = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_ROOT_URL}/users/public-rent-space/?id=${unwrappedParams.id}`,
        );
        console.log(res.data);
        setRentDetails({
          id: res.data.id,
          image: res.data.image,
          address: res.data.address,
          room_type: res.data.room_type,
          room_vacancy: res.data.room_vacancy,
          price_per_day: res.data.price_per_day,
          description: res.data.description,
          latitude: res.data.latitude,
          longitude: res.data.longitude,
          verified: res.data.verified,
          created_at: res.data.created_at,
          user: res.data.user
        });
      } catch (error: any) {
        console.log(error);
      }
    };

    fetchingEncyclopedia();
  }, [unwrappedParams.id]);

  return (
    <div className="mt-3">
      <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-8">
        {/* Main Image and Map */}

        <Tabs className="w-full md:w-1/2 " defaultValue="image">
          <TabsList>
            <TabsTrigger value="image">Images</TabsTrigger>
            <TabsTrigger value="map">See Location On Google Map</TabsTrigger>
          </TabsList>
          <TabsContent value="image">
            <img
              src={rentDetails.image}
              alt="rent"
              className="rounded-2xl max-w-full h-auto shadow-md "
            />
          </TabsContent>
          <TabsContent value="map">
            <iframe
              src={`https://maps.google.com/maps?q=${rentDetails.latitude},${rentDetails.longitude}&z=15&output=embed`}
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </TabsContent>
        </Tabs>

        {/* Rent Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {/* Rent Name */}
          </h1>

          <p className="text-gray-600 mb-6">{rentDetails.description}</p>

          <div className="space-y-3">
            <p>
              <span className="font-semibold text-gray-700">Price:</span>{" "}
              <span className="text-xl font-semibold">{rentDetails.price_per_day}</span>
              $/night
            </p>

            <p>
              <span className="font-semibold text-gray-700">Location:</span>{" "}
              {rentDetails.address}
            </p>
            <p>
              <span className="font-semibold text-gray-700">
                Available Rooms:
              </span>{" "}
              {rentDetails.room_vacancy}
            </p>
            <div>
              <div className="border p-4 rounded-md bg-gray-50 shadow-sm space-y-4">
                <h1>
                  Details
                </h1>
                <hr className="border-gray-300" />
                <p>
                  {rentDetails.description}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <Appointment id={rentDetails.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentDetails;