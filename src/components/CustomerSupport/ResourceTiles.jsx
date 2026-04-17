import React from "react";

const ResourceTiles = () => {
  const tiles = [
    {
      title: "Community",
      description:
        "Start a discussion, browse solutions, and get tips from HubSpot experts",
      link: "https://community.hubspot.com/?profile.language=en",
      image:
        "//static.hsappstatic.net/ui-images/static-2.331/optimized/mobile-onboarding-welcome.svg",
    },
    {
      title: "Knowledge Base",
      description: "Read how-to articles and guides for all HubSpot tools",
      link: "https://knowledge.hubspot.com/",
      image:
        "//static.hsappstatic.net/ui-images/static-2.331/optimized/knowledge-base.svg",
    },
    {
      title: "Academy",
      description: "Watch video trainings and get certified in HubSpot",
      link: "https://app.hubspot.com/l/academy/",
      image:
        "//static.hsappstatic.net/ui-images/static-2.331/optimized/training-academy.svg",
    },
    {
      title: "Developer Documentation",
      description: "Read reference documentation for API and CMS development",
      link: "https://developers.hubspot.com/",
      image:
        "//static.hsappstatic.net/ui-images/static-2.331/optimized/api.svg",
    },
    {
      title: "Customer Blog",
      description:
        "Read examples of how real customers use HubSpot for their business",
      link: "https://blog.hubspot.com/customers",
      image:
        "//static.hsappstatic.net/ui-images/static-2.331/optimized/training-crm.svg",
    },
    {
      title: "Solutions Partners",
      description: "Work with a certified Partner to do more in HubSpot",
      link: "https://www.hubspot.com/agencies",
      image:
        "//static.hsappstatic.net/ui-images/static-2.331/optimized/team.svg",
    },
  ];

  return (
    <section
      className="resource-tiles kb-template__section flex flex-col items-center justify-center py-16 px-4"
      id="resource-section"
    >
      <ul className="resource-tiles-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {tiles.map((tile, index) => (
          <li
            key={index}
            className="resource-tile-wrapper bg-white rounded-lg shadow hover:shadow-lg transition-all border border-gray-200 hover:border-blue-300"
          >
            <a href={tile.link} className="block h-full p-6">
              <div className="resource-tile-body text-center">
                <div className="resource-tile-heading-wrapper mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {tile.title}
                  </h2>
                </div>
                <div className="img-wrapper flex justify-center mb-4">
                  <img src={tile.image} alt={tile.title} className="h-20" />
                </div>
                <div className="body-wrapper">
                  <p className="text-gray-600 text-sm">{tile.description}</p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ResourceTiles;
