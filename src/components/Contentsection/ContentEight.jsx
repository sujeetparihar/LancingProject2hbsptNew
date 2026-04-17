import React from "react";

const ComponetEight = () => {
  return (
    <section className="bg-cyan-200 py-6 flex justify-center items-center">
      <div className="max-w-7xl mx-90 px-1 flex   items-center">
        {/* Text Content */}
        <div className="max-w-4xl ">
          <h2 className="font-semibold text-sm text-gray-900 mb-2">
            Meet Breeze — The complete AI solution for your business.
          </h2>
          <p className="text-sm text-gray-800 leading-relaxed">
            Use Breeze Copilot to assist with tasks, Breeze Agents to automate
            your work, Breeze Intelligence to enrich your data, and a growing
            list of Breeze features to help you get work done faster.
          </p>
        </div>

        {/* Button */}
        <div className="shrink-0 mt-1">
          <a
            href=""
            className="bg-gray-900 text-white text-xs font-semibold px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Learn more
            <span className="sr-only">about HubSpot's AI tools</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComponetEight;
