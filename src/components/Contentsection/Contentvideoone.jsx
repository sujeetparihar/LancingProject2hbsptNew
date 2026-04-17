import React from "react";

const Contentvideoone = () => {
  return (
    <section
      id="homepage_company_story"
      className="bg-gray-100 py-12"
      data-cl-theme="light"
      data-cl-background="background-02"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 p-4 rounded-full"
              aria-label="Play video: HubSpot for marketers"
            >
              ▶
            </button>
            <img
              src="https://www.hubspot.com/hs-fs/hubfs/Homepage%20Video%20Thumbnail%201_2x-1.webp?width=1054&height=620&name=Homepage%20Video%20Thumbnail%201_2x-1.webp"
              alt="How HubSpot works"
              height="620"
              width="1054"
              loading="lazy"
              className="rounded shadow"
              srcSet="
                https://www.hubspot.com/hs-fs/hubfs/Homepage%20Video%20Thumbnail%201_2x-1.webp?width=527&height=310 527w,
                https://www.hubspot.com/hs-fs/hubfs/Homepage%20Video%20Thumbnail%201_2x-1.webp?width=1054&height=620 1054w,
                https://www.hubspot.com/hs-fs/hubfs/Homepage%20Video%20Thumbnail%201_2x-1.webp?width=1581&height=930 1581w,
                https://www.hubspot.com/hs-fs/hubfs/Homepage%20Video%20Thumbnail%201_2x-1.webp?width=2108&height=1240 2108w,
                https://www.hubspot.com/hs-fs/hubfs/Homepage%20Video%20Thumbnail%201_2x-1.webp?width=2635&height=1550 2635w,
                https://www.hubspot.com/hs-fs/hubfs/Homepage%20Video%20Thumbnail%201_2x-1.webp?width=3162&height=1860 3162w"
              sizes="(max-width: 1054px) 100vw, 1054px"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              What is HubSpot?
            </h2>
            <p className="text-gray-700">
              HubSpot is an AI-powered customer platform with all the software,
              integrations, and resources you need to connect your marketing,
              sales, and customer service. HubSpot's connected platform enables
              you to grow your business faster by focusing on what matters most:
              your customers.
            </p>
            <p className="text-gray-700">
              Get a demo to learn about our premium software, or get started
              with our full suite of free tools and upgrade as you grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded text-center"
                href="https://offers.hubspot.com/crm-platform-demo"
                target="_blank"
                rel="noreferrer"
              >
                Get a demo
                <span className="sr-only">of HubSpot's customer platform</span>
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
      </div>
    </section>
  );
};

export default Contentvideoone;
