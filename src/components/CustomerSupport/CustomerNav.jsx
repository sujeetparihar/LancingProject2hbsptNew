import React, { useState } from "react";

const languages = [
  { name: "Español", code: "es", href: "/es/", disabled: false },
  { name: "Deutsch", code: "de", href: "/de/", disabled: false },
  { name: "日本語", code: "ja", href: "/ja/", disabled: false },
  { name: "Português", code: "pt", href: "/pt/", disabled: false },
  { name: "Français", code: "fr", href: "/fr/", disabled: false },
  { name: "Nederlands", code: "nl", disabled: true },
  { name: "Italiano", code: "it", disabled: true },
  { name: "Polski", code: "pl", disabled: true },
  { name: "Svenska", code: "sv", disabled: true },
  { name: "Suomi", code: "fi", disabled: true },
  { name: "中文 - 繁體", code: "zh-tw", disabled: true },
  { name: "Dansk", code: "da", disabled: true },
  { name: "Norsk", code: "no", disabled: true },
  { name: "한국어", code: "ko", disabled: true },
  { name: "ไทย", code: "th", disabled: true },
  { name: "中文 - 简体", code: "zh-cn", disabled: true },
  { name: "English", code: "en", href: "/", hidden: true },
];

const 

LanguageDropdownHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="relative">
          <button
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <span className="material-icons text-base">language</span>
            <span>English</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" />
            </svg>
          </button>

          {isOpen && (
            <ul className="absolute z-10 mt-2 w-48 bg-white border rounded shadow-md">
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  className={`px-4 py-2 text-sm whitespace-nowrap ${
                    lang.disabled
                      ? "text-gray-400 cursor-not-allowed"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  {lang.disabled ? (
                    <span>{lang.name}</span>
                  ) : (
                    <a
                      href={lang.href}
                      lang={lang.code}
                      className="block w-full"
                    >
                      {lang.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-cyan-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </button>
          <a
            href="//app.hubspot.com/home"
            className="text-sm font-medium text-gray-800 hover:underline"
          >
            Go to my account
          </a>
          <a
            href="https://offers.hubspot.com/crm-platform-demo"
            className="bg-[#FF6536] text-white text-sm font-semibold px-5 py-2 rounded-md hover:bg-[#e85127]"
          >
            Get a demo
          </a>
          <a
            href="https://app.hubspot.com/signup-hubspot/crm"
            className="border border-[#FF6536] text-[#FF6536] text-sm font-semibold px-5 py-2 rounded-md hover:bg-[#FFF4F0]"
          >
            Get started free
          </a>
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdownHeader;
