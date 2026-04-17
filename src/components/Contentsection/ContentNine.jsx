import React from "react";

const Contentnine = () => {
  const statsData = [
    {
      img: "https://www.hubspot.com/hubfs/2023_MarketingHub_SEO1-2.svg",
      value: "114%",
      description: "more web traffic",
    },
    {
      img: "https://www.hubspot.com/hubfs/2023_CRM_Deal_Tracking2-3.svg",
      value: "55%",
      description: "more deals",
    },
    {
      img: "https://www.hubspot.com/hubfs/2023_ServiceHub_Help_Desk_Ticket1-3.svg",
      value: "43%",
      description: "more tickets resolved",
    },
  ];

  return (
    <section className="bg-gray-900 py-16 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            HubSpot customer’s results after 1 year:
          </h2>
        </div>

        {/* Stats Boxes */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {statsData.map((item, index) => (
            <li
              key={index}
              className="bg-white text-gray-900 p-8 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={item.img}
                  alt={item.description}
                  width="100"
                  height="100"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-extrabold">{item.value}</h3>
              <p className="mt-2 text-sm font-medium">{item.description}</p>
            </li>
          ))}
        </ul>

        {/* Bottom Heading */}
        <div className="text-center mb-6">
          <p className="font-semibold">
            HubSpot customers see improvement across their customer journey.
            What could your ROI be?
          </p>
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-md shadow hover:bg-gray-100 transition">
            See ROI report
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contentnine;
