import React from 'react';
import PropTypes from  "prop-types";

function DarkBlogE(props) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 xl:py-24 py-12 mx-auto">
        <div className="flex flex-wrap -mx-4 -my-8">
          <div className="py-8 px-4 lg:w-1/3">
            <div className="h-full flex items-start">
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span className="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">
                  Jul
                </span>
                <span className="font-medium text-lg leading-none text-gray-300 title-font">
                  18
                </span>
              </div>
              <div className="flex-grow pl-6">
                <h2 className={`tracking-widest text-xs title-font font-medium text-${props.theme}-400 mb-1`}>
                  CATEGORY
                </h2>
                <h1 className="title-font text-xl font-medium text-white mb-3">
                  The 400 Blows
                </h1>
                <p className="leading-relaxed mb-5">
                  Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                  microdosing tousled waistcoat.
                </p>
                <a href className="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/103x103"
                    className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-3">
                    <span className="title-font font-medium text-white">
                      Alper Kamu
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="py-8 px-4 lg:w-1/3">
            <div className="h-full flex items-start">
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span className="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">
                  Jul
                </span>
                <span className="font-medium text-lg leading-none text-gray-300 title-font">
                  18
                </span>
              </div>
              <div className="flex-grow pl-6">
                <h2 className={`tracking-widest text-xs title-font font-medium text-${props.theme}-400 mb-1`}>
                  CATEGORY
                </h2>
                <h1 className="title-font text-xl font-medium text-white mb-3">
                  Shooting Stars
                </h1>
                <p className="leading-relaxed mb-5">
                  Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                  microdosing tousled waistcoat.
                </p>
                <a href className="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/102x102"
                    className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-3">
                    <span className="title-font font-medium text-white">
                      Holden Caulfield
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="py-8 px-4 lg:w-1/3">
            <div className="h-full flex items-start">
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span className="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">
                  Jul
                </span>
                <span className="font-medium text-lg leading-none text-gray-300 title-font">
                  18
                </span>
              </div>
              <div className="flex-grow pl-6">
                <h2 className={`tracking-widest text-xs title-font font-medium text-${props.theme}-400 mb-1`}>
                  CATEGORY
                </h2>
                <h1 className="title-font text-xl font-medium text-white mb-3">
                  Neptune
                </h1>
                <p className="leading-relaxed mb-5">
                  Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                  microdosing tousled waistcoat.
                </p>
                <a href className="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/101x101"
                    className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-3">
                    <span className="title-font font-medium text-white">
                      Henry Letham
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

DarkBlogE.defaultProps = {
  theme: 'indigo'
};

DarkBlogE.propTypes = {
  theme: PropTypes.string.isRequired
};

export default DarkBlogE;
