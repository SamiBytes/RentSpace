"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone } from "lucide-react";
import { FaEnvelope, FaLifeRing, FaPhoneAlt } from "react-icons/fa";
import Appointment from "./BookNow";
import { useEffect, useState } from "react";
import axios from "axios";

const RentDetails = ({ params }: { params: any }) => {
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
          `${process.env.NEXT_PUBLIC_BASE_URL}/users/public-rent-space/?id=${params.id}`,
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
  }, [params.id]);

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
              src="/img1.jpg"
              alt="rent"
              className="rounded-2xl max-w-full h-auto shadow-md "
            />
          </TabsContent>
          <TabsContent value="map">Map </TabsContent>
        </Tabs>
        {/* </div> */}

        {/* Rent Details */}
        <div className="w-full md:w-1/2">
          {/* Rent Name */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {rentDetails.title}
          </h1>

          {/* Rent Description */}
          <p className="text-gray-600 mb-6">{rentDetails.description}</p>

          {/* Rent Information */}
          <div className="space-y-3">
            <p>
              <span className="font-semibold text-gray-700">Price:</span>{" "}
              <span className="text-xl font-semibold">{rentDetails.price}</span>
              $/night
            </p>

            <p>
              <span className="font-semibold text-gray-700">Location:</span>{" "}
              {rentDetails.location}
            </p>
            <p>
              <span className="font-semibold text-gray-700">
                Available Rooms:
              </span>{" "}
              {rentDetails.availableRooms}
            </p>
            <div>
              <div className="font-semibold text-gray-700  mb-2">Contact:</div>
              <div className="border p-4 rounded-md bg-gray-50 shadow-sm space-y-4">
                {/* Hotel Name */}
                <div className="flex items-center text-gray-700 space-x-2">
                  <Phone size={20} className="text-primary" />
                  <span className="font-medium">Hotel Prince Natore</span>
                </div>
                <hr className="border-gray-300" />

                {/* Contact Details */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <FaPhoneAlt className="text-primary" />
                    <span>
                      Call -{" "}
                      <a
                        href="tel:+8801713243663"
                        className="hover:underline text-blue-600"
                      >
                        +88-0171-324-3663
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <FaEnvelope className="text-primary" />
                    <span>
                      Email -{" "}
                      <a
                        href="mailto:contact@gmail.com"
                        className="hover:underline text-blue-600"
                      >
                        contact@gmail.com
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <FaLifeRing className="text-primary" />
                    <span>HelpLine - 899548</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4">
            <Appointment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentDetails;
