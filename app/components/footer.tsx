import Image from "next/image";

export default function Footer() {
  return (
    <div className="mb-[100px]">
      <div className="sm:w-[1270px] sm:h-[420px] absolute sm:inset-x-[91px] sm:inset-y-[5560px]"></div>
      <div className="sm:w-[1263px] absolute sm:inset-x-[91px] sm:inset-y-[5563px] border border-black
      w-[331px] inset-x-[36px] inset-y-[5063px]"></div>
      <h1 className="sm:w-[350px] absolute sm:h-[65px] sm:inset-x-[91px] sm:inset-y-[5620px] font-black sm:text-[64px] sm:leading-[64px]
      w-[183px] h-[36px] inset-x-[36px] inset-y-[5080px] text-[36px] leading-[36px]">
        LET’S TALK
      </h1>
      <Image
        src="/image/w.png"
        alt="w"
        width={74}
        height={55}
        className="absolute sm:inset-x-[1160px] sm:inset-y-[5620px] sm:w-[140px] sm:h-[60px]
        inset-x-[292px] inset-y-[5091px] "
      />
      <div className="sm:w-[1263px] absolute sm:inset-x-[91px] sm:inset-y-[5723px] border border-black
      w-[331px] inset-x-[36px] inset-y-[5172px]"></div>
      <div>
        <h2 className="sm:w-[82px] absolute sm:h-[25px] sm:inset-x-[91px] sm:inset-y-[5765px] font-medium sm:text-[25px] sm:leading-[25px]
        w-[60x] h-[18px] inset-x-[36px] inset-y-[5208px] text-[18px] leading-[18px]">
          WEBUS
        </h2>
        <div className="sm:w-[252px] absolute sm:h-[90px] sm:inset-x-[91px] sm:inset-y-[5800px] 
        w-[166px] h-[90px] inset-x-[36px] inset-y-[5245px]">
          <h3 className="font-bold sm:text-[16px] sm:leading-[30px]
          text-[14px] leading-[30px]">Delhi, INDIA</h3>
          <span className=" font-normal sm:text-[16px] sm:leading-[30px]
          text-[14px] leading-[30px]">
            A-10 Vishwakarma colony New Delhi - 110044
          </span>
        </div>

        <div className="sm:w-[252px] absolute sm:h-[90px] sm:inset-x-[385px] sm:inset-y-[5800px] 
        w-[147px] h-[90px] inset-x-[231px] inset-y-[5245px] ">
          <h3 className="font-bold sm:text-[16px] sm:leading-[30px]
          text-[14px] leading-[30px]">
            Tennessee, US
          </h3>
          <span className=" font-normal sm:text-[16px] sm:leading-[30px]
          text-[14px] leading-[30px]">
            1000 Battlefield drive Nashville TN 37204
          </span>
        </div>

        <div>
          <div>
            <p className="sm:w-[51px] sm:h-[30px] absolute sm:inset-x-[1026px] sm:inset-y-[5806px] font-normal sm:text-[18px] sm:leading-[30px]
            w-[45px] h-[30px] inset-x-[35px] inset-y-[5371px] text-[14px] leading-[30px]">
              ABOUT
            </p>
            <p className="sm:w-[46px] sm:h-[30px] absolute sm:inset-x-[1108px] sm:inset-y-[5806px] font-normal sm:text-[18px] sm:leading-[30px]
            w-[40px] h-[30px] inset-x-[117px] inset-y-[5371px] text-[14px] leading-[30px]">
              WORK
            </p>
            <p className="sm:w-[71px] sm:h-[30px] absolute sm:inset-x-[1185px] sm:inset-y-[5806px] font-normal sm:text-[18px] sm:leading-[30px]
            w-[61px] h-[30px] inset-x-[194px] inset-y-[5371px] text-[14px] leading-[30px]">
              EXPERTISE
            </p>
            <p className="sm:w-[71px] sm:h-[30px] absolute sm:inset-x-[1283px] sm:inset-y-[5806px] font-normal sm:text-[18px] sm:leading-[30px]
            w-[62px] h-[30px] inset-x-[292px] inset-y-[5371px] text-[14px] leading-[30px]">
              CONTACT
            </p>
          </div>
          <div>
            <p className="sm:w-[65px] sm:h-[30px] absolute sm:inset-x-[1160px] sm:inset-y-[5855px] font-normal sm:text-[18px] sm:leading-[30px] text-[#0085FF]
            w-[57px] h-[30px] inset-x-[97px] inset-y-[5420px] text-[14px] leading-[30px]">
              LINKEDIN
            </p>
            <p className="sm:w-[85px] sm:h-[30px] absolute sm:inset-x-[1266px] sm:inset-y-[5855px] font-normal sm:text-[18px] sm:leading-[30px] text-[#EE202E] 
            w-[75px] h-[30px] inset-x-[210px] inset-y-[5420px] text-[14px] leading-[30px]">
              INSTAGRAM
            </p>
          </div>
        </div>

        <div>
          <p className="sm:w-[115px] sm:h-[30px] absolute sm:inset-x-[600px] sm:inset-y-[5952px] font-normal sm:text-[14px] sm:leading-[30px]
          w-[120px] h-[30px] inset-x-[68px] inset-y-[5468px] text-[14px] leading-[30px]">
            PRIVACY POLICY
          </p>
          <p className="sm:w-[110px] sm:h-[30px] absolute sm:inset-x-[746px] sm:inset-y-[5952px] font-normal sm:text-[14px] sm:leading-[30px]
          w-[110px] h-[30px] inset-x-[220px] inset-y-[5468px] text-[14px] leading-[30px]">
            COOKIE POLICY
          </p>
        </div>
      </div>
    </div>
  );
}
