
"use client";
import { useSearchParams } from "next/navigation";
import Tabss from "./Tabs";

const Page = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search") || ""; // Get the "search" parameter

  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row gap-6 p-4">
        {/* Left Filter Section */}
        {/* <section className="basis-1/4 lg:basis-1/5 bg-white rounded-lg p-2 hidden md:block">
          <Filter />
        </section> */}

        {/* Right Content Section */}
        <section className="flex-1">
          <h1 className="text-2xl font-semibold text-gray-600">
            You searched for: <span className="ml-2">{searchTerm}</span>
          </h1>
          <Tabss search={searchTerm}/>
        </section>
      </div>
    </section>
  );
};

export default Page;