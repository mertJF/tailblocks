import React from "react";
import PropTypes from "prop-types";

function DarkNotfoundA(props) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 object-cover object-center rounded"
          alt="404error"
          src="https://cdn-icons.flaticon.com/png/512/3551/premium/3551629.png?token=exp=1658490083~hmac=bfcc1874209083ee667fff1e9f7f6d19"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            OOPS ! PAGE NOT FOUND
          </h1>
          <p className="leading-relaxed mb-8">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
          </p>
          <div className="flex justify-center">
            <button
              className={`inline-flex text-white bg-${props.theme}-500 border-0 py-2 px-6 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

DarkNotfoundA.defaultProps = {
  theme: "indigo",
};

DarkNotfoundA.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default DarkNotfoundA;
