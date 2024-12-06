
import Filter from "./Filter";
import Tabss from "./Tabs";
const page = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row gap-6 p-4">
        {/* Left Filter Section */}
        <section className="basis-1/4 lg:basis-1/5 bg-white rounded-lg p-2 hidden md:block">
          <Filter />
        </section>

        {/* Right Content Section */}
        <section className="flex-1">
          <Tabss />
        
        </section>
      </div>
    </section>
  );
};

export default page;
