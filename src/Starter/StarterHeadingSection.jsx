import React from "react";

const StarterHeadingSection = () => {
  return (
    <section
      id="starter_platform_header"
      className="bg-[#fef5ed] py-20 text-center relative overflow-hidden"
      data-cl-theme="light"
      data-cl-background="background-03"
    >
      <div className="max-w-4xl mx-auto px-4 z-10 relative">
        <p className="text-sm font-medium text-[#33475b] bg-[#d4eaf5] px-3 py-1 rounded-md inline-block mb-4">
          Starter Customer Platform
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Buy HubSpot Starter Today
        </h1>
        <p className="text-base sm:text-lg text-slate-700 mt-4">
          Startups and small businesses like yours are a great fit for HubSpot’s
          Starter Customer Platform. It includes the Starter edition of each
          HubSpot product, bundled together at a lower rate.
        </p>
      </div>

      {/* Background Shape */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-orange-400 rounded-full opacity-80 translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default StarterHeadingSection;
