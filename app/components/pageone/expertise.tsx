"use client";
import Image from "next/image";
import React, { useState } from "react";

import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Arrow from "../assets/ep_top-right.png";
import RightCore from "./RightCore";
import Sidebar from "./SideBar";
import Intro from "./pageone/intro";
import Cards from "./pageone/cards";
import Feature from "../Feature";

export default function Expertise() {
  const [number, setNumber] = useState(1);
  const [active, setActive] = useState<number>(1);
  const handleClick = (num: number) => {
    setNumber(num);
    setActive(num);
  };
  return (
    <div className="">


      {/* Left Sidebar */}
      <div className="lg:w-[390px] h-[530px] absolute inset-x-[38px] inset-y-[1350px] flex flex-col justify-start border border-black lg:pr-12">
        <div
          onClick={() => handleClick(1)}
          className={` cursor-pointer font-geomanist lg:text-[40px] text-[30px] lg:w-[390px] h-[110px] font-light leading-[40px] text-center	lg:pl-6	py-8 border-b border-black ${active == 1
              ? " 	 text-[#E53935] font-geomanist text-[40px] font-extrabold leading-[40px] text-left"
              : ""
            }`}
        >
          Product Design
        </div>
        <div className="h-[200px] flex relative border-b border-black pb-20">
          {number === 1 && (
            <div className="md:hidden">

              <h1 className="">
             Innovative Solutions, Exceptional Experiences

              </h1>

              <div>
          {/* Heading Section */}
          
          <p className="">
          We seamlessly blend creativity and technology to craft products that captivate users and stand out in the market. Our designs transform complex challenges into intuitive, engaging user experiences.    
          </p>

          {/* Feature Grid */}
          <div className="">
          title1="Advance UI Design" 
          title2="Costumized Design Systems"
          title3="Rapid Prototyping"
          title4="Intutive User Flows"
          title5="UX Design and Usability"
          title6="Comprehensive User Testing"
          </div>
          <button className="border border-black sm:p-2 sm:w-28 sm:h-12 flex flex-row sm:justify-between sm:px-4 font-semibold sm:mt-[40px] sm:hover:bg-[#EE202E] sm:hover:text-white sm:hover:border-none sm:duration-300 sm:gap-0
          w-[267px] h-[47px] pt-2.5 pb-2.5 pr-3 pl-[100px] gap-[15px] text-[16px] ">
            <p>Explore</p>
            <span className=" w-[12px] h-[14px] gap-0 border-t-2 border-transparent">
              ↗️
            </span>
          </button>
        </div>
              
              
            </div>
          )}
        </div>
        <div
          onClick={() => handleClick(2)}
          className={` cursor-pointer  font-geomanist lg:text-[40px] text-[30px] lg:w-[390px] h-[110px] font-light leading-[40px] text-center	lg:pl-6	py-8 border-b border-black ${active == 2
              ? ' 	 text-[#E53935] font-geomanist text-3xl font-extrabold leading-[40px] text-left"'
              : ""
            }`}
        >
          Product Discovery
        </div>
        <div
          onClick={() => handleClick(3)}
          className={` cursor-pointer font-geomanist lg:text-[40px] text-[30px] lg:w-[390px] h-[110px] font-light leading-[40px] text-center	lg:pl-6	py-8 border-b border-black ${active == 3
              ? ' text-[#E53935] font-geomanist text-2xl font-extrabold leading-[40px] text-left"'
              : ""
            }`}
        >
          Web Design
        </div>
        <div
          onClick={() => handleClick(4)}
          className={` cursor-pointer font-geomanist lg:text-[40px] text-[30px] lg:w-[390px] h-[110px] font-light leading-[40px] text-center	lg:pl-6	py-8 border-b border-black ${active == 4
              ? ' text-[#E53935] font-geomanist text-3xl font-extrabold leading-[40px] text-left"'
              : ""
            }`}
        >
          Experience Design
        </div>
        <div
          onClick={() => handleClick(5)}
          className={` cursor-pointer font-geomanist lg:text-[40px] text-[30px] lg:w-[390px] h-[110px] font-light leading-[40px] text-center	lg:pl-6	py-8 border-b border-black ${active == 5
              ? " text-[#E53935] font-geomanist text-3xl font-extrabold leading-[40px] text-left"
              : ""
            }`}
        >
          Design Ops
        </div>
      </div>



      {/* Right Content Area */}
      {number === 12 && (
        <RightCore
          title1="Advance UI Design"
          title2="Costumized Design Systems"
          title3="Rapid Prototyping"
          title4="Intutive User Flows"
          title5="UX Design and Usability"
          title6="Comprehensive User Testing"
          heading="Innovative Solutions, Exceptional Experiences"
          para="We seamlessly blend creativity and technology to craft products that captivate users and stand out in the market. Our designs transform complex challenges into intuitive, engaging user experiences."
        />
      )}
      {number === 2 && (
        <RightCore
          title1="Interactive Discovery Workshops"
          title2="Costumized Design Systems"
          title3="In-depth User Interviews"
          title4="Detailed User Journey Mapping"
          title5="Strategic MVP Planning"
          title6="Smart Competitive Analysis"
          heading="Unlocking Your Product's True Potential"
          para="Our discovery process turns visionary ideas into tangible products. We identify and prioritize features that resonate with users and drive market success, ensuring your product makes a lasting impact."
        />
      )}
      {number === 3 && (
        <RightCore
          title1="High-Fidelity Web Designs"
          title2="Seamless UX/UI for Web"
          title3="Efficient Lo-Fi Mockups"
          title4="Tailored Design Approaches"
          title5="Responsive Design Solutions"
          heading="Captivating Digital Presence, Unparalleled Performance"
          para="We create web experiences that go beyond aesthetics. Our designs combine visual appeal with exceptional functionality, delivering responsive and user-friendly websites that elevate your brand online."
        />
      )}

      {number === 4 && (
        <RightCore
          title1="Brand & CX Strategies"
          title2="Accessible Design Solutions"
          title3="Distinctive Visual Identity Systems"
          title4="Thorough Brand & CX Audits"
          title5="Multi-channel Brand Experiences"
          title6="Innovative Creative Direction"
          heading="Cohesive Identities, Meaningful Connections"
          para="We craft powerful brand and customer experiences that engage audiences across all touchpoints. Our strategies ensure your brand not only stands out but also creates lasting connections with your audience."
        />
      )}

      {number === 5 && (
        <RightCore
          title1="Streamlined Design Processes"
          title2="Robust Quality Assurance"
          title3="Effective Team Structuring"
          title4="Cross-team Collaboration"
          title5="Advanced Tool Integration"
          heading="Empowering Teams, Elevating Output"
          para="We optimize your design processes and empower your team to consistently deliver excellence. Our approach enhances collaboration, streamlines workflows, and scales your design capabilities for maximum impact."
        />
      )}

    </div>
  );
}

// Feature Component
