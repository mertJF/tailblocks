import React from "react";
import PropTypes from "prop-types";

function DarkFAQA(props) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            Frequently Asked Questions
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
          </p>
        </div>
        <div className="-my-8 divide-y-2 divide-gray-800">
          <div className="py-8 flex flex-wrap md:space-x-24 md:flex-nowrap">
            <div className="md:w-16 p-2 md:mb-0 mb-6 bg-gray-800 items-center justify-center flex flex-col ">
              <span
                className={`text-gray-400 pb-2 mb-2 border-b-2 border-${props.theme}-200 text-xl`}
              >
                Ques
              </span>
              <span className="font-medium text-lg md:text-xl text-white title-font leading-none">
                01
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-2">
                Bitters hashtag waistcoat fashion axe chia unicorn ?
              </h2>
              <p className="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft
                beer.Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
            </div>
          </div>

          <div className="py-8 flex flex-wrap md:space-x-24 md:flex-nowrap">
            <div className="md:w-16 md:mb-0 p-2 mb-6 bg-gray-800 items-center justify-center flex flex-col ">
              <span
                className={`text-gray-400 pb-2 mb-2 border-b-2 border-${props.theme}-200 text-xl`}
              >
                Ques
              </span>
              <span className="font-medium text-lg md:text-xl text-white title-font leading-none">
                02
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-2">
                Meditation bushwick direct trade taxidermy shaman ?
              </h2>
              <p className="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft
                beer.Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
            </div>
          </div>

          <div className="py-8 flex flex-wrap md:space-x-24 md:flex-nowrap">
            <div className="md:w-16 md:mb-0 p-2 mb-6 bg-gray-800 items-center justify-center flex flex-col ">
              <span
                className={`text-gray-400 pb-2 mb-2 border-b-2 border-${props.theme}-200 text-xl`}
              >
                Ques
              </span>
              <span className="font-medium text-lg md:text-xl text-white title-font leading-none">
                03
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-2">
                  Woke master cleanse drinking vinegar salvia ?
              </h2>
              <p className="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft
                beer.Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}

DarkFAQA.defaultProps = {
  theme: "indigo",
};

DarkFAQA.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default DarkFAQA;
