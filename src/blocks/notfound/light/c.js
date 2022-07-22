import React from "react";
import PropTypes from "prop-types";

function LightNotfoundC(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            OOPS ! PAGE NOT FOUND
          </h1>
          <p className="mb-8 leading-relaxed">
            Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid
            swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
            Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps
            hexagon
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <button
              className={`inline-flex text-white bg-${props.theme}-500 border-0 py-2 px-6 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg mb-5`}
            >
              Button
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="404error"
            src="https://cdn-icons.flaticon.com/png/512/3551/premium/3551629.png?token=exp=1658490083~hmac=bfcc1874209083ee667fff1e9f7f6d19"
          />
        </div>
      </div>
    </section>
  );
}

LightNotfoundC.defaultProps = {
  theme: "indigo",
};

LightNotfoundC.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightNotfoundC;
