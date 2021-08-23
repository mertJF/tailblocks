import React from "react";
import PropTypes from "prop-types";

function LightNotfoundA(props) {
  return (
    <section class="text-gray-600">
      <div class="container mx-auto flex flex-col justify-center items-center p-16 gap-8 text-center">
        <h1 class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
          404
        </h1>
        <p class="font-semibold text-2xl">oops! page not found</p>
        <p>
          Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
          tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt
          ramps hexagon mustache umami
        </p>
        <div class="flex justify-center gap-8 items-center py-4">
          <button class="px-4 py-2 bg-blue-500 text-white rounded">Home</button>
          <button class="px-4 py-2 bg-purple-500 text-white rounded">
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}

LightNotfoundA.defaultProps = {
  theme: "indigo",
};

LightNotfoundA.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightNotfoundA;
