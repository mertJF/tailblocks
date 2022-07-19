import React from "react";
import PropTypes from "prop-types";

function DarkFAQB(props) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            Frequently Asked Questions
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-8 rounded-lg overflow-hidden text-center relative">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                QUESTION 1
              </h2>
              <h1 className="title-font text-left text-xl font-medium text-white mb-3">
                Pinterest DIY dreamcatcher gentrify single-origin coffee ?
              </h1>
              <p className="leading-relaxed mb-3 text-justify">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat. Plaid fixie chambray 90's,
                slow-carb etsy tumeric. Cray pug you probably haven't heard of
                them.
              </p>
              <a
                href
                className={`text-${props.theme}-400 flex items-center justify-start`}
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-8 rounded-lg overflow-hidden text-center relative">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                QUESTION 2
              </h2>
              <h1 className="title-font text-left text-xl font-medium text-white mb-3">
                Ennui Snackwave Thundercats Hotplace SuperSonic ?
              </h1>
              <p className="leading-relaxed mb-3 text-justify">
                Live-edge letterpress cliche, salvia fanny pack humblebrag
                narwhal portland. VHS man braid palo santo hoodie brunch trust
                fund. Bitters hashtag waistcoat fashion axe chia unicorn.
              </p>
              <a
                href
                className={`text-${props.theme}-400 flex items-center justify-start`}
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-8 rounded-lg overflow-hidden text-center relative">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                QUESTION 3
              </h2>
              <h1 className="title-font text-left text-xl font-medium text-white mb-3">
                Roof party normcore before they sold out, cornhole vape ?
              </h1>
              <p className="leading-relaxed mb-3 text-justify">
                Franzen you probably haven't heard of them man bun deep jianbing
                selfies heirloom prism food truck ugh squid celiac humblebrag.
                Cold-pressed sriracha leggings jianbing microdosing tousled
                waistcoat.
              </p>
              <a
                href
                className={`text-${props.theme}-400 flex items-center justify-start`}
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

DarkFAQB.defaultProps = {
  theme: "indigo",
};

DarkFAQB.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default DarkFAQB;
