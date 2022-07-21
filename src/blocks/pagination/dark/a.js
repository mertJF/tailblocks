import React from "react";
import PropTypes from "prop-types";

function DarkPaginationA(props) {
  return (
    <footer className="text-gray-400 md:fixed md:w-screen md:bottom-24 md:left-0 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center justify-center sm:flex-row flex-col">
        <div className="flex flex-row title-font font-medium items-center justify-center">
          <span
            className={`ml-3 text-xl ring-1 ring-gray-500 text-gray-200 py-2 px-4 rounded-full`}
          >
            <svg
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M9 19l-7-7 7-7M16 19l-7-7 7-7" />
            </svg>
          </span>
          <span
            className={`ml-3 text-xl ring-1 ring-${props.theme}-300 bg-${props.theme}-500 text-white py-2 px-4 rounded-full`}
          >
            3
          </span>
          <span
            className={`ml-3 text-xl ring-1 ring-gray-500 text-gray-200 py-2 px-4 rounded-full`}
          >
            4
          </span>
          <span
            className={`ml-3 text-xl ring-1 ring-gray-500 text-gray-200 py-2 px-4 rounded-full`}
          >
            5
          </span>
          <span
            className={`ml-3 text-xl ring-1 ring-gray-500 text-gray-200 py-2 px-4 rounded-full`}
          >
            6
          </span>
          <span
            className={`ml-3 text-xl ring-1 ring-gray-500 text-gray-200 py-2 px-4 rounded-full`}
          >
            <svg
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M9 5l7 7-7 7M16 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </footer>
  );
}

DarkPaginationA.defaultProps = {
  theme: "indigo",
};

DarkPaginationA.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default DarkPaginationA;
