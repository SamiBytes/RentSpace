"use client";
import Features from "./(pages)/Home/Feature";
import Hero from "./(pages)/Home/Hero";
import RentCard from "./(pages)/search/[id]/RentCard";
import { useEffect, useState } from "react";
import axios from "axios";
const Page = () => {
  const [spaces, setPet] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_ROOT_URL}/users/public-rent-space/`,
      )
      .then((res) => {
        setPet(res.data);
      })
  }, []);



  return (
    <div>
      <Hero />
      <Features />

      {/* Grid for Cards */}
      <div className="max-w-7xl mx-auto my-8 ">
        <h1 className="my-4 text-[2rem]">
          Available Rents
        </h1>

        <div className="grid grid-cols-1 gap-4">
          {spaces.map((space: any, i) => (
            <RentCard
              id={space.id}
              imageSrc={
                space.image
              }              
              location={space.address}
              description={space.description.length > 30 ? space.description.substring(0, 30) + "..." : space.description}
              key={i}
              price={space.price_per_day}
              room={space.room_vacancy}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Page;