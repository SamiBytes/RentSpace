"use client"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RentCard from "./RentCard";
import Filter from "./Filter";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


import Map from "./Map";
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useEffect, useState } from 'react';

const MapComponent = dynamic(() => import('@/app/(pages)/search/[id]/Map'), {
  ssr: false,
});

const Tabss = () => {
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
    <div className="max-w-7xl mx-auto mt-8">
      {/* Tabs */}
      <Tabs defaultValue="Hotels" className="mb-8">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="Hotels">Available Rents</TabsTrigger>
            <TabsTrigger value="Map">Map View</TabsTrigger>
          </TabsList>
          <Sort />
        </div>
        <Sheet>
          <SheetTrigger className="bg-[#008966] text-white px-2 py-1 mt-2 rounded-md md:hidden block ">Filter</SheetTrigger>
          <SheetContent>
            <SheetTitle>Filter</SheetTitle>
            <Filter />
            <Button className="mt-4 ">Apply</Button>
          </SheetContent>
        </Sheet>

        <TabsContent value="Hotels" className="p-4 rounded-lg">
          {/* Grid for Cards */}
          <div className="grid grid-cols-1 gap-4">
            {spaces.map((space: any, i) => (
              <RentCard
                id={space.id}
                imageSrc={
                  space.image
                }
                title={space.title}
                location={space.address}
                description={space.description.length > 30 ? space.description.substring(0, 30) + "..." : space.description}
                key={i}
                price={space.price_per_day}
                room={space.room_vacancy}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="Map">
          {/* Map Component */}
          {/* <MapComponent /> */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tabss;

const Sort = () => {
  return (
    <div>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Sort By:" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort</SelectLabel>
            <SelectItem value="price-low">Low to High</SelectItem>
            <SelectItem value="price-high">High to Low</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
