import React from "react";

const logos = [
  {
    alt: "ebay logo",
    src: "https://www.hubspot.com/hs-fs/hubfs/ebay-logo.png",
  },
  {
    alt: "Doordash logo",
    src: "https://www.hubspot.com/hs-fs/hubfs/doordash-logo.png",
  },
  {
    alt: "reddit logo",
    src: "https://www.hubspot.com/hs-fs/hubfs/reddit-logo-2.png",
  },
  {
    alt: "Tripadvisor logo",
    src: "https://www.hubspot.com/hs-fs/hubfs/tripadvisor-logo-2.png",
  },
  {
    alt: "eventbrite logo",
    src: "https://www.hubspot.com/hs-fs/hubfs/eventbrite-Oct-24-2024-08-17-10-4609-PM.png",
  },
  {
    alt: "zapier logo",
    src: "https://www.hubspot.com/hs-fs/hubfs/zapier-Oct-24-2024-08-17-29-8330-PM.png",
  },
  {
    alt: "WeightWatchers logo",
    src: "https://www.hubspot.com/hs-fs/hubfs/weightwatchers-1.png",
  },
  {
    alt: "Canadian Red Cross logo",
    src: "https://www.hubspot.com/hs-fs/hubfs/canadian-red-cross-2.png",
  },
];

const Contentfour = () => {
  return (
    <section className=" flex items-center justify-center">
      <div
        id="hs_cos_wrapper_homepage_stats_agents"
        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
        data-hs-cos-general-type="widget"
        data-hs-cos-type="module"
      >
        <div className="relative w-full overflow-hidden ">
          <ul className="flex animate-scroll whitespace-nowrap gap-6 py-4">
            {logos.map((logo, index) => (
              <li
                key={index}
                className="cl-carousel-slide csol-logo-carousel-slide -clone"
                data-cy="carousel-slide"
                aria-label={`${index + 1} of ${logos.length}`}
                role="group"
                aria-roledescription="slide"
                aria-hidden="true"
              >
                <div
                  className="csol-logo-carousel-logo-container"
                  data-cy="logo-carousel-image-div"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="csol-logo-carousel-image"
                    width="100"
                    height="72"
                    loading="lazy"
                    srcSet={`${logo.src}?width=50&height=36 50w, ${logo.src}?width=100&height=72 100w, ${logo.src}?width=150&height=108 150w, ${logo.src}?width=200&height=144 200w, ${logo.src}?width=250&height=180 250w, ${logo.src}?width=300&height=216 300w`}
                    sizes="(max-width: 100px) 100vw, 100px"
                  />
                </div>
              </li>
            ))}
          </ul>

          <div
            className="cl-carousel-dots"
            aria-hidden="true"
            data-cy="carousel-dots"
          >
            <div className="cl-carousel-dots-rail" data-cy="carousel-dots-rail">
              <ul
                className="cl-carousel-dots-list"
                data-cy="carousel-dots-list"
                style={{ translate: "0px" }}
              >
                {Array.from({ length: 2 }).map((_, i) => (
                  <li
                    key={i}
                    className={`cl-carousel-dots-item ${
                      i === 0 ? "-active" : ""
                    }`}
                    style={{ scale: 1 }}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contentfour;
