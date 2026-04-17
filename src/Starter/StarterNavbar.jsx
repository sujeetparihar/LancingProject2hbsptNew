import React from "react";

const StarterNavbar = ({
  logoSrc = "logo.svg",
  logoAlt = "HubSpot Logo",
  logoLink = "/",
}) => {
  return (
    <nav className=" top-0 w-full bg-white shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href={logoLink} aria-label={logoAlt} className="flex-shrink-0">
            <img src={logoSrc} alt={logoAlt} className="h-7 w-auto" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default StarterNavbar;
