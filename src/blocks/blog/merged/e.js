import React from 'react';
import PropTypes from  "prop-types";

function BlogE(props) {
  return (
    <section className="text-gray-600 body-font dark:text-gray-400 dark:bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -my-8">
          <div className="py-8 px-4 lg:w-1/3">
            <div className="h-full flex items-start">
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200 dark:text-gray-400 dark:border-gray-700 dark:text-gray-400 dark:border-gray-700 dark:text-gray-400 dark:border-gray-700">
                  Jul
                </span>
                <span className="font-medium text-lg text-gray-800 title-font leading-none dark:text-gray-300 dark:text-gray-300 dark:text-gray-300">
                  18
                </span>
              </div>
              <div className="flex-grow pl-6">
                <h2 className={`tracking-widest text-xs title-font font-medium text-${props.theme}-500 mb-1`}>
                  CATEGORY
                </h2>
                <h1 className="title-font text-xl font-medium text-gray-900 mb-3 dark:text-white dark:text-white dark:text-white">
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
                    <span className="title-font font-medium text-gray-900 dark:text-white dark:text-white dark:text-white">
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
                <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                  Jul
                </span>
                <span className="font-medium text-lg text-gray-800 title-font leading-none">
                  18
                </span>
              </div>
              <div className="flex-grow pl-6">
                <h2 className={`tracking-widest text-xs title-font font-medium text-${props.theme}-500 mb-1`}>
                  CATEGORY
                </h2>
                <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
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
                    <span className="title-font font-medium text-gray-900">
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
                <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                  Jul
                </span>
                <span className="font-medium text-lg text-gray-800 title-font leading-none">
                  18
                </span>
              </div>
              <div className="flex-grow pl-6">
                <h2 className={`tracking-widest text-xs title-font font-medium text-${props.theme}-500 mb-1`}>
                  CATEGORY
                </h2>
                <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
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
                    <span className="title-font font-medium text-gray-900">
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

BlogE.defaultProps = {
  theme: 'indigo'
};

BlogE.propTypes = {
  theme: PropTypes.string.isRequired
};

export default BlogE;
