import React from "react";
import PropTypes from  "prop-types";

function DarkFeatureE(props) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className={`text-xs text-${props.theme}-400 tracking-widest font-medium title-font mb-1`}>
            ROOF PARTY POLAROID
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
            Master Cleanse Reliac Heirloom
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className={`w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-${props.theme}-500 text-white flex-shrink-0`}>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h2 className="text-white text-lg title-font font-medium">
                  Shooting Stars
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a href className={`mt-3 text-${props.theme}-400 inline-flex items-center`}>
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
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className={`w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-${props.theme}-500 text-white flex-shrink-0`}>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h2 className="text-white text-lg title-font font-medium">
                  The Catalyzer
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a href className={`mt-3 text-${props.theme}-400 inline-flex items-center`}>
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
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className={`w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-${props.theme}-500 text-white flex-shrink-0`}>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                  </svg>
                </div>
                <h2 className="text-white text-lg title-font font-medium">
                  Neptune
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a href className={`mt-3 text-${props.theme}-400 inline-flex items-center`}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

DarkFeatureE.defaultProps = {
  theme: 'indigo'
};

DarkFeatureE.propTypes = {
  theme: PropTypes.string.isRequired
};

export default DarkFeatureE;
