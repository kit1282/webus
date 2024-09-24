import Image from "next/image";

export default function ContacUS() {
  return (
    <div className="mt-[40px] sm:mt-[80px] ml-[30px] sm:ml-[90px] flex flex-col gap-[50px] sm:gap-[0px] sm:flex-row overflow-x-hidden">
      {/* left side  */}
      <div className="flex flex-col sm:border-r w-[330px] sm:w-[550px] sm:h-[500px] ">
        {/* Heading */}
        <h1 className="w-[170px] height-[36px] text-[36px] leading-[36px] sm:w-[300px] sm:height-[64px] sm:text-[64px] sm:leading-[64px] font-light ">Contact Us</h1>
        <p className="mt-3 sm:mt-5 w-[240px] height-[50px] text-[14px] leading-[25px] sm:w-[270px] sm:height-[50px] sm:text-[16px] sm:leading-[25px] font-light">
          Feel free to ask us and we will answer you as soon as possible
        </p>

        {/* Contact Form */}
        <form className=" flex flex-col gap-10 mt-[40px] sm:mt-[100px]">
          {/* Name */}
          <div className="sm:w-[530px] height-[40px] border-b text-[16px] leading-[25px] font-light">
            <input
              type="text"
              className=""
              placeholder="Name"
            />
          </div>

          {/* Email */}
          <div className="sm:w-[530px] height-[40px] border-b text-[16px] leading-[25px] font-light">
            <input
              type="email"
              className=""
              placeholder="Email"
            />
          </div>

          {/* Message */}
          <div className="sm:w-[530px] height-[40px] border-b text-[16px] leading-[25px] font-light">
            <input
              type="text"
              className=""
              placeholder="Message"
            ></input>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className=" font-semibold  sm:w-[440px] h-[50px] sm:text-[16px] sm:leading-[25px] border border-black flex pl-[135px] sm:pl-[200px] pt-2.5"
          >
            send
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 mt-1 h-5 w-5 -rotate-45"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </form>

      </div>
      {/* right side */}
      <div className=" sm:ml-[100px]">
        {/* content */}
        <div className="flex">
            <div className="flex flex-col gap-[60px] sm:gap-10">

            <div >
            <Image src='/image/usa.png' alt="img" width={30} height={30} className="mb-2"/>
            <p className="w-[120px] sm:w-[270px] h-[50px] text-[14px] sm:text-[16px] leading-6 ">1309 Coffeen Avenue STE 1200
            Tennessee, USA</p>
            </div>

            <div>
            <Image src='/image/india.png' alt="img" width={30} height={30} className="mb-2"/>
            <p className="w-[120px] sm:w-[270px] h-[50px] text-[14px] sm:text-[16px] leading-6 ">Vishwakarma, MB Road
            New Delhi 44, India</p>
            </div>

            </div>
            {/* background image */}
            <div className="w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-[url('/image/contactus.png')] bg-cover grayscale"></div>
        </div>  
        {/* footer */}
        <div className="flex flex-col sm:flex-row sm:gap-[200px] mt-[100px] sm:-mt-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-[14px] leading-[14px] sm:text-[16px]  sm:leading-[16px] underline underline-offset-4">HI@WEBUS.IN</h2>
            <h2 className="text-[14px] leading-[14px] sm:text-[16px] sm:leading-[16px] underline underline-offset-4">+91 9654730419</h2>
          </div>
          <div className="flex gap-10 mt-10">
            <h2 className="text-[14px] leading-[14px] sm:text-[16px] sm:leading-[16px]">instagram</h2>
            <h2 className="text-[14px] leading-[14px] sm:text-[16px] sm:leading-[16px]">facebook</h2>
            <h2 className="text-[14px] leading-[14px] sm:text-[16px] sm:leading-[16px]">twitter</h2>
            <h2 className="text-[14px] leading-[14px] sm:text-[16px] sm:leading-[16px]">linkedin</h2>
          </div>
        </div>
        
      </div>

    </div>
    
  );
}
