import Hero from "@/app/_components/Hero";
import Offer from "@/app/_components/Offer";
import React from "react";
import Cities from "./_components/Cities";
import Connect from "./_components/Connect";

const page = () => {
  return (
    <div>
      <Hero />
      <Offer />
      <Connect />
      <Cities />
      <hr />
    </div>
  );
};

export default page;
