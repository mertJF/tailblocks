import React from "react";
import PropTypes from  "prop-types";

function LightGalleryB(props) {
  return (
    <section className="text-gray-600">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              src="https://dummyimage.com/820x340"
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-gray-900 font-medium mb-2">
                Shooting Stars
              </h2>
              <p className="leading-relaxed">
                Skateboard +1 mustache fixie paleo lumbersexual.
              </p>
              <a href className={`mt-3 text-${props.theme}-500 inline-flex items-center`}>
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
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src="https://dummyimage.com/542x460"
                />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-gray-900 font-medium mb-2">
                    Shooting Stars
                  </h2>
                  <p className="leading-relaxed">
                    Skateboard +1 mustache fixie paleo lumbersexual.
                  </p>
                  <a href className={`mt-3 text-${props.theme}-500 inline-flex items-center`}>
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
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src="https://dummyimage.com/542x420"
                />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-gray-900 font-medium mb-2">
                    Shooting Stars
                  </h2>
                  <p className="leading-relaxed">
                    Skateboard +1 mustache fixie paleo lumbersexual.
                  </p>
                  <a href className={`mt-3 text-${props.theme}-500 inline-flex items-center`}>
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
      </div>
    </section>
  );
}

LightGalleryB.defaultProps = {
  theme: 'indigo'
};

LightGalleryB.propTypes = {
  theme: PropTypes.string.isRequired
};

export default LightGalleryB;