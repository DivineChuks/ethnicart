import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col w-full h-16 items-center justify-center">
      <div className="flex flex-row justify-between items-center w-full max-w-[1200px]">
        <div>
          <Link href="/">
            <Image src="/ethnicart.png" width={130} height={40} />
          </Link>
        </div>
        <div className="flex flex-row gap-4">
          <button className="bg-transparent border font-semibold border-[#D9D9D9] rounded-md px-4 py-1">
            Register
          </button>
          <button className="bg-primary text-white px-4 py-1 rounded-md">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
