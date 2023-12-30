"use client";

import React from "react";
import BotonVolver from "./BotonVolver";
import ContextApp from "./ContextApp";

const Predimensionamiento = () => {
  return (
    <><BotonVolver />
      <div className="flex mx-6 my-6 space-x-6 ">
        <div className="flex flex-col w-1/2 rounded-lg border-gray-300 border-solid border-4 bg-white h-[450px]">
          
        <ContextApp />
        </div>
      </div>
    </>
  );
};

export default Predimensionamiento;
