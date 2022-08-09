import React, { useRef } from "react";
import PropTypes from "prop-types";

function DarkUploadA(props) {
  const ref = useRef();

  const handleClick = () => {
    ref.current.click();
  };
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 flex flex-col items-start mx-auto">
          <label
            className="title-font mb-2 text-sm font-medium text-white"
            for="multiple_files"
          >
            Upload multiple files
          </label>
          <input
            ref={ref}
            className={`w-full cursor-pointer rounded-lg border border-gray-600 bg-gray-800 px-6 py-2 text-lg text-gray-200 file:rounded-lg file:border-none file:bg-${props.theme}-600 file:p-2 file:text-white hover:file:cursor-pointer hover:file:bg-${props.theme}-500 file:mr-6`}
            id="multiple_files"
            type="file"
            multiple
          />
          <button
            className={`absolute flex-shrink-0 text-white bg-${props.theme}-500 border-0 py-1 px-3 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg ml-4 mt-9`}
            onClick={handleClick}
          >
            Choose Files
          </button>
          <span class="text-sm text-gray-400 mt-1 ml-3">
            *Remove or hide the button in the above line in the code while using
            it.
          </span>
        </div>
      </div>
    </section>
  );
}

DarkUploadA.defaultProps = {
  theme: "indigo",
};

DarkUploadA.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default DarkUploadA;
