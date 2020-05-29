import React from "react";
import PropTypes from  "prop-types";

function LightCTAB(props) {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
          </h1>
          <p className="leading-relaxed mt-4">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div class="relative mb-4">
            <label
              for="full-name"
              class="bg-white rounded leading-7 px-3 absolute ml-px mt-px left-0 top-0 text-sm text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              class={`w-full bg-white rounded border border-gray-300 focus:border-${props.theme}-500 text-base outline-none text-gray-700 pt-6 pb-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div class="relative mb-4">
            <label
              for="email"
              class="bg-white rounded leading-7 px-3 absolute ml-px mt-px left-0 top-0 text-sm text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class={`w-full bg-white rounded border border-gray-300 focus:border-${props.theme}-500 text-base outline-none text-gray-700 pt-6 pb-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <button className={`text-white bg-${props.theme}-500 border-0 py-2 px-8 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}>
            Button
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Literally you probably haven&apos;t heard of them jean shorts.
          </p>
        </div>
      </div>
    </section>
  );
}

LightCTAB.defaultProps = {
  theme: 'indigo'
};

LightCTAB.propTypes = {
  theme: PropTypes.string.isRequired
};

export default LightCTAB;
