import React from "react";
import PropTypes from  "prop-types";

function LightContactB(props) {
  return (
    <section className="text-gray-700 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(.4)" }}
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          />
          <div className="bg-white relative flex flex-wrap py-6">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">
                ADDRESS
              </h2>
              <p className="leading-relaxed">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">
                EMAIL
              </h2>
              <a href className={`text-${props.theme}-500 leading-relaxed`}>
                example@email.com
              </a>
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <input
            className={`bg-white rounded border border-gray-400 focus:outline-none focus:border-${props.theme}-500 text-base px-4 py-2 mb-4`}
            placeholder="Name"
            type="text"
          ></input>
          <input
            className={`bg-white rounded border border-gray-400 focus:outline-none focus:border-${props.theme}-500 text-base px-4 py-2 mb-4`}
            placeholder="Email"
            type="email"
          ></input>
          <textarea
            className={`bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-${props.theme}-500 text-base px-4 py-2 mb-4 resize-none`}
            placeholder="Message"
          ></textarea>
          <button className={`text-white bg-${props.theme}-500 border-0 py-2 px-6 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}>
            Button
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
}

LightContactB.defaultProps = {
  theme: 'indigo'
};

LightContactB.propTypes = {
  theme: PropTypes.string.isRequired
};

export default LightContactB;
