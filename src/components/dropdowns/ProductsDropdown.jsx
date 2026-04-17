import { Link } from "react-router-dom";
import {
  FiZap,
  FiStar,
  FiHeart,
  FiPlay,
  FiSettings,
  FiTrendingUp,
  FiTarget,
  FiActivity,
  FiLayers,
  FiUsers,
  FiGrid,
} from "react-icons/fi";

const features = [
  {
    icon: <FiZap className="text-orange-500 text-2xl" />, // Marketing Hub
    title: "Marketing Hub",
    desc: "Marketing automation software",
    linkText: "Free and premium plans",
    link: "/products/marketing",
  },
  {
    icon: <FiStar className="text-orange-500 text-2xl" />,
    title: "Sales Hub",
    desc: "Sales software",
    linkText: "Free and premium plans",
    link: "/products/sales",
  },
  {
    icon: <FiHeart className="text-orange-500 text-2xl" />,
    title: "Service Hub",
    desc: "Customer service software",
    linkText: "Free and premium plans",
    link: "/products/service",
  },
  {
    icon: <FiPlay className="text-orange-500 text-2xl" />,
    title: "Content Hub",
    desc: "Content marketing software",
    linkText: "Free and premium plans",
    link: "/products/content",
  },
  {
    icon: <FiSettings className="text-orange-500 text-2xl" />,
    title: "Operations Hub",
    desc: "Operations software",
    linkText: "Free and premium plans",
    link: "/products/operations",
  },
  {
    icon: <FiTrendingUp className="text-orange-500 text-2xl" />,
    title: "Commerce Hub",
    desc: "B2B commerce software",
    linkText: "Free and premium plans",
    link: "/products/commerce",
  },
  {
    icon: <FiTarget className="text-orange-500 text-2xl" />,
    title: "Smart CRM",
    desc: "AI-powered CRM software",
    linkText: "Learn more",
    link: "/products/smart-crm",
  },
  {
    icon: <FiActivity className="text-orange-500 text-2xl" />,
    title: "Small Business Bundle",
    desc: "Built for startups and small businesses",
    linkText: "Learn more",
    link: "/products/small-business",
  },
];

const bottomLinks = [
  {
    icon: <FiZap className="text-orange-500 text-xl" />,
    title: "Breeze",
    desc: "HubSpot's AI that powers the entire customer platform",
    linkText: "See all AI features",
    link: "/ai",
  },
  {
    icon: <FiUsers className="text-orange-500 text-xl" />,
    title: "Breeze Agents",
    desc: "AI-powered specialists for marketing, sales, and service",
    linkText: "Meet your AI growth team",
    link: "/ai-team",
  },
  {
    icon: <FiGrid className="text-orange-500 text-xl" />,
    title: "App Marketplace",
    desc: "Connect your favorite apps to HubSpot",
    linkText: "See all integrations",
    link: "/integrations",
  },
];

const ProductsDropdown = () => {
  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[90vw] max-w-7xl bg-white shadow-2xl border border-gray-200 rounded-md p-6 z-50">
      <div className="flex flex-wrap justify-between items-start gap-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            The HubSpot Customer Platform
          </h2>
          <p className="text-gray-600 max-w-xl">
            All of HubSpot's marketing, sales, and customer service software on one AI-powered platform.
          </p>
        </div>
        <div className="flex gap-3">
          <Link to="/free-crm">
            <button className="border border-gray-300 px-4 py-2 rounded-md text-blue-600 hover:bg-gray-100 font-medium">
              🔧 Free HubSpot CRM
            </button>
          </Link>
          <Link to="/all-products">
            <button className="border border-gray-300 px-4 py-2 rounded-md text-blue-600 hover:bg-gray-100 font-medium">
              🔧 Overview of all products
            </button>
          </Link>
        </div>
      </div>

      <hr className="my-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((item, i) => (
          <div key={i} className="space-y-1">
            <div className="flex items-center gap-2">
              {item.icon}
              <h3 className="font-semibold text-gray-800 text-base">
                {item.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600">{item.desc}</p>
            <Link to={item.link} className="text-blue-600 text-sm hover:underline">
              {item.linkText}
            </Link>
          </div>
        ))}
      </div>

      <hr className="my-6" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bottomLinks.map((item, i) => (
          <div key={i} className="space-y-1">
            <div className="flex items-center gap-2">
              {item.icon}
              <h4 className="font-semibold text-gray-800 text-base">
                {item.title}
              </h4>
            </div>
            <p className="text-sm text-gray-600">{item.desc}</p>
            <Link to={item.link} className="text-blue-600 text-sm hover:underline">
              {item.linkText}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsDropdown;
