import { Link } from "react-router-dom";
import { FaStar, FaUsers, FaGraduationCap, FaTools, FaHeadphones } from "react-icons/fa";

const ResourcesDropdown = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 grid grid-cols-5 gap-6 w-full max-w-7xl mx-auto">

      {/* Featured Links */}
      <div>
        <div className="flex items-center gap-2 text-gray-800 font-semibold mb-2">
          <FaStar className="text-blue-600" />
          <span>Featured Links</span>
        </div>
        <ul className="space-y-1 text-sm text-gray-600">
          <li><Link to="/product-updates" className="hover:text-blue-600">Spotlight: Product Updates</Link></li>
          <li><Link to="/whats-new" className="hover:text-blue-600">What's New in HubSpot</Link></li>
          <li><Link to="/why-hubspot" className="hover:text-blue-600">Why Choose HubSpot?</Link></li>
          <li><Link to="/diversity-report" className="hover:text-blue-600">Annual Diversity Report</Link></li>
        </ul>
      </div>

      {/* Community & Events */}
      <div>
        <div className="flex items-center gap-2 text-gray-800 font-semibold mb-2">
          <FaUsers className="text-blue-600" />
          <span>Community & Events</span>
        </div>
        <ul className="space-y-1 text-sm text-gray-600">
          <li><Link to="/inbound-event" className="hover:text-blue-600">INBOUND Event</Link></li>
          <li><Link to="/community" className="hover:text-blue-600">HubSpot Community</Link></li>
          <li><Link to="/user-groups" className="hover:text-blue-600">HubSpot User Groups</Link></li>
        </ul>

        <div className="mt-4">
          <div className="text-gray-800 font-semibold mb-2">Partners</div>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><Link to="/solutions-partner" className="hover:text-blue-600">Solutions Partner Program</Link></li>
            <li><Link to="/app-partner" className="hover:text-blue-600">App Partner Program</Link></li>
            <li><Link to="/affiliate-partner" className="hover:text-blue-600">Affiliate Partner Program</Link></li>
            <li><Link to="/education-partner" className="hover:text-blue-600">Education Partner Program</Link></li>
            <li><Link to="/startup-partner" className="hover:text-blue-600">Startup Partner Program</Link></li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div>
        <div className="flex items-center gap-2 text-gray-800 font-semibold mb-2">
          <FaGraduationCap className="text-blue-600" />
          <span>Education</span>
        </div>
        <ul className="space-y-1 text-sm text-gray-600">
          <li><Link to="/blogs" className="hover:text-blue-600">HubSpot Blogs</Link></li>
          <li><Link to="/courses" className="hover:text-blue-600">Free Courses & Certifications</Link></li>
          <li><Link to="/ebooks" className="hover:text-blue-600">Ebooks, Guides & More</Link></li>
          <li><Link to="/inbound-marketing" className="hover:text-blue-600">What Is Inbound Marketing?</Link></li>
          <li><Link to="/knowledge-base" className="hover:text-blue-600">HubSpot Knowledge Base</Link></li>
        </ul>
      </div>

      {/* Tools */}
      <div>
        <div className="flex items-center gap-2 text-gray-800 font-semibold mb-2">
          <FaTools className="text-blue-600" />
          <span>Tools</span>
        </div>
        <ul className="space-y-1 text-sm text-gray-600">
          <li><Link to="/marketplace" className="hover:text-blue-600">Template Marketplace</Link></li>
          <li><Link to="/developer-tools" className="hover:text-blue-600">Developer Tools</Link></li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <div className="flex items-center gap-2 text-gray-800 font-semibold mb-2">
          <FaHeadphones className="text-blue-600" />
          <span>Services</span>
        </div>
        <ul className="space-y-1 text-sm text-gray-600">
          <li><Link to="/onboarding" className="hover:text-blue-600">Onboarding</Link></li>
          <li><Link to="/training" className="hover:text-blue-600">Customer Training</Link></li>
          <li><Link to="/migration" className="hover:text-blue-600">Migration</Link></li>
          <li><Link to="/consulting" className="hover:text-blue-600">Strategic Consulting</Link></li>
          <li><Link to="/technical" className="hover:text-blue-600">Technical Consulting</Link></li>
          <li><Link to="/hire-partner" className="hover:text-blue-600">Hire a Solutions Partner</Link></li>
        </ul>
      </div>

    </div>
  );
};

export default ResourcesDropdown;
