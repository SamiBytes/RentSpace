"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { IoIosArrowForward } from "react-icons/io";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Filter = () => {
  return (
    <div className="space-y-5">
      <h1 className="font-semibold mb-6 md:block hidden text-xl">Filter</h1>
      <div className="space-y-2">
        <Label htmlFor="search">Where are you going?</Label>
        <Input placeholder="Search locations..." />
      </div>
      <div className="space-y-2">
        <Label htmlFor="search">Property Type</Label>
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Apartments</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Houses</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="option-two" />
            <Label htmlFor="option-three">Comercial Spaces</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-four" id="option-two" />
            <Label htmlFor="option-four">Mess</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="space-y-2">
        <Label htmlFor="toogle" className="my-2">
          Rooms/Guest
        </Label>
        <ToggleGroup type="single" className="flex items-start justify-start">
          <ToggleGroupItem
            className="  bg-[#008966] text-white rounded-full"
            value="a"
          >
            1
          </ToggleGroupItem>
          <ToggleGroupItem
            className="  bg-[#008966] text-white rounded-full"
            value="b"
          >
            2
          </ToggleGroupItem>
          <ToggleGroupItem
            className="  bg-[#008966] text-white rounded-full"
            value="c"
          >
            3
          </ToggleGroupItem>
          <ToggleGroupItem
            className="  bg-[#008966] text-white rounded-full"
            value="d"
          >
            <IoIosArrowForward />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};

export default Filter;
