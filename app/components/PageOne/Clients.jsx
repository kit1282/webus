import Image from "next/image";

export default function Clients(){
    return(
        <div className="bg-[url('/image/clientbg.png')] w-full bg-contain bg-no-repeat flex flex-col gap-3 sm:gap-12 pl-[30px] py-[50px] sm:pl-[90px] sm:py-[150px]">
            <h1 className="sm:w-[518px] sm:h-[64px] font-light sm:text-[64px] sm:leading-[64px] text-center sm:ml-[400px]
            w-[280px] h-[36px] text-[36px] leading-[36px]">Clients we praise</h1>
            <p className="sm:w-[212px] sm:h-[30px] font-medium sm:text-[25px] sm:leading-[30px] text-center sm:ml-[540px] sm:-mt-8
            w-[153px] h-[30px] ext-[18px] leading-[30px]">Proudly winners of</p>
            <div className=" sm:w-[1263px] sm:h-[136px] 
             gap-2.5">
                <Image src="/image/Group86301.png" alt='companies' width={354} height={80} className="sm:w-[1260px] mt-10"/>
            </div>
        </div>
    );
}