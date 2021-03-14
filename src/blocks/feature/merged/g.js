import React from "react";
import PropTypes from  "prop-types";

function FeatureG(props) {
  return (
    <section className="text-gray-600 body-font dark:text-gray-400 dark:bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 dark:text-white">
            Raw Denim Heirloom Man Braid
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center dark:bg-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className={`text-${props.theme}-500 w-6 h-6 flex-shrink-0 mr-4 dark:text-${props.theme}-400`}
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span className="title-font font-medium dark:text-white">
                Authentic Cliche Forage
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center dark:bg-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className={`text-${props.theme}-500 w-6 h-6 flex-shrink-0 mr-4 dark:text-${props.theme}-400`}
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span className="title-font font-medium dark:text-white">
                Kinfolk Chips Snackwave
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center dark:bg-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className={`text-${props.theme}-500 w-6 h-6 flex-shrink-0 mr-4 dark:text-${props.theme}-400`}
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span className="title-font font-medium dark:text-white">
                Coloring Book Ethical
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center dark:bg-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className={`text-${props.theme}-500 w-6 h-6 flex-shrink-0 mr-4 dark:text-${props.theme}-400`}
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span className="title-font font-medium dark:text-white">
                Typewriter Polaroid Cray
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center dark:bg-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className={`text-${props.theme}-500 w-6 h-6 flex-shrink-0 mr-4 dark:text-${props.theme}-400`}
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span className="title-font font-medium dark:text-white">Pack Truffaut Blue</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center dark:bg-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className={`text-${props.theme}-500 w-6 h-6 flex-shrink-0 mr-4 dark:text-${props.theme}-400`}
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span className="title-font font-medium dark:text-white">
                The Catcher In The Rye
              </span>
            </div>
          </div>
        </div>
        <button className={`flex mx-auto mt-16 text-white bg-${props.theme}-500 border-0 py-2 px-8 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}>
          Button
        </button>
      </div>
    </section>
  );
}

FeatureG.defaultProps = {
  theme: 'indigo'
};

FeatureG.propTypes = {
  theme: PropTypes.string.isRequired
};

export default FeatureG;
