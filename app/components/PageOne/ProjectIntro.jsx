import Image from "next/image";

export default function ProjectIntro() {
  return (
    <div className="flex sm:flex-row flex-col ml-[30px] sm:ml-[90px] mt-[150px] sm:gap-[150px] gap-[50px] ">
      <div
        className="sm:w-[597px] sm:h-[192px] 
            w-[328px] h-[144px]  "
      >
        <h1
          className="font-light sm:text-[64px] sm:leading-[64px] 
                text-[36px] leading-[36px]"
        >
          Shaping Digital Futures,
        </h1>
        <span
          className="font-light sm:text-[64px] sm:leading-[64px] text-black/10 
                text-[36px] leading-[36px]"
        >
          One Design at a Time
        </span>
      </div>
      <div
        className="sm:w-[512px] sm:h-[300px] 
            w-[155px] h-[90px] ml-[180px] sm:ml-0 "
      >
        <div>
          <Image
            src="/image/sixisix.png"
            width={155}
            height={90}
            alt="Sixsix Image"
            className="sm:w-[512px] sm:h-[300px] "
          />
        </div>
        <h2 className="sm:w-[224px] sm:h-[64px] sm:leading-[64px] sm:text-[64px] sm:font-light  sm:opacity-100 opacity-0">
          projects
        </h2>
      </div>
    </div>
  );
}
