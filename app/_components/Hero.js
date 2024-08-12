import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-hero bg-top bg-cover h-[700px] flex flex-col py-20 justify-center">
      <div className="absolute inset-0 bg-black z-10 bg-opacity-40"></div>
      <div className="flex flex-col max-w-[1200px] mx-auto md:flex-row w-full">
        <div className="flex flex-col flex-1 gap-4">
          <h2 className="text-5xl leading-[50px] z-50 font-semibold text-white">
            Offer quality service? Find that perfect<br></br> match here
          </h2>
          <p className="max-w-[500px] z-50 font-semibold text-white">
            Join our platform to reach eager customers looking for your
            services. Expand your reach, boost your sales, and watch your
            business grow effortlessly.
          </p>
          <button className="bg-primary px-4 py-2 z-50 font-semibold rounded-md text-white w-max">
            Get started
          </button>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Hero;
