"use client";
import React, { FC, useState } from "react";
import Product from "./Product";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";

interface ListProductProps {}

const ListProduct: FC<ListProductProps> = () => {
  const [selected, setSelected] = useState("cappucino");

  return (
    <div className="mt-[85px] w-full mb-20">
      <div className="flex flex-row items-center gap-2 text-sm overflow-x-auto scrolling pl-9">
        <div
          onClick={() => setSelected("cappucino")}
          className={`${
            selected === "cappucino"
              ? "bg-primary text-white"
              : "bg-secondary text-primary_font"
          } py-2 px-3 rounded-xl`}
        >
          Cappucino
        </div>
        <div
          onClick={() => setSelected("macciato")}
          className={`${
            selected === "macciato"
              ? "bg-primary text-white"
              : "bg-secondary text-primary_font"
          } py-2 px-3 rounded-xl`}
        >
          Macciato
        </div>
        <div
          onClick={() => setSelected("latte")}
          className={`${
            selected === "latte"
              ? "bg-primary text-white"
              : "bg-secondary text-primary_font"
          } py-2 px-3 rounded-xl`}
        >
          Latte
        </div>
        <div
          onClick={() => setSelected("Expresso")}
          className={`${
            selected === "Expresso"
              ? "bg-primary text-white"
              : "bg-secondary text-primary_font"
          } py-2 px-3 rounded-xl`}
        >
          Expresso
        </div>
        <div
          onClick={() => setSelected("Americano")}
          className={`${
            selected === "Americano"
              ? "bg-primary text-white"
              : "bg-secondary text-primary_font"
          } py-2 px-3 rounded-xl`}
        >
          Americano
        </div>
      </div>
      <div className="mt-1 px-9">
        <div className="grid grid-cols-2 gap-x-2 gap-y-3">
          {[0, 1, 2, 3].map((item, index) => (
            <div className="bg-white rounded-xl">
              <div className="relative">
                <div className="absolute top-2 left-2 flex flex-row items-center justify-center gap-1">
                  <FaStar className="text-yellow-400 text-xs"/>
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
};

export default ListProduct;
