import Image from "next/image";

export default function Quote(){
    return(
        <div>
           <Image src="/image/Rectangle24.png" alt="quote bg" width={392} height={220} className="absolute inset-y-[490px] opacity-95 
           sm:inset-y-[770px] sm:w-[1460px] sm:h-[370px] sm:opacity-95 "/>
           
           <p className="absolute inset-y-[548px] inset-x-[45px] w-[300px] h-[50px] flex align-center text-[14px] leading-[25px] font-normal text-white text-center
           sm:inset-y-[900px] sm:inset-x-[440px] sm:w-[585px] sm:h-[25px] sm:text-[16px] sm:leading-[25px] ">
           Visionary digital architects redefining user experiences for global brand leaders.
           </p>
           
           <h1 className="absolute inset-y-[611px] inset-x-[82px] w-[224px] h-[36px] text-[36px] leading-[36px] font-medium text-white
           sm:inset-y-[965px] sm:inset-x-[520px] sm:w-[405px] sm:h-[64px] sm:text-[64px] sm:leading-[64px]">
            WHO WE ARE
            </h1>
        </div>
    );
}

// absolute inset-y-[px] inset-x-[px] w-[px] h-[px] text-[px] leading-[px] font-