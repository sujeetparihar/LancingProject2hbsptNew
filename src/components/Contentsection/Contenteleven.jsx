import React from "react";

const ContentEleven = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Text and Buttons */}
        <div className="text-center lg:text-left">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
            Grow better with HubSpot today
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="https://offers.hubspot.com/crm-platform-demo"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-semibold transition"
            >
              Get a demo
            </a>
            <a
              href="https://app.hubspot.com/signup-hubspot/crm"
              className="border border-orange-500 text-orange-500 px-6 py-2 rounded-md text-sm font-semibold transition hover:bg-orange-50"
            >
              Get started free
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:block">
          <img
            src="https://www.hubspot.com/hs-fs/hubfs/cta-content-block-asset-en@2x-2-1.webp?width=380&height=387"
            alt="Grow Better Illustration"
            width="250"
            height="250"
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ContentEleven;
