import ListProduct from "@/components/organism/Home/ListProduct";
import TopBar from "@/components/organism/Home/TopBar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <TopBar />

      <ListProduct />
    </div>
  );
}
