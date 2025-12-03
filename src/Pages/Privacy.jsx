import React from "react";

const Privacy = () => {
  return (
    <div className=" py-10 px-4 md:px-20">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-4">
          At <span className="font-semibold">ToyTales</span>, your privacy is
          very important to us. We are committed to protecting the personal
          information of our users and ensuring a safe browsing experience.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Information We Collect
        </h2>
        <p className="text-gray-700 mb-4">
          We may collect personal information such as name, email address, and
          contact details when you interact with our website, subscribe to
          newsletters, or make a purchase. We also collect non-personal
          information such as browser type, pages visited, and time spent on our
          website to improve our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          The information collected is used to provide better services, process
          orders, send updates and newsletters, and enhance your browsing
          experience. We never sell or share your personal information with
          third parties for marketing purposes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Cookies
        </h2>
        <p className="text-gray-700 mb-4">
          Our website uses cookies to enhance user experience, analyze traffic,
          and remember user preferences. You can choose to disable cookies in
          your browser, but some features of the website may not function
          properly.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Security
        </h2>
        <p className="text-gray-700 mb-4">
          We implement reasonable security measures to protect your information
          from unauthorized access, alteration, or disclosure. However, no
          online service is 100% secure, so we cannot guarantee absolute
          security.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Changes to This Policy
        </h2>
        <p className="text-gray-700 mb-4">
          ToyTales may update this Privacy Policy from time to time. We
          recommend checking this page periodically to stay informed about how
          we protect your information.
        </p>

        <p className="text-gray-700 mt-6">
          If you have any questions about our Privacy Policy, please contact us
          at
          <span className="text-blue-600 ml-1">support@toytales.com</span>.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
