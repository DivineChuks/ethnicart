import Link from "next/link";
import React from "react";

const Cities = () => {
  const cities = [
    "Belfast",
    "Birmingham",
    "Bradford",
    "Brighton",
    "Bristol",
    "Cardiff",
    "Coventry",
    "Derby",
    "Edinburgh",
    "Glasgow",
    "Hull",
    "Leeds",
    "Leicester",
    "Liverpool",
    "London",
    "Manchester",
    "Newcastle",
    "Northampton",
    "Nottingham",
    "Portsmouth",
    "Plymouth",
    "Sheffield",
    "Southampton",
    "Stoke",
    "Reading",
  ];

  return (
    <div className="flex flex-col py-14">
      <div className="mx-auto max-w-[1200px] w-full">
        <div className="flex justify-between w-full mb-10">
          <h2 className="font-semibold text-3xl">Cities Available</h2>
          <Link href="/" className="underline text-xl font-semibold mr-20">
            See all cities
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {cities.map((city, index) => (
            <p className="text-base" key={index}>
              {city}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cities;
