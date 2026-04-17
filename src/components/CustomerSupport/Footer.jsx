import React from "react";

const Footer = () => {
  const logoUrl =
    "https://help.hubspot.com/hubfs/HubSpot_Logos/HSLogo_gray.svg?t=1477504449039";
  const logoAlt = "HubSpot";
  const copyright = "Copyright © 2025 HubSpot, Inc.";

  const links = [
    { label: "Legal Stuff", href: "https://legal.hubspot.com/legal-stuff" },
    {
      label: "Privacy Policy",
      href: "https://legal.hubspot.com/privacy-policy",
    },
    { label: "Manage Cookies", href: "", role: "button" },
  ];

  return (
    <footer className="bg-[#2c3e50] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Logo + Copyright */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <a href="https://www.hubspot.com" className="mb-2" id="footer-logo">
            <img src={logoUrl} alt={logoAlt} className="h-8" />
          </a>
          <span className="text-sm text-gray-300" id="copywrite">
            {copyright}
          </span>
        </div>

        {/* Right: Links */}
        <ul className="flex gap-6 text-sm font-medium text-gray-200 footer-link">
          {links.map((link, index) => (
            <li
              key={index}
              className={
                link.label === "Manage Cookies"
                  ? "hs-footer-cookie-settings"
                  : ""
              }
              data-test-id={
                link.label === "Manage Cookies"
                  ? "footer-settings-btn"
                  : undefined
              }
            >
              <a
                href={link.href}
                role={link.role || undefined}
                id={
                  link.label === "Manage Cookies"
                    ? "hs-eu-footer-settings-link"
                    : undefined
                }
                className="hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
