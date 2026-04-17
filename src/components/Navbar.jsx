import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ProductsDropdown from "./dropdowns/ProductsDropdown";
import SolutionsDropdown from "./dropdowns/SolutionsDropdown";
import ResourcesDropdown from "./dropdowns/ResourcesDropdown";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="px-4 py-4 flex justify-between items-center pl-60">
        {/* Logo + Desktop nav */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-xl font-bold text-blue-800">
            <img src="logo.svg" alt="logo Image" className="h-[28px] " />
            
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 font-LexendDeca relative">
            {/* Products */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("products")}
                className="hover:text-blue-500 hover:underline text-[16px] text-gray-900 flex items-center gap-1"
              >
                Products <IoIosArrowDown className="text-2xl pt-1" />
              </button>
              {openDropdown === "products" && (
                <div className="absolute left-[-160px] top-full mt-4.5 w-screen max-w-6xl z-40">
                  <ProductsDropdown />
                </div>
              )}
            </div>

            {/* Solutions */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("solutions")}
                className="hover:text-blue-500 hover:underline text-[16px] text-gray-900 flex items-center gap-1"
              >
                Solutions <IoIosArrowDown className="text-2xl pt-1" />
              </button>
              {openDropdown === "solutions" && (
                <div className="absolute inset-x-0 top-full pl-75 flex justify-center mt-4 z-40">
                  <div className="w-[90vw]">
                    <SolutionsDropdown />
                  </div>
                </div>
              )}
            </div>

            {/* Pricing */}
            <Link
              to="/pricing"
              className="hover:text-blue-500 hover:underline text-[16px] text-gray-900"
            >
              Pricing
            </Link>

            {/* Resources */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("resources")}
                className="hover:text-blue-500 hover:underline text-[16px] text-gray-900 flex items-center gap-1"
              >
                Resources <IoIosArrowDown className="text-2xl pt-1" />
              </button>
              {openDropdown === "resources" && (
                <div className="absolute left-[-160px] top-full mt-4.5 w-screen max-w-6xl z-40">
                  <ResourcesDropdown />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right-side desktop buttons */}
        <div className="hidden md:flex space-x-4 pr-60">
          <Link to="/login">
            <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5">
              Get a demo
            </button>
          </Link>
          <button className="text-red-700 border border-red-700 hover:bg-red-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5">
            Get started free
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() =>
              toggleDropdown(openDropdown === "mobile" ? null : "mobile")
            }
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  openDropdown === "mobile"
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {openDropdown === "mobile" && (
        <div className="md:hidden px-4 pb-3 space-y-2 z-40 bg-white shadow-lg">
          <Link to="/products" className="block text-gray-700">
            Products
          </Link>
          <Link to="/solutions" className="block text-gray-700">
            Solutions
          </Link>
          <Link to="/pricing" className="block text-gray-700">
            Pricing
          </Link>
          <Link to="/blog" className="block text-gray-700">
            Blog
          </Link>
          <Link to="/docs" className="block text-gray-700">
            Docs
          </Link>
          <Link to="/login" className="block text-gray-700">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
