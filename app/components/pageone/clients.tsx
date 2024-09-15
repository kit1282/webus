import Image from "next/image";

export default function Clients(){
    return(
        <div>
            <div className="sm:w-[1442px] sm:h-[610px] absolute sm:-inset-x-[1px] sm:inset-y-[4880px]
            w-[391px] h-[343px] -inset-x-[1px] inset-y-[4720px]"></div>
            <Image src="/image/clientbg.png" alt='companies' width={390} height={343} className="absolute sm:-inset-x-[2px] sm:inset-y-[4880px] sm:opacity-20 sm:w-[1442px] sm:h-[610px] 
            inset-y-[4720px] opacity-20 "/>
            <h1 className="sm:w-[518px] sm:h-[64px] absolute sm:inset-x-[460px] sm:inset-y-[5036px] font-light sm:text-[64px] sm:leading-[64px] text-center
            w-[266px] h-[36px] inset-x-[31px] inset-y-[4790px] text-[36px] leading-[36px]">Clients we praise</h1>
            <p className="sm:w-[212px] sm:h-[30px] absolute sm:inset-x-[614px] sm:inset-y-[5120px] font-medium sm:text-[25px] sm:leading-[30px] text-center
            w-[153px] h-[30px] inset-x-[32px] inset-y-[4840px] text-[18px] leading-[30px]">Proudly winners of</p>
            <div className="absolute sm:inset-x-[90px] sm:inset-y-[5220px] sm:w-[1263px] sm:h-[136px] 
            inset-x-[38px] inset-y-[4907px] gap-2.5">
                <Image src="/image/Group86301.png" alt='companies' width={354} height={80} className="sm:w-[1260px] sm:136px "/>
            </div>
        </div>
    );
}