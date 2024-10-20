export default function Discovery() {
  return (
    <div className="bg-black w-[400px] h-[840px] sm:w-[1461px] sm:h-[860px] flex flex-col justify-center px-8 py-8 sm:py-20 sm:px-24 ">
      {/* Title */}
      <h1 className="text-[36px] sm:text-[64px] sm:leading-[70px] text-white font-light mb-8 sm:mb-12 sm:w-[500px]">
        Product Discovery
      </h1>

      <div className="flex flex-col sm:flex-row sm:gap-[230px]">
      
      {/* Description */}
      <p className="text-[14px] sm:text-[24px]  text-gray-400 font-extralight leading-[25px] sm:leading-[30px] mb-16 sm:mb-20 sm:w-[500px] sm:mt-[100px]">
        We seamlessly blend creativity and technology to{" "}
        <span className="font-semibold text-white">craft products</span> that captivate users
        and stand out in the market. Our designs transform complex challenges
        into intuitive,{" "}
        <span className="font-semibold text-white">engaging user experiences.</span>
      </p>
      <div className="flex flex-col gap-6">
        {[
          "UI design",
          "Prototyping",
          "UX design and usability",
          "Design system",
          "User flow and wireframe",
          "User Testing",
        ].map((service, index) => (
          <div key={index} className="flex gap-4 items-center sm:w-[460px border-b-[0.5px] sm:w-[450px] pb-2">
            <h2 className="text-[18px]  sm:text-[25px] text-white">{service}</h2>
            <span className="text-[22px] sm:text-[30px] text-gray-500">↗️</span>
          </div>
        ))}
      </div>
      </div>

      {/* Services */}
      

      {/* Get in Touch Button */}
      <button className="mt-16  w-[160px] h-[50px] border-2 border-white flex flex- col  items-center gap-2 pl-5 sm:pl-3 sm:-mt-[100px]">
        <p className="text-[16px] sm:text-[20px] text-white font-normal">
          Get in touch
        </p>
        <span className="text-[16px] sm:text-[20px] text-white">↗️</span>
      </button>
    </div>
  );
}
