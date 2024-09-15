import Image from "next/image";

export default function OurClients(){
    return(
        <div>
            <h1 className="absolute inset-y-[5450px] inset-x-[112px] w-[170px] h-[36px] text-[36px] leading-[36px] font-light
            sm:inset-y-[5260px] sm:inset-x-[600px] sm:w-[520px] sm:h-[64px] sm:text-[64px] sm:leading-[64px]">
            Our clients
            </h1>
            <h2 className="absolute inset-y-[5500px] inset-x-[102px] w-[190px] h-[18px] text-[18px] leading-[18px] font-semibold 
            sm:inset-y-[5340px] sm:inset-x-[615px] sm:w-[585px] sm:h-[25px] sm:text-[25px] sm:leading-[25px]">
            from all over the world
            </h2>
            <Image src='/image/Map.png' alt='Map' width={350} height={150} 
            className="absolute inset-y-[5560px] inset-x-[21px] 
            sm:inset-y-[5470px] sm:inset-x-[130px] sm:w-[1180px] sm:h-[490px]"/>
        </div>
    );
}