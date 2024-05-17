import React, { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CiSearch } from "react-icons/ci";

interface TopBarProps {}

const TopBar: FC<TopBarProps> = () => {
  return (
    <div className="h-[40vh] bg-gradient-to-bl from-[#131313] to-[#313131] relative px-9 py-10 text-white">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-sm">Location</div>
          <div>Telegraf IV, Telkomas</div>
        </div>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="bg-[#313131] w-full rounded-xl flex flex-row items-center mt-7 py-3 px-4 gap-2 text-white">
        <div className="w-1/12">
          <CiSearch />
        </div>
        <div className="w-11/12">
          <input type="text" className="w-full bg-transparent focus:border-none focus:outline-none" placeholder="Search coffee"/>
        </div>
      </div>
      <img
        src="/images/promo.png"
        alt=""
        className="absolute top-1/2 translate-y-1/2 left-[50%] -translate-x-1/2 w-full px-9"
      />
    </div>
  );
};

export default TopBar;
