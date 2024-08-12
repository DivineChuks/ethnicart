import { campton } from "../layout";
import React from "react";

const Offer = () => {
  const offers = [
    {
      img: "/seamless.png",
      title: "Seamless Delivery",
      desc: "We will relive you of the excess stress and handle all the deliveries, reducing expenses for our vendors",
    },
    {
      img: "/safe.png",
      title: "Safe Transactions",
      desc: "Ensuring that customers get what they order with our trusted riders, be sure  to receive those 5-star reviews ",
    },
    {
      img: "/range.png",
      title: "Wide range of visibilty",
      desc: "With our large customer database, and efforts to prompte business, we assure visibilty on a large scale.",
    },
  ];
  return (
    <div className="py-16 flex flex-col px-4 md:px-0">
      <div className="mx-auto max-w-[1200px] w-full">
        <h2
          className={`mb-10 ${campton.className} text-[28px] md:text-[36px] font-semibold`}
        >
          What We Offer
        </h2>
        <div className="w-full grid grid-cols md:grid-cols-3 gap-14">
          {offers.map((offer) => (
            <div className="flex relative flex-1 items-center flex-col">
              <img src={offer.img} className="object-cover " />
              <h2
                className={`mt-4 ${campton.className} font-semibold text-2xl`}
              >
                {offer.title}
              </h2>
              <p className="text-center text-base mt-4">{offer.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
