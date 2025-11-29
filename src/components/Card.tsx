export default function Card() {
  return (
    <div className="">
      <div className="w-[210px] h-[215px]  hover:shadow-lg transition-all duration-300">
        <div className="w-[210px] h-[150px] border border-gray-200 rounded-t-[5px] ">
          <p></p>
        </div>
        <div className="w-[210px] h-[65px] border border-gray-200 rounded-b-[5px] border-t-0 py-[3px] px-[10px] ">
          <p className="text-[17px] ">AK-47</p>
          <div className="flex justify-between">
            <p className="text-[17px] mt-[5px] font-semibold text-red ">300 $</p>
            <div className="flex gap-[2px] mt-1">
              <p className="text-[17px]">30</p>
              <p>sale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
