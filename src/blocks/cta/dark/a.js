import React from "react";
import PropTypes from  "prop-types";

function DarkCTAA(props) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
            Slow-carb next level shoinddgoitch ethical authentic, scenester
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

DarkCTAA.defaultProps = {
  theme: 'indigo'
};

DarkCTAA.propTypes = {
  theme: PropTypes.string.isRequired
};

export default DarkCTAA;
