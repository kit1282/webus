import Image from "next/image";

export default function ProjectInfo() {
    return (
        <div className="flex flex-col gap-10 sm:flex-row ml-[30px] -mt-[170px]">

            <div className="flex flex-col gap-4 sm:w-[381px] sm:h-[581px] sm:absolute sm:top-[2391px] sm:left-[40px] sm:gap-0">
                <Image
                    src="/image/casestudy1.png"
                    alt="Lorem ipsum dolor sit amet"
                    width={330}
                    height={240}
                    className="sm:w-[619px] sm:h-[400px] sm:top-[129px] sm:absolute sm:left-[12px] gap-0"
                />
                <h2 className=" h-[18px] w-[240px] text-[18px] leading-[18px]  sm:w-[344px] sm:h-[25px] sm:absolute sm:top-[529px] sm:left-[16px] gap-0  sm:text-[17px] font-semibold sm:font-medium sm:leading-[25px] sm:text-sm:left">
                    Lorem ipsum dolor sit amet
                </h2>
                <p className=" h-[50px] w-[310px] text-[14px] leading-[25px] sm:w-[362px] sm:h-[50px] sm:absolute sm:top-[560px] sm:left-[15px] gap-0 sm:text-[13px] font-normal sm:leading-[25px] sm:text-left ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt
                </p>
                <a href="">
                    <div className="w-[83px] sm:w-[98px] sm:h-[50px] sm:absolute sm:top-[622px] sm:left-[15px] gap-0 ">
                        <p className="sm:w-[98px] sm:h-[30px] gap-0 sm:text-[14px] font-normal sm:leading-[30px] sm:text-sm:left text-red-600 ">
                            Read More
                        </p>
                        <div className="w-[32px] border-b border-[1px] border-[#EE202E] hover:sm:w-[83px] ease-in-out duration-100"></div>
                    </div>
                </a>
            </div>

            <div className="flex flex-col gap-4 sm:w-[381px] sm:h-[581px] sm:absolute sm:top-[2391px] sm:left-[555px] sm:gap-0">
                <Image
                    src="/image/casestudy2.png"
                    alt="Lorem ipsum dolor sit amet"
                    width={330}
                    height={240}
                    className=" sm:w-[570px] sm:h-[400px] sm:top-[129px] sm:absolute sm:left-[11px] gap-0]"

                />

                <h2 className=" h-[18px] w-[240px] text-[18px] leading-[18px] sm:w-[344px] sm:h-[25px] sm:absolute sm:top-[529px] sm:left-[15px] gap-0  sm:text-[17px] font-semibold sm:font-medium sm:leading-[25px] ">
                    Lorem ipsum dolor sit amet
                </h2>
                <p className="h-[50px] w-[310px] text-[14px] leading-[25px] sm:w-[362px] sm:h-[50px] sm:absolute sm:top-[560px] sm:left-[15px] gap-0 sm:text-[13px] font-normal sm:leading-[25px] sm:text-sm:left ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt
                </p>
                <a href="">
                    <div className="w-[83px] sm:w-[98px] sm:h-[50px] sm:absolute sm:top-[622px] sm:left-[18px] gap-0">
                        <p className="sm:w-[83px] sm:h-30px font-normal sm:text-[14px] sm:leading-[30px] text-red-600 
                        ">
                            Read More
                        </p>
                        <div className="w-[32px] border-[1px] border-[#EE202E] "></div>
                    </div>
                </a>
            </div>

            <div className="flex flex-col gap-4 sm:w-[381px] sm:h-[581px] sm:absolute sm:top-[2391px] sm:left-[950px] sm:gap-0">
                <Image
                    src="/image/casestudy3.png"
                    alt="Dragatron"
                    width={330}
                    height={240}
                    className="sm:w-[770px] sm:h-[400px] sm:top-[129px] sm:absolute sm:left-[90px] gap-0"
                />

                <h2 className=" h-[18px] w-[240px] text-[18px] leading-[18px] sm:w-[344px] sm:h-[25px] sm:absolute sm:top-[529px] sm:left-[90px] gap-0  sm:text-[17px] font-semibold sm:font-medium sm:leading-[25px]">
                    Lorem ipsum dolor sit amet
                </h2>
                <p className="h-[50px] w-[310px] text-[14px] leading-[25px] sm:w-[362px] sm:h-[50px] sm:absolute sm:top-[560px] sm:left-[92px] gap-0 sm:text-[13px] font-normal sm:leading-[25px] sm:text-sm:left ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt
                </p>
                <a href="">
                    <div className="w-[83px] sm:w-[98px] sm:h-[50px] sm:absolute sm:top-[622px] sm:left-[98px] gap-0">
                        <p className="sm:w-[83px] sm:h-30px font-normal sm:text-[14px] sm:leading-[30px]  text-red-600 ">
                            Read More
                        </p>
                        <div className="w-[32px] border-[1px] border-[#EE202E] "></div>
                    </div>
                </a>
            </div>
        </div>
    );
}
