import React from "react";
import Feature from "./Feature";

const RightCore = ({
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  para,
  heading,
}: any) => {
  return (
    <div>
      
        <div className=" sm:w-[865px] sm:h-[530px] border-t border-r border-b border-black p-12 
        w-[328px] h-[627px] ">
          {/* Heading Section */}
          <h2 className=" font-geomanist sm:text-[25px] font-bold sm:leading-[40px] text-left
          text-[18px] leading-[30px] ">
            {heading}
          </h2>
          <p className="mt-2 mb-8 font-geomanist sm:text-[16px] font-normal sm:leading-[25px] text-left
          text-[18px] leading-[30px]">
            {para}
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-7 mt-[80px] ">
            <Feature title={title1} />
            <Feature title={title2} />
            <Feature title={title3} />
            <Feature title={title4} />
            <Feature title={title5} />
            <Feature title={title6} />
          </div>

          {/* Explore Button */}
          {/* <div className="mt-8 w-[103.38px] h-[47px] top-[437px] left-[425.5px] p-[10px_12px] gap-[10px] border-t border-black border-x-2	border-y-2">
        <button className=" h-[47px] ">
            explore <span className=" w-[12px] h-[14px] gap-0 border-t-2 border-transparent  rotate-[-45deg]">↗️</span>
        </button>
    </div> */}

          <button className="border border-black sm:p-2 sm:w-28 sm:h-12 flex flex-row sm:justify-between sm:px-4 font-semibold sm:mt-[40px] sm:hover:bg-[#EE202E] sm:hover:text-white sm:hover:border-none sm:duration-300 sm:gap-0
          w-[267px] h-[47px] pt-2.5 pb-2.5 pr-3 pl-[100px] gap-[15px] text-[16px] ">
            <p>Explore</p>
            <span className=" w-[12px] h-[14px] gap-0 border-t-2 border-transparent">
              ↗️
            </span>
          </button>
        </div>
      
    </div>
  );
};

export default RightCore;
