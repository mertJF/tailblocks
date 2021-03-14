import React from "react";
import PropTypes from "prop-types";

function PricingB(props) {
  return (
    <section className="text-gray-600 body-font dark:text-gray-400 dark:bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 dark:text-white">
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
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl dark:text-white dark:bg-gray-800">
                  Plan
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:text-white dark:bg-gray-800">
                  Speed
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:text-white dark:bg-gray-800">
                  Storage
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 dark:text-white dark:bg-gray-800">
                  Price
                </th>
                <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br dark:text-white dark:bg-gray-800"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3">Start</td>
                <td className="px-4 py-3">5 Mb/s</td>
                <td className="px-4 py-3">15 GB</td>
                <td className="px-4 py-3 text-lg text-gray-900 dark:text-white">Free</td>
                <td className="w-10 text-center">
                  <input name="plan" type="radio"></input>
                </td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3 dark:border-gray-800">Pro</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 dark:border-gray-800">
                  25 Mb/s
                </td>
                <td className="border-t-2 border-gray-200 px-4 py-3 dark:border-gray-800">25 GB</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900 dark:border-gray-800 dark:text-white">
                  $24
                </td>
                <td className="border-t-2 border-gray-200 w-10 text-center dark:border-gray-800">
                  <input name="plan" type="radio"></input>
                </td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3 dark:border-gray-800">
                  Business
                </td>
                <td className="border-t-2 border-gray-200 px-4 py-3 dark:border-gray-800">
                  36 Mb/s
                </td>
                <td className="border-t-2 border-gray-200 px-4 py-3 dark:border-gray-800">40 GB</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900 dark:border-gray-800 dark:text-white">
                  $50
                </td>
                <td className="border-t-2 border-gray-200 w-10 text-center dark:border-gray-800">
                  <input name="plan" type="radio"></input>
                </td>
              </tr>
              <tr>
                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 dark:border-gray-800">
                  Exclusive
                </td>
                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 dark:border-gray-800">
                  48 Mb/s
                </td>
                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 dark:border-gray-800">
                  120 GB
                </td>
                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900 dark:border-gray-800 dark:text-white">
                  $72
                </td>
                <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center dark:border-gray-800">
                  <input name="plan" type="radio"></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <a href className="text-theme-500 inline-flex items-center md:mb-2 lg:mb-0 dark:text-theme-400">
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
          <button className="flex ml-auto text-white bg-theme-500 border-0 py-2 px-6 focus:outline-none hover:bg-theme-600 rounded dark:text-white dark:bg-theme-500 dark:hover:bg-theme-600">
            Button
          </button>
        </div>
      </div>
    </section>
  );
}

PricingB.defaultProps = {
  theme: 'indigo'
};

PricingB.propTypes = {
  theme: PropTypes.string.isRequired
};

export default PricingB;
