export default function Card() {
  return (
    <div className="mt-4 ">
      <div className="  ">
        <div className="w-[180px] h-[120px]  ">
          <img src="../images/ak4.jpeg" className="rounded-t-[5px] "/>
        </div>
        <div className="w-[180px] h-[45px] border border-gray-200 rounded-b-[5px] border-t-0 py-[2px] px-[10px] text-[14px] text-black">
          <p className="hover:text-[#e5a743] ">AK-47 | Bloodsport fact..</p>
          <div className="flex justify-between">
            <p className=" mt-[2px] font-semibold text-[#e5a743] ">300 $</p>
           
          </div>
        </div>
      </div>
    </div>
  );
}
