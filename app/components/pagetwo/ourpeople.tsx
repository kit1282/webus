import Image from "next/image";

export default function OurPeople(){
    return(
        <div>
            <h1 className="absolute inset-y-[4570px] inset-x-[33px] w-[185px] h-[36px] text-[36px] leading-[36px] font-medium
            sm:inset-y-[4400px] sm:inset-x-[86px] sm:w-[325px] sm:h-[64px] sm:text-[64px] sm:leading-[64px]">
            Our People
            </h1>
            
            <h2 className="absolute inset-y-[4615px] inset-x-[33px] w-[225px] h-[72px] text-[36px] leading-[36px] font-extralight
            sm:inset-y-[4470px] sm:inset-x-[86px] sm:w-[540px] sm:h-[128px] sm:text-[64px] sm:leading-[64px]"> 
            where great work comes 
            </h2>
            <span className="absolute inset-y-[4648px] inset-x-[234px] w-[38px] h-[38px] text-[38px] leading-[38px] font-extralight
            sm:inset-y-[4560px] sm:inset-x-[300px] sm:w-[585px] sm:h-[55px] sm:text-[46px] sm:leading-[25px] sm:font-thin">
            →
            </span>
          
            <Image src='/image/Rectangle1.png' alt='people' width={330} height={260} 
            className="absolute inset-y-[4730px] inset-x-[33px]
            sm:inset-y-[4660px] sm:inset-x-[86px] sm:w-[560px] sm:h-[440px]"/>

            <div className="absolute inset-y-[5030px] inset-x-[31px] w-[150px] h-[140px] flex flex-col gap-[20px] 
            sm:inset-y-[4680px] sm:inset-x-[770px] sm:w-[270px] sm:h-[160px]">
                <h1 className="text-[25px] leading-[25px] font-light 
                sm:text-[40px] sm:leading-[40px]">
                Creative 
                Powerhouses
                </h1>
                <p className="text-[14px] leading-[24px] font-extralight
                sm:text-[20px] sm:leading-[34px]">
                12+ years average experience
                in cutting-edge design
                </p>
            </div>
            <div className="absolute inset-y-[5030px] inset-x-[210px] w-[150px] h-[140px] flex flex-col gap-[20px]
            sm:inset-y-[4680px] sm:inset-x-[1120px] sm:w-[270px] sm:h-[160px]">
                <h1 className="text-[25px] leading-[25px] font-light
                sm:text-[40px] sm:leading-[40px]">
                Dedicated 
                Experts
                </h1>
                <p className="text-[14px] leading-[24px] font-extralight
                sm:text-[20px] sm:leading-[34px]">
                100% full-time team
                committed to your success
                </p>
            </div>
            <div className="absolute inset-y-[5210px] inset-x-[31px] w-[150px] h-[140px] flex flex-col gap-[20px]
            sm:inset-y-[4920px] sm:inset-x-[770px] sm:w-[270px] sm:h-[160px]">
                <h1 className="text-[25px] leading-[25px] font-light
                sm:text-[40px] sm:leading-[40px]">
                Diverse 
                Innovators
                </h1>
                <p className="text-[14px] leading-[24px] font-extralight
                sm:text-[20px] sm:leading-[34px]">
                15+ industries transformed
                by our multidisciplinary talent
                </p>
            </div>
            <div className="absolute inset-y-[5210px] inset-x-[210px] w-[150px] h-[140px] flex flex-col gap-[20px]
            sm:inset-y-[4920px] sm:inset-x-[1120px] sm:w-[270px] sm:h-[160px]">
                <h1 className="text-[25px] leading-[25px] font-light
                sm:text-[40px] sm:leading-[40px]">
                Agile 
                Professionals
                </h1>
                <p className="text-[14px] leading-[24px] font-extralight
                sm:text-[20px] sm:leading-[34px]">
                30% faster project delivery
                through adaptive workflows
                </p>
            </div>
        </div>
    );
}