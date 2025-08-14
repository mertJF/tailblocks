import React from "react";
import PropTypes from "prop-types";

function DarkPricingA(props) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 xl:py-24 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
            Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
          </p>
          <div className={`flex mx-auto border-2 border-${props.theme}-500 rounded overflow-hidden mt-6`}>
            <button className={`py-1 px-4 bg-${props.theme}-500 text-white focus:outline-none`}>
              Monthly
            </button>
            <button className="py-1 px-4 text-gray-300 focus:outline-none">
              Annually
            </button>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
                START
              </h2>
              <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">
                Free
              </h1>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
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
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
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
              <p className="flex items-center text-gray-400 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
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
              <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">
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
              <p className="text-xs text-gray-400 mt-3">
                Literally you probably haven&apos;t heard of them jean shorts.
              </p>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className={`h-full p-6 rounded-lg border-2 border-${props.theme}-500 flex flex-col relative overflow-hidden`}>
              <span className={`bg-${props.theme}-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl`}>
                POPULAR
              </span>
              <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
                PRO
              </h2>
              <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                <span>$38</span>
                <span className="text-lg ml-1 font-normal text-gray-400">
                  /mo
                </span>
              </h1>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
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
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
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
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
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
              <p className="flex items-center text-gray-400 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
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
              <button className={`flex items-center mt-auto text-white bg-${props.theme}-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-${props.theme}-600 rounded`}>
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
              <p className="text-xs text-gray-400 mt-3">
                Literally you probably haven&apos;t heard of them jean shorts.
              </p>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
                BUSINESS
              </h2>
              <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                <span>$56</span>
                <span className="text-lg ml-1 font-normal text-gray-400">
                  /mo
                </span>
              </h1>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
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
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
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
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
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
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
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
              <p className="flex items-center text-gray-400 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
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
              <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">
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
              <p className="text-xs text-gray-400 mt-3">
                Literally you probably haven&apos;t heard of them jean shorts.
              </p>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
                SPECIAL
              </h2>
              <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                <span>$72</span>
                <span className="text-lg ml-1 font-normal text-gray-400">
                  /mo
                </span>
              </h1>
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
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
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
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
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
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
              <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
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
              <p className="flex items-center text-gray-400 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
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
              <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">
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
              <p className="text-xs text-gray-400 mt-3">
                Literally you probably haven&apos;t heard of them jean shorts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

DarkPricingA.defaultProps = {
  theme: 'indigo'
};

DarkPricingA.propTypes = {
  theme: PropTypes.string.isRequired
};

export default DarkPricingA;
