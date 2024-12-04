import { BackgroundImage } from "./BackgroundImage";
import Search from "./Search";

export default () => {
  return (
    <div className="relative h-[70vh]">
      {/* Background layer */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Container for the background image */}
      <div className="absolute inset-0">
        <BackgroundImage />
      </div>

      {/* Overlay text */}
      <div className="absolute top-2/4 z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4">
        <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
          Find the right apartment for you.
        </h1>
        {/* Search */}
        <Search />
      </div>
    </div>
  );
};
