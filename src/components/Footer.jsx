// src/components/Footer.jsx
// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 mt-10 text-center text-sm py-5 text-gray-600">
//       <p>&copy; {new Date().getFullYear()} HubClone. All rights reserved.</p>
//     </footer>
//   )
// }

// export default Footer;

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  const footerLinks = {
    "Popular Features": [
      "All Products and Features",
      "Free Meeting Scheduler App",
      "Breeze AI Tools",
      "Email Tracking Software",
      "AI Content Writer",
      "AI Website Generator",
      "Email Marketing Software",
      "Lead Management Software",
      "AI Email Writer",
      "Free Website Builder",
      "Sales Email Templates",
      "Free Online Form Builder",
      "Free Chatbot Builder",
      "Free Live Chat Software",
      "Marketing Analytics",
      "Free Landing Page Builder",
      "Free Web Hosting",
    ],
    "Free Tools": [
      "See All Free Business Tools",
      "AI Search Grader",
      "Clip Creator",
      "Website Grader",
      "Make My Persona",
      "Email Signature Generator",
      "Brand Kit Generator",
      "Blog Ideas Generator",
      "Invoice Generator",
      "Free Business Templates",
      "Guide Creator",
      "Software Comparisons Library",
      "Template Marketplace",
      "Campaign Assistant",
      "Landing Page Creator",
    ],
    Company: [
      "About Us",
      "Careers",
      "Management Team",
      "Board of Directors",
      "Investor Relations",
      "Blog",
      "Contact Us",
    ],
    Customers: ["Customer Support", "Join a Local User Group"],
    Partners: [
      "All Partner Programs",
      "Solutions Partner Program",
      "App Partner Program",
      "HubSpot for Startups",
      "Affiliate Program",
    ],
  };

  const legalLinks = [
    "Legal Stuff",
    "Privacy Policy",
    "Security",
    "Website Accessibility",
    "Manage Cookies",
  ];

  return (
    <footer className="bg-[#1e2a35] text-white px-6 py-12 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h4 className="font-bold mb-3">{section}</h4>
            <ul className="space-y-2">
              {links.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="my-8 border-t border-gray-600"></div>

      <div className="flex justify-center gap-5 text-xl mb-6">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaYoutube />
        </a>
        <a href="#">
          <FaXTwitter />
        </a>
        <a href="#">
          <FaLinkedinIn />
        </a>
        <a href="#">
          <FaTiktok />
        </a>
      </div>

      <div className="text-center mb-2">
        <img
          src="/hubspot-logo.svg"
          alt="HubSpot"
          className="h-6 mx-auto mb-2"
        />
        <p className="text-xs text-gray-400">Copyright © 2025 HubSpot, Inc.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-400">
        {legalLinks.map((link) => (
          <a key={link} href="#" className="hover:underline font-semibold">
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}
