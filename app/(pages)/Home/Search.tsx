"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";


export default function SearchForm() {
  const router =  useRouter();
  const [category, setCategory] = React.useState("all");

  const handleSubmit =(e:any)=>{
    e.preventDefault();
    router.push(`/search/${category}`);
    
  }

  return (
    <form
      className="max-w-lg mx-auto pt-8"
      onSubmit={handleSubmit}
    >
      <div className="flex">
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[180px] rounded-r-none border-r-0">
            <SelectValue placeholder="All categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Properties</SelectItem>
            <SelectItem value="apartments">Apartments</SelectItem>
            <SelectItem value="houses">Houses</SelectItem>
            <SelectItem value="commercial">Commercial Spaces</SelectItem>
          </SelectContent>
        </Select>
        <div className="relative w-full">
          <Input
            type="search"
            placeholder="Search properties, apartments, houses..."
            className="w-full rounded-l-none pl-4 pr-[3.5rem] text-white placeholder-gray-500"
          /> 
          <Button
            variant={"outline"}
            className="absolute top-0 right-0 h-full rounded-l-none"
            type="submit"
          >
            <Search className="text-black" />
          </Button>
        </div>
      </div>
    </form>
  );
}
