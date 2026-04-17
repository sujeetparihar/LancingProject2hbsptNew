import React from "react";

const StarterMultiColumnContent = () => {
  return (
    <section
      id="starter_platform_multi_column_content"
      className="bg-white py-20 px-4"
      data-cl-theme="light"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Marketing Hub */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://www.hubspot.com/hubfs/Imported%20sitepage%20images/marketing-hub-icon.svg"
              alt="Marketing Hub"
              className="w-20 h-20 mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2">Marketing Hub™</h3>
            <div className="text-slate-600 text-sm space-y-1">
              <p>Email marketing</p>
              <p>Marketing automation</p>
              <p>Form builder</p>
              <p>Marketing analytics</p>
            </div>
          </div>

          {/* Sales Hub */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://www.hubspot.com/hubfs/Imported%20sitepage%20images/sales-hub-icon.svg"
              alt="Sales Hub"
              className="w-20 h-20 mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2">Sales Hub®</h3>
            <div className="text-slate-600 text-sm space-y-1">
              <p>Deal pipelines</p>
              <p>Sales email templates</p>
              <p>Meeting scheduler</p>
              <p>Sales analytics</p>
            </div>
          </div>

          {/* Content Hub */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://www.hubspot.com/hubfs/Imported%20sitepage%20images/content-hub-icon.svg"
              alt="Content Hub"
              className="w-20 h-20 mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2">Content Hub™</h3>
            <div className="text-slate-600 text-sm space-y-1">
              <p>Website builder</p>
              <p>AI content writer</p>
              <p>Premium hosting & security</p>
              <p>Reporting dashboards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarterMultiColumnContent;
