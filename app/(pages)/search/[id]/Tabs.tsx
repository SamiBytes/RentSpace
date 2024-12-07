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

const Tabss = ({ search }: { search: string }) => {
  const [spaces, setSpaces] = useState([]);
  const [filteredSpaces, setFilteredSpaces] = useState([]);

  useEffect(() => {
    // Fetch data from API
    axios
      .get(`${process.env.NEXT_PUBLIC_ROOT_URL}/users/public-rent-space/`)
      .then((res) => {
        setSpaces(res.data);
      });
  }, []);

  useEffect(() => {
    // Filter spaces based on the search term
    if (search) {
      const lowerCaseSearch = search.toLowerCase();
      setFilteredSpaces(
        spaces.filter((space: any) =>
          space.address.toLowerCase().includes(lowerCaseSearch)
        )
      );
    } else {
      setFilteredSpaces(spaces); // Show all spaces if no search term
    }
  }, [spaces]);

  return (
    <div className="max-w-7xl mx-auto mt-8">
      {/* Tabs */}
      <Tabs defaultValue="Hotels" className="mb-8">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="Hotels">Available Rents</TabsTrigger>
            <TabsTrigger value="Map">Map View</TabsTrigger>
          </TabsList>          
        </div>
        <Sheet>
          <SheetTrigger className="bg-[#008966] text-white px-2 py-1 mt-2 rounded-md md:hidden block ">
            Filter
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Filter</SheetTitle>
            <Filter />
            <Button className="mt-4 ">Apply</Button>
          </SheetContent>
        </Sheet>

        <TabsContent value="Hotels" className="p-4 rounded-lg">
          {/* Grid for Cards */}
          {
            filteredSpaces.length === 0 && (
              <div className="text-center text-gray-500">
                <img src="https://placehold.co/150x150?text=No%20Results" alt="Empty" className="w-1/4 mx-auto" />
              </div>
            )
          }          
          <div className="grid grid-cols-1 gap-4">
            {filteredSpaces.map((space: any, i) => (
              <RentCard
                id={space.id}
                imageSrc={space.image}                
                location={space.address}
                description={
                  space.description.length > 30
                    ? space.description.substring(0, 30) + "..."
                    : space.description
                }
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