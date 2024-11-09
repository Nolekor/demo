import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="h-[44px] sm:hidden" id="apple-space"></div>
      <div className="flex justify-around lg:justify-normal lg:items-start lg:py-1 text-sm lg:border-b border-black">
        <div className="border-t border-b w-full h-full text-center lg:w-auto lg:h-auto lg:text-left border-black border-r-[0.25px] py-3 lg:border-none font-anybody px-8 ">
          Contribuisci
        </div>
        <div className="border-t border-b w-full h-full text-center lg:w-auto lg:h-auto lg:text-left border-black py-3 lg:border-none font-anybody">
          Abbonati
        </div>
        <div className="ml-auto hidden lg:flex py-3 text-sm font-anybody mr-8">
          <div className="mr-2">
            <Image
              src="/profile.png"
              alt="profile"
              width={20}
              height={20}
              className="rounded-full "
            />
          </div>
          <>Accedi</>
        </div>
      </div>
    </>
  );
};

export default Header;
