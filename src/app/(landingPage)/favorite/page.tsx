import { Button } from "@/components/ui/button";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

export default function FavoritePage() {
  return (
    <div className="px-9 py-10">
      <div className="border w-full rounded-xl flex flex-row items-center py-3 px-4 gap-2 ">
        <div className="w-1/12">
          <CiSearch />
        </div>
        <div className="w-11/12">
          <input
            type="text"
            className="w-full bg-transparent focus:border-none focus:outline-none"
            placeholder="Search coffee"
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-x-2 gap-y-3">
          {[0, 1, 2, 3].map((item, index) => (
            <div className="bg-white rounded-xl">
              <div className="relative">
                <div className="absolute top-2 left-2 flex flex-row items-center justify-center gap-1">
                  <FaStar className="text-yellow-400 text-xs" />
                  <div className="text-white text-xs">4.8</div>
                </div>
                <img
                  src={`/images/product${index + 1}.png`}
                  alt=""
                  className="w-full h-[135px] object-cover rounded-xl"
                />
              </div>
              <div className="px-4 pt-2 pb-4">
                <div className="font-semibold mt-1">Cappucino</div>
                <div className="text-xs text-secondary_font">
                  with Chocolate
                </div>
                <div className="flex flex-row justify-between items-center gap-x-1 mt-2">
                  <div className="font-semibold text-sm">Rp. 25.000</div>
                  <div>
                    <Button className="px-2 py-2 h-6 w-6 text-white">+</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
