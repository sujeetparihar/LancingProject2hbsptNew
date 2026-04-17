/**
 * This is a React component replicating the HubSpot Contact Support UI as per the provided image.
 * It includes support plan descriptions, a country selector, a support matrix, and the support links section styled like HubSpot.
 */

import React, { useState } from "react";
import { AlertTriangle, Lightbulb } from "lucide-react";

const ContactSupport = () => {
  const [selectedCountry, setSelectedCountry] = useState("United States");

  const phoneNumbers = {
    "United States": "1-888-HUBSPOT x3 (1-888-482-7768 x3)",
    India: "000800 050 3669",
    Australia: "+61 2 9164 8000",
    Germany: "+49 30 217998000",
    "United Kingdom": "+44 20 7324 3700",
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const supportMatrix = [
    { label: "Community", tiers: [true, true, true, true], icon: "🤝" },
    { label: "Email", tiers: [false, true, true, true], icon: "✉️" },
    { label: "Chat", tiers: [false, true, true, true], icon: "💬" },
    { label: "Phone", tiers: [false, false, true, true], icon: "📞" },
  ];

  return (
    <>
      <section className="bg-[#f5f8fa] px-4 py-12 text-[#33475b]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">
            Contact support
          </h3>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left section */}
            <div className="flex-1">
              <p className="mb-4">
                Having trouble logging in? Try these{" "}
                <a
                  href="https://knowledge.hubspot.com/account/why-can-t-i-log-into-hubspot"
                  className="text-blue-600 underline"
                >
                  troubleshooting steps
                </a>
                .
              </p>

              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <strong>Free tools users</strong> and all View-only Seats
                  users are supported by the{" "}
                  <a
                    href="https://community.hubspot.com"
                    className="text-blue-600 underline"
                  >
                    Community
                  </a>
                  .
                </li>
                <li>
                  <strong>Starter</strong> accounts are supported by the above +{" "}
                  <a
                    href="https://app.hubspot.com/home?autoOpenZorseCreateView=true"
                    className="text-blue-600 underline"
                  >
                    email and chat
                  </a>
                  .
                </li>
                <li>
                  <strong>Professional</strong> and <strong>Enterprise</strong>{" "}
                  accounts are supported by the above + phone.{" "}
                  <a
                    href="https://app.hubspot.com/home?autoOpenWidgetRoute=welcome"
                    className="text-blue-600 underline"
                  >
                    Log into your account
                  </a>{" "}
                  to request a call or contact us directly:
                </li>
              </ul>

              <div className="mt-6">
                <label
                  htmlFor="country-select"
                  className="block text-sm font-medium mb-1"
                >
                  Select your country
                </label>
                <select
                  id="country-select"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  className="w-full p-2 border border-gray-400 rounded-md"
                >
                  {Object.keys(phoneNumbers).map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <p className="mt-2 font-semibold">
                  {phoneNumbers[selectedCountry]}
                </p>
                <p className="text-sm mt-1">
                  Please note that not all phone carriers allow toll-free
                  dialing.
                </p>
              </div>
            </div>

            {/* Right section - Table */}
            <div className="flex-1">
              <div className="overflow-x-auto border border-gray-300 rounded-md">
                <table className="w-full table-auto">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left"></th>
                      <th className="px-4 py-2">Free</th>
                      <th className="px-4 py-2">Starter</th>
                      <th className="px-4 py-2">Professional</th>
                      <th className="px-4 py-2">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {supportMatrix.map((item, i) => (
                      <tr key={i} className="border-t border-gray-200">
                        <td className="px-4 py-3 flex items-center gap-2 font-medium">
                          <span className="text-xl">{item.icon}</span>
                          {item.label}
                        </td>
                        {item.tiers.map((val, j) => (
                          <td key={j} className="px-4 py-2 text-center">
                            {val ? "✔️" : ""}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                View-only Seats users do not have access to email, chat, or
                phone support. If you have multiple HubSpot products, your
                support options are based on your highest subscription. Learn
                more about{" "}
                <a
                  href="https://knowledge.hubspot.com/account/get-help-with-hubspot"
                  className="text-blue-600 underline"
                >
                  getting help with HubSpot
                </a>
                .
              </p>
              <p className="mt-2 text-sm">
                <a
                  href="https://community.hubspot.com/t5/Releases-and-Updates/HubSpot-Support-Hours-amp-Observed-Holidays/ba-p/939549"
                  className="text-blue-600 underline"
                >
                  Support Hours and Observed Holidays
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section - Support Links */}
      <section className="bg-white py-12 text-[#33475b]">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-center gap-12 text-center">
          <div className="flex-1">
            <AlertTriangle className="mx-auto text-[#ff5722] w-10 h-10 mb-4" />
            <p className="font-semibold text-lg leading-snug">
              Get real time updates about <br /> outages and reliability
            </p>
            <a
              href="https://status.hubspot.com/"
              className="inline-block mt-4 bg-[#365571] text-white font-semibold px-5 py-2 rounded hover:bg-[#2b455e]"
            >
              Visit status page
            </a>
          </div>

          <div className="flex-1">
            <Lightbulb className="mx-auto text-[#ff5722] w-10 h-10 mb-4" />
            <p className="font-semibold text-lg leading-snug">
              Work with our training, <br /> consulting, and technical <br />{" "}
              service teams
            </p>
            <a
              href="https://www.hubspot.com/services/professional"
              className="inline-block mt-4 bg-[#365571] text-white font-semibold px-5 py-2 rounded hover:bg-[#2b455e]"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSupport;
