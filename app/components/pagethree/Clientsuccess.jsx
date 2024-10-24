// components/ClientSuccess.js
import Image from "next/image";

const ClientSuccess = () => {
  return (
    <div className="sm:mx-[90px] sm:mb-[100px] mb-[200px] ml-[30px] mt-[50px] sm:mt-0 ">
      {/* <div className=" w-[690px] h-[220px] bg-[url('/image/webusBG.png 
     ')] "></div> */}
      <h1 className="sm:mt-[100px] sm:w-[650px] sm:h-[128px] sm:text-[64px] sm:leading-[64px] sm:font-light 
      text-[36px] w-[313px]  h-[108px] font-light leading-[36px]">
        UX Mastery in Action: Client Success
      </h1>
      <Image src='/image/webusBG.png' alt='webus logo' width={690} height={220} className="z-10 -mt-[50px] hidden sm:block " />
      <p className="sm:-mt-[30px] mt-[100px] sm:ml-[400px] sm:w-[455px] sm:h-[100px] sm:ext-[16px] sm:leading-[25px] sm:font-normal 
      
       w-[270px] h-[125px]">
        Our case studies showcase how we've revolutionized user experiences across industries, turning complex challenges into intuitive, engaging digital solutions that drive measurable business growth.
      </p>
      <Image src="/image/5.png" alt="as" width={181} height={202} className="
        sm:-mt-[400px] -mt-[300px] sm:ml-[850px] ml-[200px] sm:w-[471px] sm:h-[530px]  left-[220px] " />
    </div>
  )
};

export default ClientSuccess;
