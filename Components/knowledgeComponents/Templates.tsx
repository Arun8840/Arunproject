import React from "react";
import Skills from "./Skills";

function Templates() {
  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-full grid place-items-center p-2">
        <div className="p-2 rounded-lg container h-full ">
          <h1 className="text-center capitalize tracking-wider font-bold text-[4rem]">
            I have a Knowledge of
          </h1>

          <Skills />
        </div>
      </div>
    </div>
  );
}

export default Templates;
