import React, { useState } from "react";

const tabs = [
  {
    title: "Marketing Hub",
    img: "/mnt/data/Screenshot 2025-07-03 165214.png",
    alt: "Marketing Hub Screenshot",
    description:
      "HubSpot's marketing software has all the tools you need to fill your database with high-quality leads, plus marketing automation to engage leads and customers at the right place and time.",
    features: [
      "Lead-capture forms",
      "Social media management",
      "Email marketing",
      "AI automation",
    ],
  },
  {
    title: "Sales Hub",
    img: "/mnt/data/Screenshot 2025-07-03 165941.png",
    alt: "Sales Hub Screenshot",
    description:
      "Build better pipeline and close more deals with sales software that's built for productivity, accelerates revenue growth, and connects your data, tools, and teams to power relevant customer interactions.",
    features: [
      "Deal management",
      "AI prospecting agent (Beta)",
      "Sales automation",
      "Meeting scheduling",
    ],
  },
  {
    title: "Service Hub",
    img: "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Service%20Hub%20-%20Manage%20Your%20Book%20of%20Business.png",
    alt: "Service Hub Screenshot",
    description:
      "HubSpot's customer service software makes it easy to scale your support with AI-powered self-service tools. And by surfacing upsell or cross-sell opportunities and customer satisfaction trends, you'll have everything you need to drive proactive customer retention.",
    features: [
      "Help desk & ticketing",
      "AI customer agent",
      "Knowledge base",
      "Customer success workspace",
    ],
  },
  {
    title: "Content Hub",
    img: "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Content%20Hub%20AI%20Image%20Generation-2.png",
    alt: "Content Hub Screenshot",
    description:
      "Create and manage personalized content experiences across the customer journey, all with the help of AI. Craft dynamic and personalized content that speaks directly to your audience's needs, and streamline your workflow with centralized asset management.",
    features: [
      "AI content agent",
      "Blog, website & landing pages",
      "SEO recommendations",
      "Content remix",
    ],
  },
  {
    title: "Operations Hub",
    img: "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/OperationsHub_Automate-processes-1.png",
    alt: "Operations Hub Screenshot",
    description:
      "HubSpot's operations software makes it easy to sync, clean, and curate customer data, and automate business processes. You'll be empowered to adapt to the changing needs of your customers, and your internal teams will be better aligned than ever.",
    features: [
      "Data sync",
      "AI-powered deduplication",
      "Programmable automation",
      "Snowflake data share",
    ],
  },
  {
    title: "Commerce Hub",
    img: "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Commerce%20Hub%20Send%20quote%20to%20get%20signed.png",
    alt: "Commerce Hub Screenshot",
    description:
      "Switch from multiple tools to one, with your quoting, payments, reporting, and customer data all under one roof. HubSpot's powerful and easy-to-use commerce tools help your business collect payments and subscriptions — and automate billing.",
    features: [
      "Payment links",
      "Invoices",
      "Custom billing automation",
      "Revenue reporting",
    ],
  },
  {
    title: "Smart CRM",
    img: "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Imported%20sitepage%20images/CRM_CRM-overview-3-1-1.png",
    alt: "Smart CRM Screenshot",
    description:
      "HubSpot Smart CRM powers all of HubSpot’s software by unifying your data, teams, and tech stacks on one platform. And with AI tools baked in, it’s built to revolutionize the way your business creates personalized customer experiences at scale.",
    features: [
      "Contact & company management",
      "AI agents",
      "Custom properties",
      "Team organization",
    ],
  },
];

const LogoCarousel2 = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-wrap gap-3 justify-center border-b pb-3">
          {tabs.map((tab, index) => (
            <li key={index}>
              <button
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 text-sm font-medium rounded-t-md focus:outline-none transition duration-300 ${
                  activeTab === index
                    ? "bg-white border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid md:grid-cols-2 gap-10 items-start">
          <img
            src={tabs[activeTab].img}
            alt={tabs[activeTab].alt}
            className="rounded-md w-full max-w-xl mx-auto"
          />

          <div>
            <p className="text-gray-700 mb-4">{tabs[activeTab].description}</p>
            <h4 className="font-semibold text-gray-800 mb-2">
              Popular features:
            </h4>
            <ul className="list-disc list-inside space-y-1">
              {tabs[activeTab].features.map((feature, i) => (
                <li key={i} className="text-gray-700 font-medium">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel2;
