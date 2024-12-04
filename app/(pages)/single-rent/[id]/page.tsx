"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone } from "lucide-react";
import { FaEnvelope, FaLifeRing, FaPhoneAlt } from "react-icons/fa";
import Appointment from "./BookNow";

const RentDetails = () => {
  const rentDetails = {
    title: "Hotel Prince Natore",
    location: "Adi Tangail, Natore",
    description:
      "A beautiful apartment in the heart of the city, close to popular attractions and transport.",
    price: 20,
    people: 2,
    imageSrc: "/img1.jpg",
    availableRooms: 2,
  };

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
