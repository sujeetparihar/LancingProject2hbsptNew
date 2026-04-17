import React, { useRef } from "react";

const LogoCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const scrollAmount = 300;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const logos = [
    {
      src: "https://www.hubspot.com/hubfs/eBay%20logo%20for%20HS%20website%20(new%20sizing).svg",
      alt: "eBay",
    },
    {
      src: "https://www.hubspot.com/hubfs/DoorDash%20logo%20for%20HS%20website%20(new%20sizing).svg",
      alt: "DoorDash",
    },
    {
      src: "https://www.hubspot.com/hubfs/Reddit%20logo%20for%20HS%20website%20(new%20sizing).svg",
      alt: "Reddit",
    },
    {
      src: "https://www.hubspot.com/hubfs/eventbrite%20logo%20for%20HS%20website%20(new%20sizing).svg",
      alt: "Eventbrite",
    },
    {
      src: "https://www.hubspot.com/hubfs/TripAdvisor%20logo%20for%20HS%20website%20(new%20sizing).svg",
      alt: "TripAdvisor",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-6 text-center">
          258,000+ customers in more than 135 countries grow their businesses
          with HubSpot
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth px-10 justify-center"
          >
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
