import React from "react";
import PropTypes from "prop-types";

function LightPaginationB(props) {
  return (
    <footer className="text-gray-600 md:fixed md:w-screen md:bottom-24 md:left-0 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center justify-center sm:flex-row flex-col">
        <div className="flex flex-row title-font font-medium items-center justify-center ">
          <span
            className={`ml-3 text-xl bg-gray-200 text-gray-500 py-2 px-4 rounded-sm rounded-l-full flex flex-row`}
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
            </svg>{" "}
            Prev
          </span>
          <span
            className={`ml-3 text-xl ring-1 ring-${props.theme}-500 bg-${props.theme}-500 text-white py-2 px-4 rounded-sm`}
          >
            1
          </span>
          <span
            className={`ml-3 text-xl bg-gray-200 text-gray-500 py-2 px-4 rounded-sm`}
          >
            2
          </span>
          <span
            className={`ml-3 text-xl bg-gray-200 text-gray-500 py-2 px-4 rounded-sm`}
          >
            3
          </span>
          <span
            className={`ml-3 text-xl bg-gray-200 text-gray-500 py-2 px-4 rounded-sm flex flex-row rounded-r-full`}
          >
            Next
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

LightPaginationB.defaultProps = {
  theme: "indigo",
};

LightPaginationB.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightPaginationB;
