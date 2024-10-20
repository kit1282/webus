// components/Navbar.js
import Image from "next/image";
import { FiMenu } from "react-icons/fi"; // For the hamburger menu icon
import { FiInstagram, FiLinkedin } from "react-icons/fi"; // For the social media icons

export default function SubNavbar({ setIsOpen }) {
  return (
    <div className="pl-3 pr-3 sm:w-[1455px] h-[106px] sm:pr-11 sm:pb-11 sm:pl-[70px] flex justify-between items-center">
      {/* Left: Menu Button */}
      <button
        className="text-white text-2xl bg-zinc-800 w-[64px] h-[44px] sm:w-[64px] sm:h-[50px] flex items-center justify-center bg-gray-700"
        onClick={() => setIsOpen(true)}
      >
        <FiMenu />
      </button>

      {/* Center: Logo */}
      <div className="flex justify-center flex-1">
        <Image
          src="/image/WebusLogo.png"
          alt="Webus"
          width={87}
          height={26}
          className="sm:w-auto sm:h-[30px]"
        />
      </div>

      {/* Right: Social Media Icons */}
      <div className="flex space-x-4 text-black">
        <a href="#" aria-label="LinkedIn" className="text-2xl">
          <FiLinkedin />
        </a>
        <a href="#" aria-label="Instagram" className="text-2xl">
          <FiInstagram />
        </a>
      </div>
    </div>
  );
}
