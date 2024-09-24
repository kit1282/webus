import Image from "next/image";

export default function Service() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row  w-[391px] h-[463px] bg-black -z-20 
       sm:w-[1455px] sm:h-[410px]">
        
        <div className="flex flex-col gap-10 z-10 sm:mt-[100px] mt-[60px] ml-[30px] sm:ml-[80px]">
          {/* heading section */}
        <div className=" w-[290px] h-[72px] 
         sm:w-[520px] sm:h-[130px]">
          <h1 className="text-[36px] leading-[36px] font-medium text-white
          sm:text-[64px] sm:leading-[64px]">
            What we do
          </h1>
          <div className="mt-1">
            <span className="text-[36px] leading-[36px] font-extralight text-white
            sm:text-[64px] sm:leading-[64px]">
              what others
            </span>
            <span className="text-[36px] leading-[36px] font-extralight text-gray-500 ml-2
            sm:text-[64px] sm:leading-[64px]">
              don't
            </span>
          </div>
        </div>

        {/* paragraph section */}
        <div className=" w-[321px] h-[100px]
         sm:w-[410px] sm:h-[75px]">
            <p className="text-[14px] leading-[25px] font-normal text-white
            sm:text-[16px] sm:leading-[25px]">
            We sculpt digital dreams into reality, weaving innovation and artistry to create experiences that mesmerize users and propel businesses into tomorrow's success.
            </p>
        </div>
        </div>

        {/* image section */}
        <Image src="/image/12.png"
          alt="graphic"
          width={220}
          height={255}
          className="filter grayscale  ml-[170px] -mt-[100px]
          sm:ml-[0px] sm:mt-[0px] sm:w-[404px] sm:h-[395px]"
        />

        {/* button */}
        <div className="-mt-[80px] sm:mt-[300px] ml-[30px] sm:ml-[130px]">
          <button className="flex w-[200px] h-[47px] border pl-3 pr-3 pt-2 justify-between 
           sm:min-w-[220px] sm:h-[50px]
          sm:hover:bg-[#EE202E] sm:hover:text-white sm:hover:border-none sm:duration-300">
            <p className="text-[16px] leading-[27px] font-medium text-white">
              explore our services
            </p>
            <span className="text-[16px] leading-[27px] font-medium text-white pt-[0.5px]">
              ↗️
            </span>
          </button>
        </div>

      </div>
    </div>
  );
}
 
