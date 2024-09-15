import Image from "next/image";

export default function Service() {
  return (
    <div>
      <div className="absolute inset-y-[2380px] w-[391px] h-[463px] bg-black -z-5 
      sm:inset-y-[2300px] sm:w-[1455px] sm:h-[410px]">
        <Image
          src="/image/12.png"
          alt="graphic"
          width={220}
          height={255}
          className="filter grayscale -z-10 ml-[170px] mt-[180px]
          sm:ml-[560px] sm:mt-[0px] sm:w-[404px] sm:h-[395px]"
        />
        <div className="absolute inset-y-[70px] inset-x-[31px] w-[290px] h-[72px] z-10
        sm:inset-y-[80px] sm:inset-x-[90px] sm:w-[520px] sm:h-[130px]">
          <h1 className="text-[36px] leading-[36px] font-medium text-white
          sm:text-[64px] sm:leading-[64px]">
            What we do
          </h1>
          <div className="mt-1">
            <span className="text-[36px] leading-[36px] font-light text-white
            sm:text-[64px] sm:leading-[64px]">
              what others
            </span>
            <span className="text-[36px] leading-[36px] font-light text-gray-300 ml-2
            sm:text-[64px] sm:leading-[64px]">
              don't
            </span>
          </div>
        </div>

        <div className="absolute inset-y-[185px] inset-x-[31px] w-[321px] h-[100px]
        sm:inset-y-[260px] sm:inset-x-[90px] sm:w-[410px] sm:h-[75px]">
            <p className="text-[14px] leading-[25px] font-normal text-white
            sm:text-[16px] sm:leading-[25px]">
            We sculpt digital dreams into reality, weaving innovation and artistry to create experiences that mesmerize users and propel businesses into tomorrow's success.
            </p>
        </div>

        <div>
          <button className="flex absolute inset-y-[360px] inset-x-[31px] w-[200px] h-[47px] border pl-3 pr-3 pt-2 justify-between 
          sm:inset-y-[270px] sm:inset-x-[1090px] sm:min-w-[220px] sm:h-[50px]
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
 
