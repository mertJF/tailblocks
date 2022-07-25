import React from "react";
import PropTypes from "prop-types";

function LightBlogPageA(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-5 py-24 flex flex-col items-start justify-center">
        <div className="flex md:flex-row-reverse flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
            <h2
              className={`tracking-widest text-xs title-font text-center font-medium text-${props.theme}-500 my-3   `}
            >
              IMAGE CAPTION
            </h2>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start md:text-left text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Knausgaard typewriter readymade marfa crypto honey firm.
            </h1>

            <div
              className={`h-1 w-20 bg-${props.theme}-500 rounded mx-auto md:mx-0`}
            ></div>
            <a href className="flex items-center justify-start my-6 md:my-10">
              <img
                alt="blog"
                src="https://dummyimage.com/104x104"
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className=" flex justify-start items-start flex-col pl-4">
                <span className="title-font font-medium text-gray-900">
                  Holden Caulfield
                </span>
                <span className="text-gray-400 text-xs tracking-normal mt-0.5">
                  25 Jul '22 • 5 min read
                </span>
              </span>
            </a>
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative md:mr-4">
                <p
                  className={`relative w-full text-justify first-letter:text-7xl first-letter:font-semibold first-letter:text-${props.theme}-500 first-letter:mr-3 first-letter:float-left`}
                >
                  Live-edge letterpress cliche, salvia fanny pack humblebrag
                  narwhal portland. VHS man braid palo santo hoodie brunch trust
                  fund. Bitters hashtag waistcoat fashion axe chia unicorn.
                  Plaid fixie chambray 90's, slow-carb etsy tumeric.Glossier
                  echo park pug, church-key sartorial biodiesel vexillologist
                  pop-up snackwave ramps cornhole. Marfa 3 wolf moon party
                  messenger bag selfies, poke vaporware kombucha lumbersexual
                  pork belly polaroid hoodie portland craft beer. Whatever
                  cardigan tote bag tumblr hexagon brooklyn asymmetrical
                  gentrify, subway tile poke farm-to-table.
                </p>
              </div>
            </div>
            <div className="my-4 md:mr-4">
              <p className="relative w-full text-justify">
                Live-edge letterpress cliche, salvia fanny pack humblebrag
                narwhal portland. VHS man braid palo santo hoodie brunch trust
                fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid
                fixie chambray 90's, slow-carb etsy tumeric.Glossier echo park
                pug, church-key sartorial biodiesel vexillologist pop-up
                snackwave ramps cornhole.
              </p>
            </div>

            {/* subheading */}
            <div className="rounded flex pt-4 pb-2 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className={`text-${props.theme}-500 w-6 h-6 flex-shrink-0 mr-4`}
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span className="text-xl font-medium">
                Authentic Cliche Forage
              </span>
            </div>
          </div>
        </div>
        {/* second flex */}
        <div className="mb-2">
          <p className="relative w-full text-justify">
            Live-edge letterpress cliche, salvia fannxagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table.ive-edge letterpress
            cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid
            palo santo hoodie brunch trust fund. Bitters hashtag waistcoat
            fashion axe chia unicorn. Franzen you probably haven't heard of them
            man bun deep jianbing selfies heirloom prism food truck ugh squid
            celiac humblebrag.Live-edge letterpress cliche, salvia fannxagon
            brooklyn asymmetrical gentrify, subway tile poke
            farm-to-table.ive-edge letterpress cliche, salvia fanny pack
            humblebrag narwhal portland. Meggings portland fingerstache lyft,
            post-ironic fixie man bun banh mi umami everyday carry hexagon
            locavore direct trade art party. Locavore small batch listicle
            gastropub farm-to-table lumbersexual salvia messenger bag. Coloring
            book flannel truffaut craft beer drinking vinegar sartorial, disrupt
            fashion axe normcore meh butcher. Portland 90's scenester
            vexillologist forage post-ironic asymmetrical, chartreuse disrupt
            butcher paleo intelligentsia pabst before they sold out four loko. 3
            wolf moon brooklyn.
          </p>
        </div>

        <h2 className="text-gray-500 italic text-sm my-4">Thank You !</h2>
        <div className="flex lg:flex-row md:flex-col my-4 space-x-3">
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500 hover:bg-gray-300">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500 hover:bg-gray-300">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              {" "}
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
          </button>
        </div>

        {/* contact wala */}
        <div className="p-2 w-full pt-8 mt-4 border-t border-gray-200 text-center">
          <span className="inline-flex space-x-3">
            <a href className={`text-${props.theme}-500`}>
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href className={`text-${props.theme}-500`}>
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href className={`text-${props.theme}-500`}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a href className={`text-${props.theme}-500`}>
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
          <p className="leading-normal mb-5 text-sm">
            Copyright © 2022 • Holden's blog <br /> Let's start coding
          </p>
        </div>
      </div>
    </section>
  );
}

LightBlogPageA.defaultProps = {
  theme: "indigo",
};

LightBlogPageA.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightBlogPageA;
