import React from "react";

const features = [
  {
    icon: <span>🏠</span>,
    title: "Verified Listings",
    description: "Ensures all properties are legitimate and trustworthy.",
  },
  {
    icon: <span>🔍</span>,
    title: "Advanced Search",
    description:
      "Filter properties by location, budget, type, and availability.",
  },
  {
    icon: <span>📅</span>,
    title: "Scheduling Showings",
    description: "Conveniently schedule property visits within the platform.",
  },
  {
    icon: <span>🗺️</span>,
    title: "Interactive Map",
    description: "Explore rental properties visually using our map feature.",
  },
  {
    icon: <span>📊</span>,
    title: "Analytics Dashboard",
    description: "Get insights on rental performance for landlords.",
  },
  {
    icon: <span>🔒</span>,
    title: "Secure and Protected",
    description: "Your data is our priority. We ensure top-level security.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#269489]">Features</h2>
        <p className="text-gray-600 mb-12">
          For the next level best UI/UX mega projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-md hover:shadow-lg transition duration-300"
            >
              <div className="text-green-500 text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-[#00897B]">{feature.title}</h3>
              <p className=" text-[#00897B]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
