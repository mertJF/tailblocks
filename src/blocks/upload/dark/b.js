import React from "react";
import PropTypes from "prop-types";

function DarkUploadB(props) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 flex flex-col items-start mx-auto">
          <label
            for="dropzone-file"
            className={`flex flex-col justify-center items-center w-full h-64 bg-${props.theme}-800 bg-opacity-10 rounded-lg border-2 border-${props.theme}-500 border-dashed cursor-pointer hover:bg-opacity-20`}
          >
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className={`mb-3 w-10 h-10 text-${props.theme}-500`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-base text-white">
                <span className="font-semibold ">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-100">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>
    </section>
  );
}

DarkUploadB.defaultProps = {
  theme: "indigo",
};

DarkUploadB.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default DarkUploadB;
