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

const Tabss = () => {
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
            {Array.from({ length: 7 }).map((_, i) => (
              <RentCard
                imageSrc="/img1.jpg"
                title="Hotel Prince Natore"
                location="Adi Tangail, Natore"
                description="A beautiful apartment in the heart of the city, close to popular attractions and transport."
                key={i}
                price={20}
                people={2}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="Map">
          {/* Map Component */}
          <div className="h-[500px] w-full bg-red-500"></div>
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
