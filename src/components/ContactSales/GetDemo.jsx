import React from "react";

const GetDemo = () => {
  return (
    <section id="csol_book_a_meeting" className="bg-white py-16">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Get a Demo</h2>
          <p className="mt-2 text-sm text-gray-600">
            Complete the form for a free demo of HubSpot’s software.
          </p>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First row */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Second row */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Third row */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Website URL<span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Full-width selects */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Employees<span className="text-red-500">*</span>
            </label>
            <select
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Please Select</option>
              <option>1</option>
              <option>2 to 5</option>
              <option>6 to 10</option>
              <option>11 to 25</option>
              <option>26 to 50</option>
              <option>51 to 200</option>
              <option>201 to 1,000</option>
              <option>1,001 to 10,000</option>
              <option>10,001 or more</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Country of Company Headquarters
              <span className="text-red-500">*</span>
            </label>
            <select
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Please Select</option>
              <option>United States</option>
              <option>India</option>
              <option>United Kingdom</option>
              {/* Add more as needed */}
            </select>
          </div>

          {/* Privacy notice */}
          <div className="md:col-span-2 text-xs text-gray-500">
            We’re committed to your privacy. HubSpot uses the information you
            provide to contact you about our relevant content, products, and
            services. You may unsubscribe at any time. For more information,
            check out our{" "}
            <a href="#" className="underline text-blue-600">
              Privacy Policy
            </a>
            .
          </div>

          {/* Submit button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetDemo;
