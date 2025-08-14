import React from "react";
import PropTypes from  "prop-types";

function LightCTAA(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 xl:py-24 py-12 mx-auto">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
            Slow-carb next level shoindxgoitch ethical authentic, scenester
            sriracha forage.
          </h1>
          <button className={`flex-shrink-0 text-white bg-${props.theme}-500 border-0 py-2 px-8 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg mt-10 sm:mt-0`}>
            Button
          </button>
        </div>
      </div>
    </section>
  );
}

LightCTAA.defaultProps = {
  theme: 'indigo'
};

LightCTAA.propTypes = {
  theme: PropTypes.string.isRequired
};

export default LightCTAA;
