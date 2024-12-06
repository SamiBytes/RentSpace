import { BackgroundImage } from "./BackgroundImage";
import Search from "./Search";

export default function Home() {
  return (
    <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh]">
      {/* Background layer */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Container for the background image */}
      <div className="absolute inset-0">
        <BackgroundImage />
      </div>

      {/* Overlay text */}
      <div className="absolute w-full px-4 md:px-8 top-2/4 z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
          Find the right apartment for you.
        </h1>
        {/* Search */}
        <div className="mt-4 md:mt-6">
          <Search />
        </div>
      </div>
    </div>
  );
}

