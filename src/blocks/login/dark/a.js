import React from 'react';
import PropTypes from  "prop-types";

function DarkLoginA(props) {


    return (<section className=" bg-gray-900 text-gray-700 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="container mx-auto p-8">
      <div class="mx-auto max-w-md">
          <div class="flex justify-center py-10">
              <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/#">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                  <span class="ml-3 text-xl text-white">tailblocks</span>
              </a>
          </div>
          <div class="bg-white rounded shadow">
              <div class="border-b py-8 font-bold text-black text-center text-xl tracking-widest uppercase">
              Login 
      </div>


              <form class="bg-grey-lightest px-10 py-10">

                  <div class="mb-3">
                      <input class="border w-full p-3" name="email" type="text" placeholder="E-Mail" />
                  </div>
                  <div class="mb-6">
                      <input class="border w-full p-3" name="password" type="password" placeholder="**************" />
                  </div>
                  <div class="flex">
                  <button className={`text-white bg-${props.theme}-500 border-0 py-2 px-6 w-full focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}>
                    Button
                  </button>
                  </div>
              </form>

              <div class="border-t px-10 py-6">
                  <div class="flex justify-between">
                      <a href="/#" class={`font-bold text-${props.theme}-500 hover:text-${props.theme}-600 no-underline`}>Don't have an account?</a>
                      <a href="/#" class="text-gray-600 hover:text-black no-underline">Forgot Password?</a>
                  </div>
              </div>
          </div>
          <div class="mt-6">
              <p class="mt-4 mb-4 text-center text-white">OR</p>
              <div class="flex justify-between">
                  <button class="bg-white hover:bg-red-600 hover:text-white text-gray-600 py-2 px-4 rounded inline-flex items-center">
                      <svg class="fill-current w-4 h-4 mr-2" viewBox="0 0 366 372" xmlns="http://www.w3.org/2000/svg"><path d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z" id="Shape" fill="#EA4335" /><path d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z" id="Shape" fill="#FBBC05" /><path d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z" id="Shape" fill="#4285F4" /><path d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z" fill="#34A853" /></svg>
                      <span>Login with Google</span>
                  </button>
                  <button class="bg-white hover:bg-blue-800 hover:text-white text-gray-600 py-2 px-4 rounded inline-flex items-center">
                      <svg class="fill-current w-4 h-4 mr-2" aria-hidden="true" data-prefix="fab" data-icon="facebook-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path></svg>
                      <span>Login with Facebook</span>
                  </button>
              </div>
          </div>
      </div>
  </div>
    </div>
  </section>)

};

DarkLoginA.defaultProps = {
    theme: 'indigo'
};
  
DarkLoginA.propTypes = {
    theme: PropTypes.string.isRequired
};

export default DarkLoginA;