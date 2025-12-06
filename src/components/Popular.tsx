import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "./Card";

export default function Popular() {
    return(
        <div className="ml-[10px]">
            <div className="flex justify-between text-black mt-[200px] border-b-2 border-gray-100 max-sm:text-[14px] text-[16px]">
            <div className="border-b-3 border-[#0088ff]">
            <p className="font-bold text-[#0088ff]">Popular</p>
            </div>
            <div className="flex max-sm:pt-0.5">
            <p className=" text-[14px] max-sm:text-[12px]  text-gray-600">View market </p>
            <MdOutlineKeyboardArrowRight className="text-[#0088ff] mt-0.5"/>
            </div>
            </div>
            <div className="flex gap-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
              <div className="flex gap-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
                <div className="flex gap-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
                <div className="flex gap-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
        </div>
    )
}