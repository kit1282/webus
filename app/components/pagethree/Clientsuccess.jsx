// components/ClientSuccess.js
import Image from "next/image";

const ClientSuccess = () => {
  return (
    <div>
      <div className=" w-[690px] h-[220px] bg-[url('/image/webusBG.png 
     ')] ">

      </div>
      <h1 className="sm:w-[590px] sm:h-[128px] sm:text-[64px] sm:leading-[64px] sm:font-light 
      text-[38px] w-[313px] inset-y-[110px] inset-x-[35px] h-[108px] font-light leading-[56px]">
        UX Mastery in Action: Client Success
      </h1>
      <p className=" sm:w-[455px] sm:h-[100px] sm:ext-[16px] sm:leading-[25px] sm:font-normal 
      absolute inset-y-[320px] inset-x-[40px]
       w-[270px] h-[125px]">
        Our case studies showcase how we've revolutionized user experiences across industries, turning complex challenges into intuitive, engaging digital solutions that drive measurable business growth.
      </p>
      <Image src="/image/5.png" alt="as" width={181} height={202} className="sm:absolute sm:inset-y-[70px] sm:inset-x-[930px]  sm:w-[471px] sm:h-[530px]  left-[220px] " />
    </div>
  )
};

export default ClientSuccess;
