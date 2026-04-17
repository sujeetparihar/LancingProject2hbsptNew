const Contentone = () => {
  return (
    <section className="bg-[#FFF4EC] py-16 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left content */}
        <div className="max-w-xl text-left space-y-6">
          <p className="text-xs font-semibold text-[#33475b] tracking-wider">
            HUBSPOT CUSTOMER PLATFORM
          </p>

          <h1 className="text-5xl font-bold text-[#2E475D] leading-tight">
            With HubSpot, you <i>can</i> have it all
          </h1>

          <p className="text-base text-[#33475B]">
            Unify your growing business on one AI-powered platform that’s easy
            to use, delivers ROI in no time, and transforms customer happiness
            into your competitive edge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://offers.hubspot.com/crm-platform-demo"
              className="bg-[#FF5C35] hover:bg-[#e24d2b] text-white font-semibold px-6 py-3 rounded-md text-sm"
            >
              Get a demo
            </a>

            <a
              href="https://app.hubspot.com/signup-hubspot/crm"
              className="border border-[#FF5C35] text-[#FF5C35] font-semibold px-6 py-3 rounded-md text-sm hover:bg-[#fff0ea]"
            >
              Get started free
            </a>
          </div>

          <p className="text-xs text-[#33475B]">
            Get a demo of our premium software, or get started with free tools.
          </p>
        </div>

        {/* Right image */}
        <div className="mb-12 md:mb-0 md:ml-8">
          <img
            src="/Componentone.png"
            alt="HubSpot illustration"
            className="w-full max-w-[600px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Contentone;
