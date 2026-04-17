import { useState } from "react";
import { TbGlobeFilled, TbMessages } from "react-icons/tb";
import { IoMdContacts } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const languages = [
  "English",
  "日本語",
  "Deutsch",
  "Español",
  "Português",
  "Français",
];
const aboutOptions = [
  "About Us",
  "Careers",
  "Contact Us",
  "Investor Relations",
  "Management Team",
];

const Topnavbar = ({ onToggleContrast }) => {
  const [selectedLang, setSelectedLang] = useState("English");
  const [langOpen, setLangOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);

  const handleLanguageSelect = (lang) => {
    setSelectedLang(lang);
    setLangOpen(false);
  };

  const handleContrastToggle = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    if (onToggleContrast) onToggleContrast(newValue);
  };

  return (
    <div className="bg-white shadow-sm flex justify-around">
      <div className="flex justify-between pl-5 pr-10 w-[1080px] h-[52px]">
        <div className="flex justify-between items-center relative">
          {/* Left Section */}
          <ul className="flex flex-wrap gap-4 [&>*]:text-sm [&>*]:font-normal [&>*]:font-LexendDeca items-center">
            {/* Language Selector */}
            <li
              className="relative cursor-pointer flex items-center gap-1"
              onClick={() => setLangOpen(!langOpen)}
            >
              <TbGlobeFilled className="text-base" />
              {selectedLang}
              <svg
                className={`w-3 h-3 ml-1 transition-transform duration-200 ${
                  langOpen ? "rotate-180" : ""
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" />
              </svg>

              {langOpen && (
                <ul className="absolute top-full left-0 mt-2 w-32 bg-white border rounded shadow-md z-50">
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t rotate-45"></div>
                  {languages.map((lang, i) => (
                    <li
                      key={i}
                      onClick={() => handleLanguageSelect(lang)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* High Contrast Toggle */}
            <li
              className="flex items-center gap-2 cursor-pointer hover:border-b-1"
              onClick={handleContrastToggle}
            >
              <div
                className={`w-10 h-5 flex items-center border rounded-full p-[2px] ${
                  isHighContrast ? "bg-black" : "bg-white"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-black rounded-full transform transition-transform duration-200 ${
                    isHighContrast ? "translate-x-5" : ""
                  }`}
                />
              </div>
              <span>High Contrast</span>
            </li>

            {/* Customer Support */}
            <li className="flex items-center gap-2 cursor-pointer">
              <TbMessages className="text-base" />
              <Link
                to="/customer"
                className="hover:border-b-1 hover:text-blue-900"
              >
                Customer Support
              </Link>
            </li>

            {/* Contact Sales */}
            <li className="flex items-center gap-2 cursor-pointer">
              <IoMdContacts className="text-base" />
              <Link
                to="/contact"
                className="hover:border-b-1 hover:text-blue-900"
              >
                Contact Sales
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center">
          <ul className="flex gap-5 text-sm font-normal font-LexendDeca items-center">
            <li className="flex items-center gap-2">
              <IoIosSearch />
              <Link
                to="/login"
                className="hover:border-b-1 hover:text-blue-900"
              >
                Log in
              </Link>
            </li>

            {/* About Dropdown */}
            <li
              className="relative cursor-pointer flex items-center gap-1 hover:border-b-1 hover:text-blue-900"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              <span>About</span>
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${
                  aboutOpen ? "rotate-180" : ""
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" />
              </svg>

              {aboutOpen && (
                <ul className="absolute top-full right-0 mt-2 w-52 bg-white border rounded shadow-md z-50 text-sm font-medium text-gray-900">
                  <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t rotate-45"></div>
                  {aboutOptions.map((item, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topnavbar;
