import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./Menu/Menu";
import CategoryList from "./CategoryList/CategoryList";

const Header = () => {
  return (
    <div className="sticky bg-white top-0 z-10">
      <div className="h-[44px] sm:hidden" id="apple-space"></div>
      <div className="flex justify-around lg:justify-normal lg:items-start lg:py-1 text-sm lg:border-b border-black">
        <Link
          href="#"
          className="border-t border-b w-full h-full text-center lg:w-auto lg:h-auto lg:text-left border-black border-r-[0.25px] py-3 lg:border-none font-anybody px-8 "
        >
          Contribuisci
        </Link>
        <Link
          href="#"
          className="border-t border-b w-full h-full text-center lg:w-auto lg:h-auto lg:text-left border-black py-3 lg:border-none font-anybody px-8"
        >
          Abbonati
        </Link>
        <Link
          href="#"
          className="ml-auto hidden lg:flex py-3 text-sm font-anybody mr-8"
        >
          <div className="mr-2">
            <Image
              src="/profile.png"
              alt="profile"
              width={20}
              height={20}
              className="rounded-full"
            />
          </div>
          <div>Accedi</div>
        </Link>
      </div>
      <Menu />
      <CategoryList />
    </div>
  );
};

export default Header;
