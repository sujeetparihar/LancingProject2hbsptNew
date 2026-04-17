import React from "react";
import { Phone, MessageSquare, Calendar } from "lucide-react"; // Using Lucide icons

const ContactHero = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text & Contact Options */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us About HubSpot's Software
          </h1>
          <p className="text-gray-600 text-lg mb-10">
            We'd love to show you how you can get more traffic and leads,
            increase your sales productivity, provide better customer service,
            or all of the above! Here are a few ways to reach out to our sales
            team.
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Call Card */}
            <div className="border rounded-lg p-6 text-center">
              <Phone className="mx-auto text-blue-500 mb-3" size={28} />
              <p className="font-medium text-gray-800">Call us directly</p>
              <p className="text-blue-800 font-semibold text-sm mt-2">
                000800 050 3669
              </p>
              <a
                href="#"
                className="text-sm text-blue-600 underline mt-2 inline-block"
              >
                See more local numbers
              </a>
            </div>

            {/* Chat Card */}
            <div className="border rounded-lg p-6 text-center">
              <MessageSquare className="mx-auto text-blue-500 mb-3" size={28} />
              <p className="font-medium text-gray-800">
                Chat with our sales team
              </p>
              <button className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm rounded">
                Chat with Sales
              </button>
            </div>

            {/* Demo Card */}
            <div className="border rounded-lg p-6 text-center">
              <Calendar className="mx-auto text-blue-500 mb-3" size={28} />
              <p className="font-medium text-gray-800">Get a product demo</p>
              <button className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm rounded">
                Get a demo
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://www.hubspot.com/hs-fs/hubfs/1-Apr-23-2025-09-55-48-1463-AM.png"
            alt="Contact"
            className="w-full max-w-md lg:max-w-lg"
            loading="eager"
            decoding="sync"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
