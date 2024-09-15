export default function IntroTwo() {
  return (
    <section>
      <div className="absolute inset-y-[140px] inset-x-[26px] w-[340px] h-[180px] 
      sm:inset-y-[300px] sm:inset-x-[260px] sm:w-[875px] sm:h-[190px] ">
        {/* Main Heading */}
        <h2 className="text-[36px] leading-[36px] font-extralight text-center 
        sm:text-[64px] sm:leading-[64px]">
          A Decade of Designing Futures, <br />
          Shaping Digital Landscapes Worldwide.
        </h2>

        {/* Stats Section */}
        <div className="absolute inset-y-[px] inset-x-[42px]  flex flex-col text-center gap-5 mt-10
        sm:inset-y-[270px] sm:-inset-x-[100px] sm:flex-row sm:w-[1200px]">
            <h2 className="w-[265px] h-[18px] text-[18px] leading-[18px] font-bold 
            sm:w-[390px] sm:h-[25px] sm:text-[25px] sm:leading-[25px]">
            12+ Years of Design Excellence
            </h2>
            <h2 className=" w-[210px] h-[18px] text-[18px] leading-[18px] font-bold ml-7
            sm:w-[320px] sm:h-[25px] sm:text-[25px] sm:leading-[25px]">
            66+ Innovative Projects
            </h2>
            <h2 className="w-[230px] h-[18px] text-[18px] leading-[18px] font-bold ml-4
            sm:w-[340px] sm:h-[25px] sm:text-[25px] sm:leading-[25px]">
            10+ Global Brands Served
            </h2>
        </div>
      </div>
      <div className="bg-[url('/image/intro2bg.png')] absolute inset-y-[280px] inset-x-[122px] w-[270px] h-[235px] opacity-90
      sm:inset-y-[240px] sm:inset-x-[845px] sm:w-[610px] sm:h-[530px] bg-no-repeat bg-cover bg-center"></div>
      <div className="bg-[url('/image/intro2bg.png')]  absolute inset-y-[280px] -inset-x-[0px] w-[270px] h-[235px] transform scale-x-[-1] opacity-90 
      sm:inset-y-[240px]  sm:w-[600px] sm:h-[530px] bg-no-repeat bg-cover bg-center"></div>
      <div className="sm:bg-[url('/image/webusbg.png')] sm:absolute sm:inset-y-[260px] sm:inset-x-[375px] sm:w-[690px] sm:h-[220px] sm:opacity-50"></div>

    </section>
  );
}

import Image from "next/image";

// 