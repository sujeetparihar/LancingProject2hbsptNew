const Contenttwo = () => {
  return (
    <section className="bg-[#FFF4EC] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E475D]">
            Introducing Breeze Agents — Your AI Growth Team
          </h2>
          <p className="mt-4 text-[#33475B] text-base max-w-2xl mx-auto">
            HubSpot's AI-powered agents are digital workers that extend your
            team to scale support, automate prospecting, and create content
            faster.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Customer Agent */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <img
              src="https://www.hubspot.com/hs-fs/hubfs/Image%20No.%201%20Customer%20Agent%20%231-1.png?width=312&height=230"
              alt="Customer Agent"
              className="w-full h-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#2E475D] mb-2">
              Customer Agent
            </h3>
            <p className="text-sm text-[#33475B] mb-4">
              Scale support and resolve half of customer inquiries 24/7.
            </p>
            <a
              href="https://www.hubspot.com/products/service/ai-customer-service-agent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              Learn more about customer agent
            </a>
          </div>

          {/* Prospecting Agent */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <img
              src="https://www.hubspot.com/hs-fs/hubfs/Image%20No.%202%20Prospecting%20Agent%20%233-1.png?width=312&height=230"
              alt="Prospecting Agent"
              className="w-full h-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#2E475D] mb-2">
              Prospecting Agent (Beta)
            </h3>
            <p className="text-sm text-[#33475B] mb-4">
              Instantly research, personalize, and execute sales outreach at
              scale.
            </p>
            <a
              href="https://www.hubspot.com/products/sales/ai-prospecting-agent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              Learn more about prospecting agent
            </a>
          </div>

          {/* Content Agent */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <img
              src="https://www.hubspot.com/hs-fs/hubfs/Image%20No.%203%20Content%20Agent%20%231-1.png?width=312&height=230"
              alt="Content Agent"
              className="w-full h-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#2E475D] mb-2">
              Content Agent (Beta)
            </h3>
            <p className="text-sm text-[#33475B] mb-4">
              Create conversion-optimized and on-brand content in minutes.
            </p>
            <a
              href="https://www.hubspot.com/products/content/content-ai-agent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              Learn more about content agent
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contenttwo;
