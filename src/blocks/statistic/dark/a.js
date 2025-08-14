import React from "react";

function DarkStatisticA() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 xl:py-24 py-12 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
              2.7K
            </h2>
            <p className="leading-relaxed">Users</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
              1.8K
            </h2>
            <p className="leading-relaxed">Subscribes</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
              35
            </h2>
            <p className="leading-relaxed">Downloads</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
              4
            </h2>
            <p className="leading-relaxed">Products</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DarkStatisticA;
