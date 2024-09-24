import Image from "next/image";

export default function Quote() {
  return (
    <div className="relative flex flex-col w-[392px] h-[220px] -mt-[275px] sm:mt-[0px] sm:w-[1460px] sm:h-[370px] items-center justify-center  bg-[url('/image/Rectangle24.png')] bg-cover ">

      {/* Text Content */}
      <div className="absolute flex flex-col items-center justify-center text-white text-center ">
        {/* Quote Text */}
        <p className="text-[14px] leading-[25px] font-normal w-[300px] sm:text-[16px] sm:w-[585px]">
          Visionary digital architects redefining user experiences for global brand leaders.
        </p>

        {/* Heading */}
        <h1 className="text-[36px] leading-[36px] font-medium sm:text-[64px] sm:leading-[64px]">
          WHO WE ARE
        </h1>
      </div>
    </div>
  );
}
