'use client'
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import { BsFillHandbagFill } from "react-icons/bs";
import { GiCoffeeCup } from "react-icons/gi";
import { GoHomeFill } from "react-icons/go";
import { IoPersonCircle } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
    const pathname = usePathname()

  return (
    <div className="fixed bottom-0 w-full h-16 bg-white flex justify-between items-center px-12 text-2xl text-[#8D8D8D] z-50 rounded-tl-[30px] rounded-tr-[30px]">
      <a href="/" className={`${pathname === '/' ? 'text-primary' : ''} flex flex-col items-center gap-y-[2px]`}>
        <div>
        <GoHomeFill />
        </div>
        <div className="text-xs">
            Home
        </div>
      </a>
      <a href="/favorite" className={`${pathname === '/favorite' ? 'text-primary' : ''} flex flex-col items-center gap-y-[2px]`}>
        <div>
        <MdOutlineFavorite />
        </div>
        <div className="text-xs">
            Favorite
        </div>
      </a>
      <a href="/cart" className={`${pathname === '/cart' ? 'text-primary' : ''} flex flex-col items-center gap-y-[2px]`}>
        <div>
        <BsFillHandbagFill className="text-xl"/>
        </div>
        <div className="text-xs">
            Cart
        </div>
      </a>
      <a href="/order" className={`${pathname === '/order' ? 'text-primary' : ''} flex flex-col items-center gap-y-[2px]`}>
        <div>
        <GiCoffeeCup />
        </div>
        <div className="text-xs">
            Order
        </div>
      </a>
    </div>
  );
};

export default Menu;
