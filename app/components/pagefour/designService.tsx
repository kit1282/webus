export default function DesignService() {
    return (
      <div className="flex flex-col items-start  px-8 sm:px-24 py-16 sm:py-24  ">
        {/* Title and Subtitle */}
        <div className="flex flex-col  items-start sm:items-start mb-[50px]">
          <h1 className="text-[36px] leading-[36px] sm:text-[64px] sm:leading-[64px] font-semibold">Complex product</h1>
          <div className="flex items-center  text-[36px] sm:text-[64px] sm:leading-[64px] font-extralight">
            design <span className="text-gray-400 font-thin ml-2">services</span>
          </div>
        </div>
  
        {/* Description */}
        <p className="text-[14px] sm:text-[16px] leading-[25px] font-light w-[330px] sm:max-w-[500px] mb-[50px]">
          We specialize in transforming intricate digital challenges into elegant,{" "}
          <span className="font-bold">user-centric solutions.</span> Our team excels
          at crafting sophisticated interfaces and systems that simplify complexity,
          enhance user engagement, and{" "}
          <span className="font-bold">drive business growth.</span>
        </p>
  
        {/* Explore Process Button */}
        <button className="w-[170px] h-[50px] sm:h-[47px] border-2 border-black flex justify-center items-center gap-2 mb-[80px]">
          <p className="text-[16px] font-semibold">Explore process</p>
          <span className="text-[20px] font-semibold">↗️</span>
        </button>
  
        {/* Circles Section */}
        <div className="flex flex-col sm:flex-row items-center  ">

          {/* Circle 1 - Learn */}
          <div className="flex flex-col justify-center items-center border border-black rounded-full w-[327px] h-[327px] sm:w-[420px] sm:h-[420px] sm:-mr-10 sm:ml-[80px] ">
            <h1 className="text-[36px] sm:text-[64px] font-light">Learn</h1>
            <p className="text-[14px] sm:text-[16px] leading-[25px] font-light text-center mt-4 max-w-[225px]">
              We immerse ourselves in your business, users, and market to gain deep
              insights and identify key opportunities for innovation.
            </p>
          </div>
  
          {/* Circle 2 - Measure */}
          <div className="flex flex-col justify-center items-center border border-black rounded-full -mt-10 w-[327px] h-[327px] sm:w-[420px] sm:h-[420px] ">
            <h1 className="text-[36px] sm:text-[64px] font-light">Measure</h1>
            <p className="text-[14px] sm:text-[16px] leading-[25px] font-light text-center mt-4 max-w-[225px]">
              We analyze data, conduct user testing, and benchmark against industry
              standards to ensure our designs deliver measurable impact.
            </p>
          </div>
  
          {/* Circle 3 - Build */}
          <div className="flex flex-col justify-center items-center border border-black rounded-full w-[327px] h-[327px] -mt-10 sm:w-[420px] sm:h-[420px] sm:-ml-10">
            <h1 className="text-[36px] sm:text-[64px] font-light">Build</h1>
            <p className="text-[14px] sm:text-[16px] leading-[25px] font-light text-center mt-4 max-w-[225px]">
              We bring concepts to life, iterating rapidly and collaborating closely
              to create polished, high-performance digital products.
            </p>
          </div>
        </div>
  
        {/* Decorative Element */}
        <div className="relative ">
          <div className="absolute bg-[#ee202e] border border-[#ee202e] rounded-full w-[22px] h-[22px] z-0 ml-[155px] -mt-3 sm:ml-[660px] sm:-mt-[10px]"></div>
          <div className="border-[0.5px] border-black w-0 h-[95px] ml-[165px] sm:ml-[670px] sm:-mt-[10px] -z-10"></div>
          <div className="hidden sm:block border-b border-l border-r border-black w-[740px] h-[85px] sm:ml-[300px] sm:-mt-[85px] -z-20"></div>
        </div>
  
        {/* Business Value Button */}
        <p className="text-[16px] leading-[27px] font-medium border z-[10] border-black px-2 py-2 w-[230px] ml-[50px] sm:ml-[560px] sm:-mt-[20px] bg-white">
          Value for your business here
        </p>
      </div>
    );
  }
  