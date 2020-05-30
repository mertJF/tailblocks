import React from "react";
import PropTypes from  "prop-types";

function DarkCTAC(props) {
  return (
    <section className="text-gray-500 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Master Cleanse Reliac Heirloom
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven&apos;t heard of them man bun deep.
          </p>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end">
          <div className="relative sm:mr-4 mb-4 sm:mb-0 flex-grow w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-400"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className={`w-full bg-gray-800 rounded border border-gray-700 focus:border-${props.theme}-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div className="relative sm:mr-4 mb-4 sm:mb-0 flex-grow w-full">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full bg-gray-800 rounded border border-gray-700 focus:border-${props.theme}-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <button className={`text-white bg-${props.theme}-500 border-0 py-2 px-8 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}>
            Button
          </button>
        </div>
      </div>
    </section>
  );
}

DarkCTAC.defaultProps = {
  theme: 'indigo'
};

DarkCTAC.propTypes = {
  theme: PropTypes.string.isRequired
};

export default DarkCTAC;
