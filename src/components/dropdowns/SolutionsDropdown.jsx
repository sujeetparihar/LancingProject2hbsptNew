import { FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

const SolutionsDropdown = () => {
  const solutions = [
    {
      id: "marketing",
      title: "Marketing",
      items: [
        { id: "generate-leads", title: "Generate leads", desc: "Convert visitors into contacts for your database." },
        { id: "automate-marketing", title: "Automate marketing", desc: "Create campaigns with automation and AI." },
      ],
    },
    {
      id: "sales",
      title: "Sales",
      items: [
        { id: "build-pipeline", title: "Build pipeline", desc: "Generate a pipeline of high-quality prospects." },
        { id: "close-deals", title: "Close deals", desc: "Streamline your process and close more deals faster." },
      ],
    },
    {
      id: "customer-service",
      title: "Customer Service",
      items: [
        { id: "scale-support", title: "Scale support", desc: "Support customers at scale with AI and a help desk." },
        { id: "drive-retention", title: "Drive retention", desc: "Identify opportunities to improve customer health." },
      ],
    },
    {
      id: "content",
      title: "Content",
      items: [
        { id: "create-content", title: "Create content", desc: "Easily craft content for your audience, with help from AI." },
        { id: "manage-content", title: "Manage content", desc: "Organize, update, and distribute content in one place." },
      ],
    },
    {
      id: "startups",
      title: "Startups & Small Businesses",
      items: [
        { id: "find-customers", title: "Find and reach customers", desc: "Generate leads through content, AI, and automation." },
        { id: "grow-sales", title: "Grow sales and get paid", desc: "Prospect smarter and automate payments." },
        { id: "organize-data", title: "Organize customer data", desc: "Unify your team and data on one platform." },
      ],
    },
    {
      id: "ai",
      title: "Artificial Intelligence",
      items: [
        { id: "ai-support", title: "Resolve customer queries 24/7", desc: "Scale customer service with an AI customer agent." },
        { id: "ai-sales", title: "Automate sales prospecting", desc: "Identify and engage high-value leads with an AI prospecting agent." },
        { id: "ai-content", title: "Accelerate content creation", desc: "Create content in minutes with an AI content agent." },
      ],
    },
  ];

  return (
    <div className="w-[90vw] mx-auto bg-white shadow-xl border border-gray-200 rounded-xl mt-6 scroll-smooth">
      <div className="px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Sidebar */}
        <div className="space-y-3">
          {solutions.map((section) => (
            <Link
              key={section.id}
              to={`/solutions/${section.id}`}
              className="block text-sm font-semibold p-3 rounded-md hover:bg-gray-100 text-gray-900"
            >
              {section.title}
            </Link>
          ))}
        </div>

        {/* Main Content */}
        <div className="md:col-span-3 space-y-12">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-blue-100 pb-6">
            {solutions.slice(0, 3).map((section) => (
              <div
                key={section.id}
                className="hover:bg-gray-50 p-4 rounded-lg transition border border-transparent hover:border-gray-200"
              >
                <Link to={`/solutions/${section.id}`}>
                  <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <FaRegLightbulb className="text-orange-500" />
                    {section.title}
                  </div>
                </Link>
                <div className="space-y-4 mt-4">
                  {section.items.map((item, i) => (
                    <Link
                      to={`/solutions/${section.id}/${item.id}`}
                      key={i}
                      className="block hover:bg-gray-100 p-2 rounded-md transition"
                    >
                      <h4 className="font-semibold text-sm text-gray-800">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {solutions.slice(3).map((section) => (
              <div
                key={section.id}
                className="hover:bg-gray-50 p-4 rounded-lg transition border border-transparent hover:border-gray-200"
              >
                <Link to={`/solutions/${section.id}`}>
                  <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <FaRegLightbulb className="text-orange-500" />
                    {section.title}
                  </div>
                </Link>
                <div className="space-y-4 mt-4">
                  {section.items.map((item, i) => (
                    <Link
                      to={`/solutions/${section.id}/${item.id}`}
                      key={i}
                      className="block hover:bg-gray-100 p-2 rounded-md transition"
                    >
                      <h4 className="font-semibold text-sm text-gray-800">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsDropdown;
