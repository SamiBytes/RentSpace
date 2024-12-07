import { Button } from "@/components/ui/button";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";

import Link from "next/link";
const RentCard = ({
  id,
  imageSrc,
  location,
  description,
  price,
  room,
}: {
  id: number;
  imageSrc: string;  
  location: string;
  description: string;
  price: number;
  room: number;
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Left Image Section */}
      <Link className="md:w-1/3" href={`/single-rent/${id}`}>
        <img
          src={imageSrc}
          className="h-full w-full object-cover cursor-pointer hover:underline rounded-l-md hover:scale-95 duration-200"
        />
      </Link>

      {/* Right Information Section */}
      <div className="flex flex-col justify-between p-6 md:w-2/3">
        <div>
          {/* Location */}
          <div className="flex items-center text-md text-gray-500 mt-2">
            <FaMapMarkerAlt className="text-primary mr-2" />
            {location}
          </div>

          {/* Number of People */}
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <MdOutlineBedroomParent className="text-primary mr-2" />
            {room} Rooms
          </div>

          {/* Description */}
          <p className="text-gray-700 mt-4">{description}</p>
        </div>

        {/* Price and Action Buttons */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-primary">${price}/night</span>
          <Link href={`/single-rent/${id}`}>
            <Button className="bg-[#008966] text-white">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RentCard;
