import React from "react";
import PropTypes from  "prop-types";

function ContactA(props) {
  return (
    <section className="text-gray-600 body-font relative dark:text-gray-400 dark:bg-gray-900">
      <div className="absolute inset-0 bg-gray-300 dark:bg-gray-900">
        <iframe
          width="100%"
          height="100%"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(.4)" }}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
        />
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md dark:bg-gray-900">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font dark:text-white">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-gray-600 dark:text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-theme-500 focus:ring-2 focus:ring-theme-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:focus:border-theme-500 dark:focus:ring-theme-900 dark:text-gray-100 dark:duration-200"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600 dark:text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-theme-500 focus:ring-2 focus:ring-theme-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:focus:border-theme-500 dark:focus:ring-theme-900 dark:text-gray-100 dark:duration-200"
            ></textarea>
          </div>
          <button className="text-white bg-theme-500 border-0 py-2 px-6 focus:outline-none hover:bg-theme-600 rounded text-lg dark:text-white dark:bg-theme-500 dark:hover:bg-theme-600">
            Button
          </button>
          <p className="text-xs text-gray-500 mt-3 dark:text-gray-400">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
}

ContactA.defaultProps = {
  theme: 'indigo'
};

ContactA.propTypes = {
  theme: PropTypes.string.isRequired
};

export default ContactA;
