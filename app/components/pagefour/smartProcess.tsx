export default function SmartProcess() {
    return (
      <div className="relative bg-black py-16 sm:py-24 px-8 sm:px-24">
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row sm:gap-5 items-start sm:items-start">
          <h1 className="text-[36px] leading-[36px] sm:leading-[64px] sm:text-[64px] font-medium text-white">Smart</h1>
          <span className="text-[36px] leading-[36px] sm:leading-[64px] sm:text-[64px] font-extralight text-white">Process</span>
        </div>
  
        {/* Description */}
        
        <p className="mt-6 text-[14px] sm:text-[16px] leading-[25px] font-extralight text-white max-w-[480px] sm:ml-auto sm:-mt-[70px]">
          Our refined approach combines industry best practices with <span className="font-medium">innovative methodologies</span>, ensuring efficient and effective project execution. We leverage data-driven insights and <span className="font-semibold">agile techniques</span> to deliver exceptional results that exceed client expectations.
        </p>
  
        {/* Steps 1 to 3 */}
        <div className="flex flex-col  sm:space-y-0 sm:flex-row gap-[60px] sm:gap-[300px] mt-[80px]">
          {/* Step 1 to 3 Section */}
          <div className="flex  flex-col space-y-4">
            <div className="flex h-[140px] mb-10">
              <p className="border border-white text-white text-[18px] sm:text-[25px] font-medium py-3 px-6 sm:py-2 sm:px-8 h-[60px] mt-[80px]">Step 1</p>
              <p className="border border-white text-white text-[18px] sm:text-[25px] font-medium py-3 px-6 sm:py-2 sm:px-8 h-[60px] mt-[50px]">Step 2</p>
              <p className="border border-white text-white text-[18px] sm:text-[25px] font-medium py-3 px-6 sm:py-2 sm:px-8 h-[60px] mt-[20px]">Step 3</p>
            </div>
  
            {/* Step 1 to 3 Description */}
            <div className="bg-[url('/image/stepbg.png')] border border-black h-[65px] sm:h-[54px] sm:bg-[url('/image/stepbg2.png')] bg-contain  flex justify-center items-center">
              <p className="text-white text-[18px] sm:text-[25px] font-light">Discovery & Strategy</p>
            </div>
          </div>
  
          {/* Step 4 to 6 Section */}
          <div className="flex flex-col space-y-4 sm:ml-16">
            <div className="flex h-[140px] sm:mb-10">
              <p className="border border-white text-white text-[18px] sm:text-[25px] font-medium py-3 px-6 sm:py-2 sm:px-8 h-[60px] mt-[80px]">Step 4</p>
              <p className="border border-white text-white text-[18px] sm:text-[25px] font-medium py-3 px-6 sm:py-2 sm:px-8 h-[60px] mt-[50px]">Step 5</p>
              <p className="border border-white text-white text-[18px] sm:text-[25px] font-medium py-3 px-6 sm:py-2 sm:px-8 h-[60px] mt-[20px]">Step 6</p>
            </div>
  
            {/* Step 4 to 6 Description */}
            <div className="bg-[url('/image/stepbg.png')] border border-black h-[65px] sm:h-[54px] sm:bg-[url('/image/stepbg2.png')] bg-contain   flex justify-center items-center">
              <p className="text-white text-[18px] sm:text-[25px] font-light">Design & Development</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  