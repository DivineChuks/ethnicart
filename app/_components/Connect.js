import Image from "next/image";
import React from "react";

const Connect = () => {
  return (
    <div className="bg-secondary py-20 px-4 md:px-0 flex flex-col justify-center">
      <div className="flex flex-col max-w-[1200px] items-center md:flex-row mx-auto">
        <div className="flex flex-col flex-1 mb-6 md:mb-0">
          <img src="/chef.png" className="w-full md:w-[300px] h-[218px]" />
        </div>
        <div className="flex-1 flex flex-col gap-4" style={{ flex: 2 }}>
          <h2 className="font-semibold text-3xl">
            Connect with excited Food Lovers looking<br></br> to have a taste of
            your cuisine.
          </h2>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur. Diam nec est rhoncus
            scelerisque in aliquet nunc porta.scelerisque in aliquet nunc porta.
          </p>
          <button className="bg-black px-4 py-2 text-base z-50 font-semibold rounded-md text-white w-max">
            Become a Vendor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
