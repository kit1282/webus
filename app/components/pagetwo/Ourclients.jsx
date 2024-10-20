import Image from "next/image";

export default function OurClients(){
    return(
        <div className="flex flex-col mt-[100px] sm:mt-[150px] ml-[30px] sm:ml-[150px]">
            <h1 className=" w-[170px] h-[36px] text-[36px] leading-[36px] font-light
             sm:w-[520px] sm:h-[64px] sm:text-[64px] sm:leading-[64px] ml-[90px] sm:ml-[400px] ">
            Our clients
            </h1>
            <h2 className=" w-[190px] h-[18px] text-[18px] leading-[18px] font-semibold 
             sm:w-[585px] sm:h-[25px] sm:text-[25px] sm:leading-[25px] ml-[80px] sm:ml-[420px] mt-[20px] ">
            from all over the world
            </h2>
            <Image src='/image/Map.png' alt='Map' width={350} height={150} 
            className=" 
             sm:w-[1180px] sm:h-[490px] mt-[50px] sm:mt-[100px] "/>
        </div>
    );
}