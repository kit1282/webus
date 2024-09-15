// components/Navbar.js
import Image from "next/image";
import { FiMenu } from "react-icons/fi"; // For the hamburger menu icon
import { FiInstagram, FiLinkedin } from "react-icons/fi"; // For the social media icons

export default function SubNavbar({ setIsOpen }: any) {
  return (
    <div className="sm:w-[1455px] sm:h-[106px]  sm:pr-11 sm:pb-11 sm:pl-[70px] sm:absolute ">
      <div className="sm:w-[1300px] sm:h-[44px] sm:pt-4 sm:flex sm:justify-between">
        <button
          className="text-white text-2xl bg-zinc-800 sm:min-w-[64px] sm:h-[50px] sm:pt-3 sm:pr-6 sm:pb-4 sm:pl-5 sm:inset-x-[60px] sm:inset-y-[20px]
          w-[64px] h-[44px] inset-x-[27px] inset-y-[24px] absolute pl-5 "
          onClick={() => setIsOpen(true)}
        >
          <FiMenu />
        </button>

        {/* Center: Logo */}
        <Image
          src="/image/WebusLogo.png"
          alt="Webus"
          width={87}
          height={26}
          className="absolute inset-x-[151px] inset-y-[37px] sm:inset-x-[700px] sm:inset-y-[37px]"
        />

        {/* Right: Social Media Icons */}
        <div className="flex space-x-4 text-black pt-2 absolute inset-x-[300px] inset-y-[30px] sm:w-[70px] sm:absolute sm:inset-x-[1340px] sm:inset-y-[20px] ">
          <a href="#" aria-label="LinkedIn" className="text-2xl">
            <FiLinkedin />
          </a>
          <a href="#" aria-label="Instagram" className="text-2xl">
            <FiInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
