import React from "react";
import PropTypes from "prop-types";

function DarkTeamD(props) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven&apos;t heard of them.
          </p>
        </div>

        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-5 mb-5 border-gray-800 sm:flex-row flex-col">
          <div
            className={`sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-${props.theme}-400 bg-gray-800 flex-shrink-0`}
          >
            <img
              alt="team"
              className=" bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
              src="https://dummyimage.com/200x200"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-white text-lg title-font font-medium mb-2">
              Holden Caulfield <span className="font-light">| UI Designer</span>
            </h2>
            <p className="leading-relaxed text-base mb-4">
              DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
              vaporware photo booth fam.
            </p>
            <span className="inline-flex">
              <a href className="text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href className="ml-2 text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href className="ml-2 text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </a>
            </span>
          </div>
        </div>

        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-5 mb-5 border-gray-800 sm:flex-row flex-col">
          <div
            className={`sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-${props.theme}-400 bg-gray-800 flex-shrink-0`}
          >
            <img
              alt="team"
              className=" bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
              src="https://dummyimage.com/200x200"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-white text-lg title-font font-medium mb-2">
              Atticus Finch{" "}
              <span className="font-light">| Product Manager</span>
            </h2>
            <p className="leading-relaxed text-base mb-4">
              DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
              vaporware photo booth fam.
            </p>
            <span className="inline-flex">
              <a href className="text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href className="ml-2 text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href className="ml-2 text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </a>
            </span>
          </div>
        </div>

        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div
            className={`sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-${props.theme}-400 bg-gray-800 flex-shrink-0`}
          >
            <img
              alt="team"
              className=" bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
              src="https://dummyimage.com/200x200"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-white text-lg title-font font-medium mb-2">
              Alper Kamu{" "}
              <span className="font-light">| Software Developer</span>
            </h2>
            <p className="leading-relaxed text-base mb-4">
              DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
              vaporware photo booth fam.
            </p>
            <span className="inline-flex">
              <a href className="text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href className="ml-2 text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href className="ml-2 text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

DarkTeamD.defaultProps = {
  theme: "indigo",
};

DarkTeamD.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default DarkTeamD;
