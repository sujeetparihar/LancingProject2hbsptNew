// components/Navbar.jsx

import React from "react";

const ContactNavbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-[51]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" aria-label="HubSpot" className="flex-shrink-0">
            <img src="logo.svg" alt="HubSpot Logo" className="h-7 w-auto" />
          </a>

          {/* Phone Number */}
          <ul className="flex items-center space-x-4">
            <li>
              <a
                href="tel:0008000503669"
                className="text-sm font-semibold text-gray-900 hover:text-orange-600 transition"
              >
                000800 050 3669
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ContactNavbar;
