import Image from "next/image";

export default function CaseStudies() {
  return (
    <div className="flex flex-col gap-[60px] ml-[90px] ">
      <div className="flex gap-[50px] ">
        <div className="flex flex-col gap-4">
          <Image
            src="/image/rectangle17.png"
            alt="Uspeek"
            width={328}
            height={242}
            className=" sm:w-[619px] sm:h-[457px]
           "
          />
          <h2
            className="sm:w-[85px] sm:h-[25px] font-medium sm:text-[25px] sm:leading-[25px]
        w-[62px] h-[18px]  text-[18px] leading-[18px]"
          >
            Uspeek
          </h2>
          <p
            className="sm:w-[451px] sm:h-[50px] font-normal sm:text-[16px] sm:leading-[25px]
        w-[322px] h-[50px]  text-[14px] leading-[25px]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          <a href="">
            <div
              className="sm:min-w-[103px] sm:min-h-[50px]  p-[10px] 
          min-w-[103px] min-h-[50px] "
            >
              <p className="w-[83px] h-30px font-normal text-[16px] leading-[30px] text-red-600 ">
                Know More
              </p>
              <div className="w-[32px] border-b border-[1px] border-[#EE202E] hover:w-[83px] ease-in-out duration-100"></div>
            </div>
          </a>
        </div>

        <div className="flex flex-col gap-6">
          <Image
            src="/image/rectangle18.png"
            alt="WASL"
            width={328}
            height={242}
            className="  sm:w-[619px] sm:h-[626px]
          "
          />

          <div className="flex gap-11">
          <div className="flex flex-col gap-4">
            <h2
              className="sm:w-[65px] sm:h-[25px] font-medium sm:text-[25px] sm:leading-[25px]
        w-[47px] h-[18px] text-[18px] leading-[18px]"
            >
              WASL
            </h2>
            <p
              className="sm:w-[451px] sm:h-[50px] font-normal sm:text-[16px] sm:leading-[25px]
        w-[322px] h-[50px] text-[14px] leading-[25px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
          <a href="">
            <div className="sm:min-w-[103px] sm:min-h-[50px] p-[10px] inset-x-[22px] inset-y-[3425px] ">
              <p className="w-[83px] h-30px font-normal text-[16px] leading-[30px] text-red-600 ">
                Know More
              </p>
              <div className="w-[32px] border-[1px] border-[#EE202E] "></div>
            </div>
          </a>
        </div>
          </div>
      </div>

      <div className="flex gap-[120px] ">
        <div className="flex flex-col justify-end gap-5">
        <h2
          className="sm:w-[114px] sm:h-[25px] font-medium sm:text-[25px] sm:leading-[25px]
        w-[82px] h-[18px]  text-[18px] leading-[18px]"
        >
          Dragatron
        </h2>
        <p
          className="sm:w-[242px] sm:h-[75px]  font-normal sm:text-[16px] sm:leading-[25px]
        w-[322px] h-[50px] text-[14px] leading-[25px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
        <a href="">
          <div
            className="sm:min-w-[103px] sm:min-h-[50px] p-[10px] 
          min-w-[103px] min-h-[50px] "
          >
            <p className="w-[83px] h-30px font-normal text-[16px] leading-[30px] text-red-600 ">
              Know More
            </p>
            <div className="w-[32px] border-[1px] border-[#EE202E] "></div>
          </div>
        </a>
        </div>
        <Image
          src="/image/rectangle19.png"
          alt="Dragatron"
          width={328}
          height={242}
          className=" sm:w-[930px] sm:h-[529px] "
        />
      </div>

      <a href="">
        <div className="sm:w-[220px] sm:h-[47px] sm:pt-2.5 sm:pr-3 sm:pb-2.5 sm:pl-3 sm:gap-2.5 sm:border sm:border-black sm:ml-[1040px] sm:-mt-10">
          <div className="sm:w-[200px] sm:h-[27px] sm:gap-2.5 sm:flex ">
            <p className="sm:w-[160px] sm:h-[27px] sm:font-medium sm:text-[16px] sm:leading-[27px] sm:opacity-100 opacity-0">
              view all case studies
            </p>
            <Image
              src="/image/Vector.png"
              alt="vector"
              width={0}
              height={0}
              className="sm:-rotate-45 sm:border-2 sm:w-[12] sm:h-[14] "
            />
          </div>
        </div>
      </a>
    </div>
  );
}
