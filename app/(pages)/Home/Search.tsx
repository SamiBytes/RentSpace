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
  const router = useRouter();
  const [category, setCategory] = React.useState("all");
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchTerm ? `?search=${encodeURIComponent(searchTerm)}` : "";
    router.push(`/search/${category}${query}`);
  };

  return (
    <form
      className="max-w-lg mx-auto pt-8"
      onSubmit={handleSubmit}
    >
      <div className="flex">
        <div className="relative w-full">
          <Input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Rents with location"
            className="w-full rounded-l-md pl-4 pr-[3.5rem] text-white placeholder-gray-500 bg-black/50 backdrop-blur-md"
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