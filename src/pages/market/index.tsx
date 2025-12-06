import Image from "next/image";
import Head from "@/components/Head";
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="">

     <Head/>
     <div className="container mx-auto max-w-[1200px]">
       <div className="mt-[10px] flex text-black gap-[14px] text-[18px] font-semibold px-3">
        <a href="/">
           <p className=" font-bold text-[28px] max-sm:flex max-sm:justify-center">CSMarket</p>
           </a>
           <a href="/">
           <p className="pt-[9px] ml-[30px] hover:text-[#0088ff]">Home</p>
           </a>
           <p className="pt-[9px] ml-5  border-b-3 border-[#0088ff] text-[#0088ff] ">Market</p>
           
        </div>
    
     </div>
      <Footer/>
    </div>
  );
}
