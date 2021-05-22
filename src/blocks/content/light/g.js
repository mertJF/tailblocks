import React from "react";
import PropTypes from  "prop-types";

function LightContentG(props) {
  return (
    <section className="text-gray-600">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1201x501"
              />
            </div>
            <h2 className="text-2xl font-medium text-gray-900 mt-6 mb-3">
              Buy YouTube Videos
            </h2>
            <p className="leading-relaxed text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
            <button className={`flex mx-auto mt-6 text-white bg-${props.theme}-500 border-0 py-2 px-5 focus:outline-none hover:bg-${props.theme}-600 rounded`}>
              Button
            </button>
          </div>
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1202x502"
              />
            </div>
            <h2 className="text-2xl font-medium text-gray-900 mt-6 mb-3">
              The Catalyzer
            </h2>
            <p className="leading-relaxed text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
            <button className={`flex mx-auto mt-6 text-white bg-${props.theme}-500 border-0 py-2 px-5 focus:outline-none hover:bg-${props.theme}-600 rounded`}>
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

LightContentG.defaultProps = {
  theme: 'indigo'
};

LightContentG.propTypes = {
  theme: PropTypes.string.isRequired
};

export default LightContentG;
