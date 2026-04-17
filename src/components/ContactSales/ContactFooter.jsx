import React from "react";

const ContactFooter = () => {
  return (
    <footer className="bg-[#132537] text-white text-center py-6 text-sm">
      <div className="max-w-6xl mx-auto">
        {/* Copyright */}
        <p className="mb-3">Copyright © 2025 HubSpot, Inc.</p>

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-4 text-[13px] font-medium">
          <li>
            <a href="#" className="hover:underline text-white">
              Legal Stuff
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-white">
              Security
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-white">
              Website Accessibility
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-white">
              Manage Cookies
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default ContactFooter;
