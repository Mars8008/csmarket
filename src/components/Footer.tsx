export default function Header() {
    return(
        <div className="mt-[10px] bg-[#f7f7f7] flex text-black gap-[14px] text-[18px]  mt-[700px] h-[400px] px-3">
            <div className="container mx-auto max-w-[1200px]">
           <p className=" font-bold max-sm:text-[16px] text-[28px] mt-[40px] mb-3">CSMarket</p>
           <div>
            <div className="flex max-sm:text-[16px] text-[20px] gap-10 mb-4 ml-0.5">
            <p>Mail:</p>
            <p>hi.avitex@gmail.com</p>
            </div>
            <div className="flex max-sm:text-[16px] text-[20px] gap-6 mb-4  ml-0.5">
            <p>Phone:</p>
            <p>999-134-1213</p>
            </div>
            <div className="flex max-sm:text-[16px] text-[20px] gap-3 mb-4  ml-0.5">
            <p>Address:</p>
            <p> 549 Oak sr.Krystal</p>
            </div>
           </div>
           </div>
           
           
        </div>
    )
}