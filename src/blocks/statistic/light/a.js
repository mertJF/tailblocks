import React from "react";

function LightStatisticA() {
  return (
    <section className="text-gray-600">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="font-medium sm:text-4xl text-3xl text-gray-900">
              2.7K
            </h2>
            <p className="leading-relaxed">Users</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="font-medium sm:text-4xl text-3xl text-gray-900">
              1.8K
            </h2>
            <p className="leading-relaxed">Subscribes</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="font-medium sm:text-4xl text-3xl text-gray-900">
              35
            </h2>
            <p className="leading-relaxed">Downloads</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="font-medium sm:text-4xl text-3xl text-gray-900">
              4
            </h2>
            <p className="leading-relaxed">Products</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LightStatisticA;
