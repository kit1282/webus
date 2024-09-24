export default function IntroTwo() {
  return (
    <section className="relative h-[650px] mt-[50px]">
      <div className="flex flex-col items-center w-[340px] ml-[30px] sm:w-full h-auto gap-4 sm:gap-10">
        {/* Main Heading */}
        <div className="flex justify-center text-center sm:mt-[200px]">
          <h2 className="text-[36px] leading-[36px] font-extralight text-center sm:text-[64px] sm:leading-[64px]">
            A Decade of Designing Futures, <br />
            Shaping Digital Landscapes Worldwide.
          </h2>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col text-center gap-5 mt-10 sm:mt-[100px] sm:flex-row sm:gap-10 sm:justify-center">
          <h2 className="text-[18px] leading-[18px] font-bold sm:text-[25px] sm:leading-[25px]">
            12+ Years of Design Excellence
          </h2>
          <h2 className="text-[18px] leading-[18px] font-bold sm:text-[25px] sm:leading-[25px]">
            66+ Innovative Projects
          </h2>
          <h2 className="text-[18px] leading-[18px] font-bold sm:text-[25px] sm:leading-[25px]">
            10+ Global Brands Served
          </h2>
        </div>
      </div>
      {/* Background Images */}
        
      <div
            className="bg-[url('/image/intro2bg.png')] absolute inset-y-[140px] inset-x-[122px] w-[270px] h-[235px] opacity-90
            sm:inset-y-[100px] sm:inset-x-[845px] sm:w-[610px] sm:h-[530px] bg-no-repeat bg-cover bg-center"
          ></div>
          <div
            className="bg-[url('/image/intro2bg.png')]  absolute inset-y-[140px] -inset-x-[0px] w-[270px] h-[235px] transform scale-x-[-1] opacity-90 
            sm:inset-y-[100px]  sm:w-[600px] sm:h-[530px] bg-no-repeat bg-cover bg-center"
          ></div>
          <div className="sm:bg-[url('/image/webusbg.png')] sm:absolute sm:inset-y-[160px] sm:inset-x-[375px] sm:w-[690px] sm:h-[220px] sm:opacity-50">
          </div>
    </section>
  );
}
