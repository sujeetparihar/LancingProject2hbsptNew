import React, { useEffect, useState } from "react";

const SupportAlertBanner = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const userLang = "en";

    const injectContent = (results) => {
      if (!Array.isArray(results)) return;
      setMessages(results);
    };

    const processBanner = (results) => {
      const sessionKey = "HSSupportAnnouncements";
      const cached = sessionStorage.getItem(sessionKey);

      if (cached) {
        const data = JSON.parse(cached);
        if (data.lang === userLang) {
          injectContent(data.messages);
          return;
        }
      }

      injectContent(results);
      const newCache = { lang: userLang, messages: results };
      sessionStorage.setItem(sessionKey, JSON.stringify(newCache));
    };

    window.processBanner = processBanner;

    const script = document.createElement("script");
    script.src =
      "https://script.google.com/macros/s/AKfycbySpmgzEjP1bEnrLD5xM_fdMOxDn47Kt9buJO9HtQER7pZmhu0/exec?lang=en&type=kb&callback=processBanner";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      delete window.processBanner;
      document.body.removeChild(script);
    };
  }, []);

  if (!messages.length) return null;

  return (
    <div
      id="kb-alert"
      className="alert bg-orange-50 border border-orange-300 py-3"
    >
      {messages.map((msg, idx) => (
        <div key={idx} className="max-w-5xl mx-auto px-4">
          <p className="banner-message-text text-sm text-orange-900">
            {msg.message}
            {msg.ctaLink && msg.ctaText && (
              <a
                href={msg.ctaLink}
                className="ml-2 underline text-orange-700 banner-cta-link"
              >
                {msg.ctaText}
              </a>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SupportAlertBanner;
