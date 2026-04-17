import React from "react";

const Contentfive = () => {
  return (
    <section id="homepage_crm_platform" className="bg-neutral-100 py-12">
      <div className="max-w-6xl mx-auto px-4 space-y-8 text-center">
        <img
          className="w-full mx-auto"
          src="https://www.hubspot.com/hs-fs/hubfs/crm-platform-asset-alt@2x%20(1)%20(1).webp?width=920&height=475"
          alt="HubSpot's products overview"
          width="920"
          height="475"
          loading="lazy"
          srcSet="
            https://www.hubspot.com/hs-fs/hubfs/crm-platform-asset-alt@2x%20(1)%20(1).webp?width=460&height=238 460w,
            https://www.hubspot.com/hs-fs/hubfs/crm-platform-asset-alt@2x%20(1)%20(1).webp?width=920&height=475 920w,
            https://www.hubspot.com/hs-fs/hubfs/crm-platform-asset-alt@2x%20(1)%20(1).webp?width=1380&height=713 1380w,
            https://www.hubspot.com/hs-fs/hubfs/crm-platform-asset-alt@2x%20(1)%20(1).webp?width=1840&height=950 1840w"
          sizes="(max-width: 920px) 100vw, 920px"
        />

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Your whole front office. One customer platform.
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            HubSpot brings your marketing, sales, and service teams together on
            the same AI-powered customer platform. It's easy to use, provides
            value fast, and gives all teams a unified view of the customer at
            every stage in their journey. Each product in the platform is
            powerful on its own, but the real magic happens when you use them
            together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded text-center"
              href="https://offers.hubspot.com/crm-platform-demo"
              target="_blank"
              rel="noreferrer"
            >
              Get a demo
              <span className="sr-only">of HubSpot's software</span>
            </a>

            <a
              className="bg-white border border-orange-600 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded text-center"
              href="https://app.hubspot.com/signup-hubspot/crm"
              target="_blank"
              rel="noreferrer"
            >
              Get started free
              <span className="sr-only">with HubSpot's free tools</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contentfive;
