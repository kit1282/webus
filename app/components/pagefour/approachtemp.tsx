import React from "react";
import FeatureDiv from "./featurediv";

const ApproachTemp = ({
  header,
  para,
  heading1,
  heading2,
  heading3,
  heading4,
  point1,
  point2,
  point3,
  point4,
}: any) => {
    return(
<div>
    <h1
      className="flex flex-col w-[330px] h-[36px] text-[36px] leading-[36px] font-light mt-[80px] ml-[30px]
     sm:w-[500px] sm:h-[64px] sm:text-[64px] sm:leading-[64px] sm:mt-[100px] sm:ml-[500px]"
    >
      Work Approaches
    </h1>
    <div className="flex flex-col mt-[40px] gap-[50px] sm:flex-row sm:mt-[100px] sm:ml-[200px] sm:gap-[200px] ml-[30px]">
      <div className="flex flex-col gap-[30px] sm:gap-[50px] ">
        <h2
        className=" w-[190px] h-[50px] text-[25px] leading-[25px] font-semibold
     sm:w-[190px] sm:h-[80px] sm:text-[40px] sm:leading-[40px]"
      >
        {header}
      </h2>
      <p
        className=" w-[330px] h-[60px] text-[18px] leading-[30px] font-extralight
     sm:w-[260px] sm:h-[90px] sm:text-[25px] sm:leading-[30px]"
      >
        {para}
      </p>
      </div>
      {/* FeatureDiv Grid */}
      <div className="flex flex-col gap-12 h-[650px]
      sm:gap-[150px] sm:h-[425px] sm:w-[690px] sm:flex-row">
        <div className="flex flex-col gap-12 sm:gap-[50px] ">
        <FeatureDiv heading={heading1} point={point1} />
        <FeatureDiv heading={heading3} point={point3} />
        </div>
        <div className="flex flex-col gap-12 sm:gap-[50px]">
        <FeatureDiv heading={heading2} point={point2} />
        <FeatureDiv heading={heading4} point={point4} />
        </div>
      </div>

    </div>
  </div>
    );
  
};

export default ApproachTemp;

