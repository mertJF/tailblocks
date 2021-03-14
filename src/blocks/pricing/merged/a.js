import React from "react";
import PropTypes from "prop-types";

function PricingA(props) {
  return (
    <section className="text-gray-600 body-font overflow-hidden dark:text-gray-400 dark:bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 dark:text-white">
            Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
          </p>
          <div className="flex mx-auto border-2 border-theme-500 rounded overflow-hidden mt-6 dark:border-theme-500">
            <button className="py-1 px-4 bg-theme-500 text-white focus:outline-none dark:bg-theme-500 dark:text-white">
              Monthly
            </button>
            <button className="py-1 px-4 focus:outline-none dark:text-gray-300">Annually</button>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden dark:border-gray-700">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium dark:text-gray-400">
                START
              </h2>
              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none dark:text-white dark:border-gray-800">
                Free
              </h1>
              <p className="flex items-center text-gray-600 mb-2 dark:text-gray-400">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 dark:bg-gray-800 dark:text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Vexillologist pitchfork
              </p>
              <p className="flex items-center text-gray-600 mb-2 dark:text-gray-400">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 dark:bg-gray-800 dark:text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Tumeric plaid portland
              </p>
              <p className="flex items-center text-gray-600 mb-6 dark:text-gray-400">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 dark:bg-gray-800 dark:text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Mixtape chillwave tumeric
              </p>
              <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                Button
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="text-xs text-gray-500 mt-3 dark:text-gray-400">
                Literally you probably haven&apos;t heard of them jean shorts.
              </p>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-theme-500 flex flex-col relative overflow-hidden dark:border-theme-500">
              <span className="bg-theme-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl dark:bg-theme-500 dark:text-white">
                POPULAR
              </span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium dark:text-gray-400">
                PRO
              </h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200 dark:text-white dark:border-gray-800">
                <span>$38</span>
                <span className="text-lg ml-1 font-normal text-gray-500 dark:text-gray-400">
                  /mo
                </span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2 dark:text-gray-400">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 dark:bg-gray-800 dark:text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Vexillologist pitchfork
              </p>
              <p className="flex items-center text-gray-600 mb-2 dark:text-gray-400">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 dark:bg-gray-800 dark:text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Tumeric plaid portland
              </p>
              <p className="flex items-center text-gray-600 mb-2 dark:text-gray-400">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 dark:bg-gray-800 dark:text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Hexagon neutra unicorn
              </p>
              <p className="flex items-center text-gray-600 mb-6 dark:text-gray-400">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 dark:bg-gray-800 dark:text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Mixtape chillwave tumeric
              </p>
              <button className="flex items-center mt-auto text-white bg-theme-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-theme-600 rounded dark:text-white dark:bg-theme-500 dark:hover:bg-theme-600">
                Button
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="text-xs text-gray-500 mt-3 dark:text-gray-400">
                Literally you probably haven&apos;t heard of them jean shorts.
              </p>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden dark:border-gray-700">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium dark:text-gray-400">
                BUSINESS
              </h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200 dark:text-white dark:border-gray-800">
                <span>$56</span>
                <span className="text-lg ml-1 font-normal text-gray-500 dark:text-gray-400">
                  /mo
                </span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2 dark:text-gray-400">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 dark:bg-gray-800 dark:text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Vexillologist pitchfork
              </p>
              <p className="flex items-center text-gray-600 mb-2 dark:text-gray-400">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 dark:bg-gray-800 dark:text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Tumeric plaid portland
              </p>
              <p className="flex items-center text-gray-600 mb-2 dark:text-gray-400">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 dark:bg-gray-800 dark:text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Hexagon neutra unicorn
              </p>
              <p className="flex items-center text-gray-600 mb-2 dark:text-gray-400">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 dark:bg-gray-800 dark:text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Vexillologist pitchfork
              </p>
              <p className="flex items-center text-gray-600 mb-6 dark:text-gray-400">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 dark:bg-gray-800 dark:text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Mixtape chillwave tumeric
              </p>
              <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                Button
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="text-xs text-gray-500 mt-3 dark:text-gray-400">
                Literally you probably haven&apos;t heard of them jean shorts.
              </p>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden dark:border-gray-700">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium dark:text-gray-400">
                SPECIAL
              </h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200 dark:text-white dark:border-gray-800">
                <span>$72</span>
                <span className="text-lg ml-1 font-normal text-gray-500 dark:text-gray-400">
                  /mo
                </span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2 dark:text-gray-400">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 dark:bg-gray-800 dark:text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Vexillologist pitchfork
              </p>
              <p className="flex items-center text-gray-600 mb-2 dark:text-gray-400">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 dark:bg-gray-800 dark:text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Tumeric plaid portland
              </p>
              <p className="flex items-center text-gray-600 mb-2 dark:text-gray-400">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 dark:bg-gray-800 dark:text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Hexagon neutra unicorn
              </p>
              <p className="flex items-center text-gray-600 mb-2 dark:text-gray-400">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 dark:bg-gray-800 dark:text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Vexillologist pitchfork
              </p>
              <p className="flex items-center text-gray-600 mb-6 dark:text-gray-400">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 dark:bg-gray-800 dark:text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Mixtape chillwave tumeric
              </p>
              <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                Button
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="text-xs text-gray-500 mt-3 dark:text-gray-400">
                Literally you probably haven&apos;t heard of them jean shorts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

PricingA.defaultProps = {
  theme: 'indigo'
};

PricingA.propTypes = {
  theme: PropTypes.string.isRequired
};

export default PricingA;
