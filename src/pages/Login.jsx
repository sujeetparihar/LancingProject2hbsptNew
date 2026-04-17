import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12 text-[#33475b] font-sans">
      {/* Top: Logo Centered */}
      <div className="mb-2">
        <a href="#">
          <img
            src="//static.hsappstatic.net/ui-images/static-2.783/optimized/hubspot-wordmark.svg"
            alt="HubSpot Logo"
            className="h-10 mx-auto"
          />
        </a>
      </div>

      {/* Signup link */}
      <div className="text-base text-center text-slate-700 mb-10">
        Don’t have an account?{" "}
        <a href="#" className="text-[#00a4bd] font-semibold hover:underline">
          Get started free
        </a>
      </div>

      {/* Info Banner */}
      <div className="w-full max-w-[850px] border border-[#00a4bd] text-sm p-6 mb-10 rounded text-center">
        <h5 className="font-bold text-base mb-2">
          Login faster and safer to your HubSpot account
        </h5>
        <p className="text-[15px]">
          Next time we’ll remember how you’d like to sign in so you can skip
          entering an email. You can always go back to{" "}
          <a href="#" className="text-[#00a4bd] font-semibold hover:underline">
            classic login
          </a>
          .
        </p>
      </div>

      {/* Login Section */}
      <div className="flex flex-col lg:flex-row gap-10 max-w-[900px] w-full">
        {/* Email Form */}
        <form className="w-full lg:w-1/2 flex flex-col gap-5">
          <div>
            <label
              htmlFor="email"
              className="block text-[15px] font-semibold mb-2"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-5 py-3 text-[#33475b] bg-[#f5f8fa] border border-[#cbd6e2] rounded-md text-[15px] focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#ff7a59] hover:bg-[#ff5c3b] text-white font-bold text-[15px] py-3 rounded-md transition"
          >
            Next
          </button>
        </form>

        {/* Social Logins */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {[
            {
              icon: "//static.hsappstatic.net/LoginUI/static-1.12140/img/google-logo.png",
              text: "Sign in with Google",
            },
            {
              icon: "//static.hsappstatic.net/LoginUI/static-1.12140/img/ms-logo.png",
              text: "Sign in with Microsoft",
            },
            {
              icon: "//static.hsappstatic.net/LoginUI/static-1.12140/img/apple-logo.png",
              text: "Sign in with Apple",
            },
            {
              icon: "",
              text: "Log in with SSO",
            },
          ].map((btn, idx) => (
            <button
              key={idx}
              disabled
              className="flex items-center justify-center gap-3 bg-[#f5f8fa] text-[#bcc3d2] font-semibold text-[15px] py-3 px-4 rounded-md border border-[#cbd6e2] cursor-not-allowed"
            >
              {btn.icon && <img src={btn.icon} alt="" className="h-5 w-5" />}
              {btn.text}
            </button>
          ))}
        </div>
      </div>

      {/* CTA Bottom */}
      <div className="mt-14 text-center">
        <p className="text-[#33475b] font-semibold text-base mb-5">
          Get a demo of our premium software or upgrade your free account today
          by buying Starter
        </p>
        <div className="flex justify-center gap-5">
          <a
            href="/demo"
            className="border border-orange-500 text-orange-500 px-7 py-2.5 rounded-md font-semibold text-[15px] hover:bg-orange-50 transition"
          >
            Get a demo
          </a>
          <a
            href="starter"
            className="border border-orange-500 bg-orange-500 text-white px-7 py-2.5 rounded-md font-semibold text-[15px] hover:bg-orange-600 transition"
          >
            Buy Starter
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
