import Image from "next/image";

export default function ProjectInfo() {
    return (
        <div>
            <div className="w-[381px] h-[581px] absolute top-[2391px] left-[40px] gap-0">
                <Image
                    src="/image/casestudy1.png"
                    alt="Lorem ipsum dolor sit amet"
                    width={619}
                    height={661}
                    className="w-[380px] h-[384px] top-[129px] absolute left-[12px] gap-0"
                />
                <h2 className=" w-[344px] h-[25px] absolute top-[529px] left-[16px] gap-0  text-[17px] font-medium leading-[25px] text-left">
                    Lorem ipsum dolor sit amet
                </h2>
                <p className="w-[362px] h-[50px] absolute top-[560px] left-[15px] gap-0 text-[13px] font-normal leading-[25px] text-left ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt
                </p>
                <a href="">
                    <div className="w-[98px] h-[50px] absolute top-[622px] left-[15px] gap-0 ">
                        <p className="w-[98px] h-[30px] gap-0 text-[14px] font-normal leading-[30px] text-left text-red-600 ">
                            Read More
                        </p>
                        <div className="w-[32px] border-b border-[1px] border-[#EE202E] hover:w-[83px] ease-in-out duration-100"></div>
                    </div>
                </a>
            </div>

            <div className="w-[381px] h-[581px] absolute top-[2391px] left-[555px] gap-0">
                <Image
                    src="/image/casestudy2.png"
                    alt="Lorem ipsum dolor sit amet"
                    width={570}
                    height={200}
                    className=" w-[380px] h-[384px] top-[129px] absolute left-[11px] gap-0]"

                />

                <h2 className="w-[344px] h-[25px] absolute top-[529px] left-[15px] gap-0  text-[17px] font-medium leading-[25px] ">
                    Lorem ipsum dolor sit amet
                </h2>
                <p className="w-[362px] h-[50px] absolute top-[560px] left-[15px] gap-0 text-[13px] font-normal leading-[25px] text-left ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt
                </p>
                <a href="">
                    <div className="w-[98px] h-[50px] absolute top-[622px] left-[18px] gap-0">
                        <p className="w-[83px] h-30px font-normal text-[14px] leading-[30px] text-red-600 
                        ">
                            Read More
                        </p>
                        <div className="w-[32px] border-[1px] border-[#EE202E] "></div>
                    </div>
                </a>
            </div>

            <div className="w-[381px] h-[581px] absolute top-[2391px] left-[950px] gap-0">
                <Image
                    src="/image/casestudy3.png"
                    alt="Dragatron"
                    width={770}
                    height={529}
                    className="w-[380px] h-[384px] top-[129px] absolute left-[90px] gap-0"
                />

                <h2 className="w-[344px] h-[25px] absolute top-[529px] left-[90px] gap-0  text-[17px] font-medium leading-[25px]">
                    Lorem ipsum dolor sit amet
                </h2>
                <p className="w-[362px] h-[50px] absolute top-[560px] left-[92px] gap-0 text-[13px] font-normal leading-[25px] text-left ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt
                </p>
                <a href="">
                    <div className="w-[98px] h-[50px] absolute top-[622px] left-[98px] gap-0">
                        <p className="w-[83px] h-30px font-normal text-[14px] leading-[30px]  text-red-600 ">
                            Read More
                        </p>
                        <div className="w-[32px] border-[1px] border-[#EE202E] "></div>
                    </div>
                </a>
            </div>
        </div>
    );
}
