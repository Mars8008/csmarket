import Image from "next/image";
import Head from "@/components/Head";
import Header from "@/components/Header";
import Footer from "../components/Footer"
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="">

     <Head/>
     <div className="container mx-auto max-w-[1200px]">
     <Header/>
    
     </div>
      <Footer/>
    </div>
  );
}
