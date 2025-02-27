import React from "react";
import { Featureicon, Icons } from "../data";

function Feature() {
  return (
    <div className="feature">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 container">
        {Featureicon.map((el, idx) => (
          <div
            className="px-4 py-6   bluritem border border-mainColor bg-[#ffffff03] flex flex-col gap-5 hover:bg-[#101128]"
            key={idx}
          >
            <p className="text-secandary text-lg text-right">Ai Features</p>
            <div className="flex">
              {Icons[idx] &&
                React.createElement(Icons[idx], {
                  className: "w-12 h-12",
                })}
            </div>
            <p className="text-4xl font-bold">{el}</p>
            <span className="text-[#b9b9ba] text-lg">
              Our ai text generator will be give you a best solution.
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
