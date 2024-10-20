import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col items-center sm:mt-12 mb-14 px-4 sm:px-0 ">
      {/* Border lines */}
      <div className="w-full max-w-[1263px] border-t border-black mt-16 sm:mt-0"></div>
      
      {/* Title */}
      <div className="flex justify-between items-center w-full max-w-[1263px] mt-8">
        <h1 className="text-[36px] sm:text-[64px] sm:leading-[64px] font-black">LET’S TALK</h1>
        <Image src="/image/w.png" alt="w" width={140} height={60} />
      </div>

      {/* Border line */}
      <div className="w-full max-w-[1263px] border-t border-black mt-8"></div>

      {/* Contact Information */}
      <div className="flex flex-col sm:flex-row justify-between w-full max-w-[1263px] mt-8">
        <div className="flex gap-8">
        <div>
          <h2 className="text-[18px] sm:text-[25px] sm:leading-[25px] font-medium">WEBUS</h2>
          <div className="mt-4 sm:w-[250px]">
            <h3 className="text-[14px] sm:text-[16px] sm:leading-[30px] font-bold">Delhi, INDIA</h3>
            <p className="text-[14px] sm:text-[16px] sm:leading-[30px]">
              A-10 Vishwakarma colony New Delhi - 110044
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-0 sm:w-[250px]">
          <h3 className="text-[14px] sm:text-[16px] sm:leading-[30px] font-bold">Tennessee, US</h3>
          <p className="text-[14px] sm:text-[16px] sm:leading-[30px]">
            1000 Battlefield drive Nashville TN 37204
          </p>
        </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-10">
        <div className="flex sm:flex-row justify-between sm:space-x-8 mt-8 sm:mt-0">
          <p className="text-[14px] sm:text-[18px]">ABOUT</p>
          <p className="text-[14px] sm:text-[18px]">WORK</p>
          <p className="text-[14px] sm:text-[18px]">EXPERTISE</p>
          <p className="text-[14px] sm:text-[18px]">CONTACT</p>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-10 sm:gap-0 sm:flex-row sm:space-x-8 justify-center sm:justify-end sm:mt-0">
          <p className="text-[14px] sm:text-[18px] text-[#0085FF]">LINKEDIN</p>
          <p className="text-[14px] sm:text-[18px] text-[#EE202E]">INSTAGRAM</p>
        </div>
        </div>
      </div>

      {/* Policies */}
      <div className="flex justify-between gap-10 mt-8">
        <p className="text-[14px]">PRIVACY POLICY</p>
        <p className="text-[14px]">COOKIE POLICY</p>
      </div>
    </div>
  );
}
