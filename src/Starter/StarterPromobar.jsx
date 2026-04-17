import React from "react";

const StarterPromoBar = () => {
  return (
    <section
      id="starter_platform_csol_promo_bar"
      className="bg-[#bff1f2] py-2 w-full text-center "
      data-cl-theme="light"
      data-cl-background="background-02"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h5 className="text-lg sm:text-xl font-bold text-gray-800">
          Save up to 40% off Starter Customer Platform for your first year!
        </h5>
        <p className="text-base sm:text-lg text-gray-800 mt-1">
          $9/mo or $15/mo per seat based on payment plan. Offer available for a
          limited time.
        </p>
      </div>
    </section>
  );
};

export default StarterPromoBar;
