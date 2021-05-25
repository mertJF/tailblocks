import React from "react";
import PropTypes from "prop-types";

const DarkPaginationA = (props) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-center items-center space-x-2">
          <a
            href="/#"
            className={`bg-${props.theme}-100 text-${props.theme}-600 hover:bg-${props.theme}-50 hover:text-${props.theme}-500 font-medium text-sm sm:p-3 p-2.5 rounded`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="sm:h-5 sm:w-5 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </a>
          <a
            href="/#"
            className={`text-white font-semibold bg-${props.theme}-500 hover:bg-${props.theme}-400 sm:p-3 p-2.5 rounded`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="sm:h-5 sm:w-5 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </a>
          <a
            href="/#"
            className={`text-white font-medium sm:text-lg text-base bg-${props.theme}-500 hover:bg-${props.theme}-400 sm:p-3 p-2.5 rounded`}
          >
            <p className="sm:h-5 sm:w-5 h-4 w-4 flex items-center justify-center">
              55
            </p>
          </a>
          <a
            href="/#"
            className={`text-white font-semibold bg-${props.theme}-500 hover:bg-${props.theme}-400 sm:p-3 p-2.5 rounded`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="sm:h-5 sm:w-5 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <a
            href="/#"
            className={`bg-${props.theme}-100 text-${props.theme}-600 hover:bg-${props.theme}-50 hover:text-${props.theme}-500 font-medium text-sm sm:p-3 p-2.5 rounded`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="sm:h-5 sm:w-5 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

DarkPaginationA.defaultProps = {
  theme: "indigo",
};

DarkPaginationA.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default DarkPaginationA;
