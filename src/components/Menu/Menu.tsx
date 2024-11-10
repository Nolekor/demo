"use client";
import Image from "next/image";
import React, { useState } from "react";
import MenuContent from "./MenuContent";

const Menu = () => {
  const [menuStatus, setMenuStatus] = useState<boolean>(false);
  return (
    <>
      <div className="flex justify-between">
        <div
          className="w-24 h-24 border-b border-r border-black flex flex-shrink justify-center items-center"
          onClick={() => setMenuStatus((prevState) => !prevState)}
        >
          {menuStatus ? (
            <Image
              src="/closeIcon.png"
              alt="close icon"
              width={24}
              height={24}
            />
          ) : (
            <Image src="/icon.png" alt="hambuger" width={24} height={24} />
          )}
        </div>
        <div className="w-full border-b border-black flex flex-grow justify-center items-center"></div>
        <div className="w-24 h-24 border-b border-l border-black flex flex-shrink justify-center items-center">
          <Image src="/search.png" alt="search" width={24} height={24} />
        </div>
      </div>
      <MenuContent menuStatus={menuStatus} />
    </>
  );
};

export default Menu;
