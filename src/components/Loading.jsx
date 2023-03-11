import React, { useState } from "react";
import loading from "../assets/load.gif";
import Hero from "./Hero";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div>
      {isLoading ? (
        <>
          <div className="flex h-screen bg-[#161618] justify-center text-center items-center z-50 absolute top-0 left-0 w-full">
            <div className="justify-center text-center">
              <img className="w-[500px]" src={loading} alt="" />
              <h1 className="text-white font-montserrat font-bold text-lg">
                LOADING GAN...
              </h1>
            </div>
          </div>
        </>
      ) : (
        <div className="hidden"></div>
      )}
    </div>
  );
};

export default Loading;
