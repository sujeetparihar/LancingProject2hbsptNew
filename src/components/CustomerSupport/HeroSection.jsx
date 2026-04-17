import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section kb-template kb-template--centered page-layout kb-page bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 text-white py-24 px-4 relative overflow-hidden">
      <div className="hero-wrapper kb-template__section kb-template__section--header">
        <div className="content-container flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold mb-6">How can we help?</h1>
          <div className="search-wrapper w-full max-w-3xl">
            <form className="kb-search-control kb-search-control--xl relative">
              <input
                type="search"
                autoComplete="off"
                placeholder="Search all help and learning resources"
                className="form-control kb-form__control kb-search-control__input w-full px-6 py-4 pr-14 rounded-md bg-white text-gray-800 text-lg shadow focus:outline-none"
                id="hero-search"
                aria-controls="list-hero-search"
                aria-autocomplete="list"
              />
              <div
                className="suggest-container"
                style={{ position: "relative" }}
              >
                <div
                  id="suggest-hero-search"
                  className="autocomplete hidden"
                  style={{
                    position: "absolute",
                    zIndex: 9999,
                    top: "62px",
                    right: 0,
                    width: "736px",
                  }}
                >
                  <ul id="list-hero-search" role="listbox"></ul>
                </div>
              </div>
              <span
                className="kb-search-control__foreground absolute right-4 top-4"
                id="hero-search-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2.5a7.5 7.5 0 010 14.15z"
                  />
                </svg>
              </span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
