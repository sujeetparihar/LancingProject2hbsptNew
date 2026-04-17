import React from "react";

const StarterPricingSection = () => {
  return (
    <section
      id="starter_platform_pricing_cards"
      className="bg-white py-20 px-4 text-center"
      data-cl-theme="light"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
          Save up to 40% off Starter for a Limited Time
        </h2>
        <p className="text-lg sm:text-xl text-slate-700 mb-14 max-w-3xl mx-auto">
          For a limited time, we’re offering new customers up to 40% off
          HubSpot’s Starter Customer Platform for the first year. Save more with
          an upfront annual payment, or pay month-to-month for more flexibility.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-8 items-stretch">
          {/* Annual Plan Card */}
          <div className="relative border border-gray-300 p-8 rounded-xl bg-white shadow-lg w-75 max-w-md min-h-[400px] flex flex-col justify-between">
            <div>
              <div className="absolute -top-3 left-5 bg-slate-100 text-slate-800 text-xs font-semibold px-3 py-1 rounded shadow-sm">
                Best Value
              </div>
              <h3 className="text-2xl font-bold mb-1 text-left">
                Pay Annually
              </h3>
              <p className="text-sm text-slate-600 text-left">Starts at</p>
              <p className="text-lg font-bold text-slate-900 text-left">
                $9/month <s className="text-gray-400 font-normal">$15/month</s>{" "}
                per seat*
              </p>
              <p className="text-sm text-slate-600 mt-3 text-left">
                First year only ($15/mo thereafter). Billed annually. Offer
                available for a limited time.
              </p>
            </div>
            <a
              href="https://app.hubspot.com/signup/purchase"
              className="mt-6 inline-block bg-[#ff5c35] hover:bg-[#e04e2d] text-white text-sm font-semibold px-6 py-2 rounded transition"
            >
              Buy Starter for $9/mo
            </a>
          </div>

          {/* Monthly Plan Card */}
          <div className="border border-gray-300 p-8 rounded-xl bg-white shadow-md  max-w-md w-75 min-h-[506px] flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-1 text-left">Pay Monthly</h3>
              <p className="text-sm text-slate-600 text-left">Starts at</p>
              <p className="text-lg font-bold text-slate-900 text-left">
                $15/month <s className="text-gray-400 font-normal">$20/month</s>{" "}
                per seat*
              </p>
              <p className="text-sm text-slate-600 mt-3 text-left">
                First year only ($20/mo thereafter). Billed monthly. Offer
                available for a limited time.
              </p>
            </div>
            <a
              href="https://app.hubspot.com/signup/purchase"
              className="mt-6 inline-block bg-[#ff5c35] hover:bg-[#e04e2d] text-white text-sm font-semibold px-6 py-2 rounded transition"
            >
              Buy Starter for $15/mo
            </a>
          </div>
        </div>

        <p className="text-xs text-slate-500 mt-12 max-w-3xl mx-auto">
          *Discounts available for new customers only. Offer has no set end date
          and can be discontinued at any time. For more detailed information on
          product packaging and the limits that apply, please see our
          <a
            href="https://www.hubspot.com/pricing/suite/starter"
            className="text-blue-600 hover:underline ml-1"
          >
            pricing page
          </a>
          . Price shown in USD and subject to applicable tax.
        </p>
      </div>
    </section>
  );
};

export default StarterPricingSection;
