import React from "react";
import PropTypes from "prop-types";

function DarkPricingB(props) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
            Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Banh mi cornhole echo park skateboard authentic crucifix neutra
            tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
            twee
          </p>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">
                  Plan
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                  Speed
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                  Storage
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                  Price
                </th>
                <th className="w-10 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tr rounded-br"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3">Start</td>
                <td className="px-4 py-3">5 Mb/s</td>
                <td className="px-4 py-3">15 GB</td>
                <td className="px-4 py-3 text-lg text-white">Free</td>
                <td className="w-10 text-center">
                  <input name="plan" type="radio" />
                </td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-800 px-4 py-3">Pro</td>
                <td className="border-t-2 border-gray-800 px-4 py-3">
                  25 Mb/s
                </td>
                <td className="border-t-2 border-gray-800 px-4 py-3">25 GB</td>
                <td className="border-t-2 border-gray-800 px-4 py-3 text-lg text-white">
                  $24
                </td>
                <td className="border-t-2 border-gray-800 w-10 text-center">
                  <input name="plan" type="radio" />
                </td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-800 px-4 py-3">
                  Business
                </td>
                <td className="border-t-2 border-gray-800 px-4 py-3">
                  36 Mb/s
                </td>
                <td className="border-t-2 border-gray-800 px-4 py-3">40 GB</td>
                <td className="border-t-2 border-gray-800 px-4 py-3 text-lg text-white">
                  $50
                </td>
                <td className="border-t-2 border-gray-800 w-10 text-center">
                  <input name="plan" type="radio" />
                </td>
              </tr>
              <tr>
                <td className="border-t-2 border-b-2 border-gray-800 px-4 py-3">
                  Exclusive
                </td>
                <td className="border-t-2 border-b-2 border-gray-800 px-4 py-3">
                  48 Mb/s
                </td>
                <td className="border-t-2 border-b-2 border-gray-800 px-4 py-3">
                  120 GB
                </td>
                <td className="border-t-2 border-b-2 border-gray-800 px-4 py-3 text-lg text-white">
                  $72
                </td>
                <td className="border-t-2 border-b-2 border-gray-800 w-10 text-center">
                  <input name="plan" type="radio" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <a href className={`text-${props.theme}-400 inline-flex items-center md:mb-2 lg:mb-0`}>
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <button className={`flex ml-auto text-white bg-${props.theme}-500 border-0 py-2 px-6 focus:outline-none hover:bg-${props.theme}-600 rounded`}>
            Button
          </button>
        </div>
      </div>
    </section>
  );
}

DarkPricingB.defaultProps = {
  theme: 'indigo'
};

DarkPricingB.propTypes = {
  theme: PropTypes.string.isRequired
};

export default DarkPricingB;
