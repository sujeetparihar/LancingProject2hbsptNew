import React, { useState } from "react";

const DemoRequestSection = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    employees: "",
    country: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="text-center p-6 bg-[#f5f8ff]">
        <p className="text-lg font-medium text-[#33475b]">
          Thank you! We will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#fdf3ea] py-12 px-4 md:px-8 flex flex-col md:flex-row gap-10 items-center justify-center">
      {/* Left Side */}
      <div className="max-w-lg">
        <h2 className="text-3xl font-bold text-[#2e475d] mb-4">
          Get a Free Demo of <br />
          HubSpot’s Customer Platform
        </h2>
        <p className="text-[#33475b] mb-4">
          HubSpot’s AI-powered customer platform has all the tools you need for
          marketing, sales, and customer service — all in one place. It’s easy
          to use, provides value fast, and gives your whole team a unified view
          of every customer.
        </p>
        <p className="text-[#33475b] mb-6">
          Get a demo to see for yourself how HubSpot’s customer platform can
          help you achieve your most ambitious growth goals.
        </p>
        <div className="flex gap-6 justify-center">
          <img src="leader.png" alt="Grid Leader" className="h-28" />
          <img src="usability.png" alt="Best Usability" className="h-28" />
          <img src="result.png" alt="Best Results" className="h-28" />
        </div>
      </div>

      {/* Right Side Form */}
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 bg-white p-6 shadow-md rounded-md w-full max-w-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First name <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company name <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Website URL <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Employees <span className="text-red-500">*</span>
          </label>
          <select
            name="employees"
            required
            value={formData.employees}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="" disabled>
              Please Select
            </option>
            <option value="1-10">1 - 10</option>
            <option value="11-50">11 - 50</option>
            <option value="51-200">51 - 200</option>
            <option value="201-500">201 - 500</option>
            <option value="501-1000">501 - 1000</option>
            <option value="1001+">1001+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Country of Company Headquarters{" "}
            <span className="text-red-500">*</span>
          </label>
          <select
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="" disabled>
              Please Select
            </option>
            <option value="United States">United States</option>
            <option value="India">India</option>
            <option value="Germany">Germany</option>
            <option value="Australia">Australia</option>
            <option value="United Kingdom">United Kingdom</option>
          </select>
        </div>

        <p className="text-xs text-[#33475b]">
          We're committed to your privacy. HubSpot uses the information you
          provide to us to contact you about our relevant content, products, and
          services. You may unsubscribe from these communications at any time.
          For more information, check out our{" "}
          <a href="#" className="underline text-blue-700">
            Privacy Policy
          </a>
          .
        </p>

        <div className="text-center">
          <button
            type="submit"
            className="bg-[#ff5c35] text-white px-8 py-4 rounded-2xl text-xl font-bold hover:bg-[#e34e2b] transition duration-200"
          >
            {loading ? "Submitting..." : "Get your free demo"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DemoRequestSection;
