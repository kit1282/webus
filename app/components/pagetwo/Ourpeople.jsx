import Image from "next/image";

export default function OurPeople() {
  return (
    <div className="flex flex-col mt-[100px] ml-[30px] sm:ml-[80px]">
      {/* Heading section */}
      <div>
        <h1
          className=" w-[185px] h-[36px] text-[36px] leading-[36px] font-medium
             sm:w-[325px] sm:h-[64px] sm:text-[64px] sm:leading-[64px]"
        >
          Our People
        </h1>

        <div>
        <h2
          className=" w-[225px] h-[72px] text-[36px] leading-[36px] font-extralight
            ] sm:w-[540px] sm:h-[128px] sm:text-[64px] sm:leading-[64px]"
        >
          where great work comes
        
        <span
          className=" w-[38px] h-[38px] text-[38px] leading-[38px] font-extralight
             sm:w-[585px] sm:h-[55px] sm:text-[46px] sm:leading-[25px] sm:font-thin ml-[40px]"
        >
          →
        </span>
        </h2>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row mt-[70px] gap-[50px] sm:gap-[120px]">
        {/* image */}
        <Image
          src="/image/Rectangle1.png"
          alt="people"
          width={330}
          height={260}
          className=" sm:w-[560px] sm:h-[440px]"
        />

        <div className="grid grid-cols-2 gap-[50px]">
          <div
            className=" w-[150px] h-[140px] flex flex-col gap-[20px] 
            s sm:w-[270px] sm:h-[160px]"
          >
            <h1
              className="text-[25px] leading-[25px] font-light 
                sm:text-[40px] sm:leading-[40px]"
            >
              Creative Powerhouses
            </h1>
            <p
              className="text-[14px] leading-[24px] font-extralight
                sm:text-[20px] sm:leading-[34px]"
            >
              12+ years average experience in cutting-edge design
            </p>
          </div>
          <div
            className=" w-[150px] h-[140px] flex flex-col gap-[20px]
             sm:w-[270px] sm:h-[160px]"
          >
            <h1
              className="text-[25px] leading-[25px] font-light
                sm:text-[40px] sm:leading-[40px]"
            >
              Dedicated Experts
            </h1>
            <p
              className="text-[14px] leading-[24px] font-extralight
                sm:text-[20px] sm:leading-[34px]"
            >
              100% full-time team committed to your success
            </p>
          </div>
          <div
            className=" w-[150px] h-[140px] flex flex-col gap-[20px]
             sm:w-[270px] sm:h-[160px]"
          >
            <h1
              className="text-[25px] leading-[25px] font-light
                sm:text-[40px] sm:leading-[40px]"
            >
              Diverse Innovators
            </h1>
            <p
              className="text-[14px] leading-[24px] font-extralight
                sm:text-[20px] sm:leading-[34px]"
            >
              15+ industries transformed by our multidisciplinary talent
            </p>
          </div>
          <div
            className=" w-[150px] h-[140px] flex flex-col gap-[20px]
             sm:w-[270px] sm:h-[160px]"
          >
            <h1
              className="text-[25px] leading-[25px] font-light
                sm:text-[40px] sm:leading-[40px]"
            >
              Agile Professionals
            </h1>
            <p
              className="text-[14px] leading-[24px] font-extralight
                sm:text-[20px] sm:leading-[34px]"
            >
              30% faster project delivery through adaptive workflows
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
