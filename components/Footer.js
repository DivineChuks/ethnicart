import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col py-16">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-6 ">
          <Image src="/ethnicart.png" width={130} height={40} />
          <div className="flex flex-row gap-6 mt-6">
            <img src="/facebook.png" className="object-cover w-5 h-5" />
            <img src="/instagram.png" className="object-cover w-5 h-5" />
            <img src="/twitter.png" className="object-cover w-5 h-5" />
            <img src="/google.png" className="object-cover w-5 h-5" />
          </div>
        </div>
        <div className="flex gap-12 flex-row">
          <div className="flex flex-col gap-6">
            <p className="text-base">Restaurants near me</p>
            <p className="text-base">Pick up near me</p>
            <p className="text-base">About Ethnicart</p>
            <p className="text-base">View all cities</p>
            <p className="text-base">View all countries</p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-base">Get help</p>
            <p className="text-base">Add a restaurant</p>
            <p className="text-base">Create a vendor's account</p>
            <p className="text-base">Sign up to deliver</p>
            <p className="text-base">Promotions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
