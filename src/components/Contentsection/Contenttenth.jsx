import React, { Component } from "react";
import Contentfive from "./Contentfive";

const Contenttenth = () => {
  const integrations1 = [
    {
      src: "https://www.hubspot.com/hubfs/gmail-icon-1.svg",
      alt: "Gmail",
    },
    {
      src: "https://www.hubspot.com/hubfs/shopify-icon-1.svg",
      alt: "Shopify",
    },
    {
      src: "https://www.hubspot.com/hubfs/mailchimp-icon-1.svg",
      alt: "Mailchimp",
    },
    {
      src: "https://www.hubspot.com/hubfs/zapier-icon-1.svg",
      alt: "Zapier",
    },
    {
      src: "https://www.hubspot.com/hubfs/google-ads-icon-1.svg",
      alt: "Google Ads",
    },
    {
      src: "https://www.hubspot.com/hubfs/slack-icon-1.svg",
      alt: "Slack",
    },
  ];

  const integrations2 = [
    {
      src: "https://www.hubspot.com/hs-fs/hubfs/G2%20badges%20all/G2%20badges%20Winter%202023/badge-leader.png?width=200&height=260&name=badge-leader.png",
      alt: "G2 Leader Winter 2024",
    },
    {
      src: "https://www.hubspot.com/hs-fs/hubfs/G2%20badges%20all/G2%20badges%20Winter%202023/bagde-most-implementable.png?width=220&height=286&name=bagde-most-implementable.png",
      alt: "G2 Most Implementable Winter 2024",
    },
    {
      src: "https://www.hubspot.com/hs-fs/hubfs/G2%20badges%20all/G2%20badges%20Winter%202023/badge-best-relationships.png?width=400&height=519&name=badge-best-relationships.png",
      alt: "G2 Best Relationship Award",
    },
    {
      src: "https://www.hubspot.com/hs-fs/hubfs/G2%20badges%20all/G2%20badges%20Winter%202023/best-support-enterprise.png?width=400&height=519&name=best-support-enterprise.png",
      alt: "G2 Best Support Enterprise",
    },
    {
      src: "https://www.hubspot.com/hs-fs/hubfs/G2%20badges%20all/G2%20badges%20Winter%202023/badge-best-results-mid-market.png?width=400&height=519&name=badge-best-results-mid-market.png",
      alt: "G2 Best Results Mid-Market",
    },
    {
      src: "https://www.hubspot.com/hs-fs/hubfs/G2%20badges%20all/G2%20badges%20Winter%202023/badge-best-usability-enterprise.png?width=400&height=519&name=badge-best-usability-enterprise.png",
      alt: "G2 Best Usability Enterprise",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          {/* Left Box */}
          <div className="bg-white border rounded-lg p-6 flex-1">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-6 justify-items-center">
              {integrations1.map((tool, idx) => (
                <img
                  key={idx}
                  src={tool.src}
                  alt={tool.alt}
                  width="70"
                  height="70"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold mb-2">
                1,800+ ways to connect your tools
              </h3>
              <a
                href="https://ecosystem.hubspot.com/marketplace/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                View all apps
              </a>
            </div>
          </div>

          {/* Right Box */}
          <div className="bg-white border rounded-lg p-6 flex-1">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-6 justify-items-center">
              {integrations2.map((badge, idx) => (
                <img
                  key={idx}
                  src={badge.src}
                  alt={badge.alt}
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
              ))}
            </div>
            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold mb-2">
                Voted #1 in 442 Reports
              </h3>
              <a
                href="https://www.hubspot.com/company-news/hubspot-named-1-global-software-company"
                className="text-blue-600 font-medium hover:underline"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contenttenth;
