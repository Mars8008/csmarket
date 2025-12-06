import Image from "next/image";
import Head from "@/components/Head";
import Header from "@/components/Header";
import Footer from "../components/Footer"
import Card from "@/components/Card";
import Link from "next/link";
import Popular from "@/components/Popular";
import Latest from "@/components/Latest"

export default function Home() {
  return (
    <div className="">

     <Head/>
     <div className="container mx-auto max-w-[1000px] px-[10px]">
       <div className="mt-[10px] flex text-black gap-[14px] text-[18px] max-sm:text-[14px] font-semibold px-3">
         <a href="/">
           <p className=" font-bold text-[28px] max-sm:text-[20px] max-sm:flex max-sm:justify-center max-sm:pt-1.5">CSMarket</p>
           </a>
           <p className="pt-[9px] ml-[30px] border-b-3 border-[#0088ff] text-[#0088ff] ">Home</p>
          <a href="/market">
           <p className="pt-[9px] ml-5 hover:text-[#0088ff] " >Market</p>
           </a>
           
           
        </div>
        <Popular/>
       <Latest/>
     </div>
      <Footer/>
    </div>
  );
}
