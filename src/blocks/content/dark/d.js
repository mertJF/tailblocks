import React from "react";
import PropTypes from  "prop-types";

function DarkContentD(props) {
  return (
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
        <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0 mb-10 pb-10 border-b border-gray-800">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            Pitchfork Kickstarter Taxidermy
          </h1>
          <p className="leading-relaxed text-base">
            Locavore cardigan small batch roof party blue bottle blog meggings
            sartorial jean shorts kickstarter migas sriracha church-key synth
            succulents. Actually taiyaki neutra, distillery gastropub pok pok
            ugh.
          </p>
          <a href className={`text-${props.theme}-400 inline-flex items-center mt-4`}>
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
        <div className="flex flex-col md:w-1/2 md:pl-12">
          <h2 className="title-font font-semibold text-white tracking-wider text-sm mb-3">
            CATEGORIES
          </h2>
          <nav className="flex flex-wrap list-none -mb-1">
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a href className="hover:text-white">First Link</a>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a href className="hover:text-white">Second Link</a>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a href className="hover:text-white">Third Link</a>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a href className="hover:text-white">Fourth Link</a>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a href className="hover:text-white">Fifth Link</a>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a href className="hover:text-white">Sixth Link</a>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a href className="hover:text-white">Seventh Link</a>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a href className="hover:text-white">Eighth Link</a>
            </li>
          </nav>
        </div>
      </div>
    </section>
  );
}

DarkContentD.defaultProps = {
  theme: 'indigo'
};

DarkContentD.propTypes = {
  theme: PropTypes.string.isRequired
};

export default DarkContentD;
