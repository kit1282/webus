"use client";
import { useState } from "react";
import ApproachTemp from "./approachtemp";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4;  


  const handleNextPage = () => {
    console.log('right');
    
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    console.log('left');

    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="overflow-hidden sm:h-[670px] ">
      
      {currentPage === 0 && (
                <ApproachTemp

                 header = "Modular Approach"
                 para = "The project presented several design challenges"
                 heading1 = "Flexible Adaptation"
                 heading2 = "Iterative Refinement"
                 heading3 = "Collaborative Innovation"
                 heading4 = "Scalable Solutions"
                 point1 = "We tailor our approach to each unique project, adapting our methods to meet specific client needs and industry demands."
                 point2 = "Our process involves continuous improvement, with regular feedback loops to ensure the final product exceeds expectations."
                 point3 = "We work closely with clients, fostering a partnership that encourages creative problem-solving and breakthrough solutions."
                 point4 = "Our designs are built to grow with your business, ensuring long-term value and adaptability in rapidly changing markets."
                 />
             )}
             {currentPage === 1 && (
                 <ApproachTemp
                 header = "Agile Methodology"
                 para = "We embrace flexibility and rapid iteration"
                 heading1 = "Sprint-Based Development"
                 heading2 = "Continuous Integration"
                 heading3 = "User-Centric Design"
                 heading4 = "Data-Driven Decisions"
                 point1 = "Our teams work in focused sprints,delivering tangible results and allowing for quick adjustments based on evolving project needs."
                 point2 = "We employ cutting-edge tools to ensure seamless integration of new features, maintaining high quality throughout the development process."
                 point3 = "Every decision is guided by user needs and feedback, resulting in products that truly resonate with the target audience."
                 point4 = "We leverage analytics and user data to inform our design choices, optimizing for performance and user satisfaction."
                 />
             )}
             {currentPage === 2 && (
                 <ApproachTemp
                 header = "Lean UX"
                 para = "We focus on delivering maximum value with minimal waste"
                 heading1 = "Hypothesis-Driven Design"
                 heading2 = "Minimum Viable Products"
                 heading3 = "Cross-Functional Collaboration"
                 heading4 = "Continuous Learning"
                 point1 = "We form and test hypotheses aboutuser needs and behaviors, allowing us to validate ideas quickly and efficiently."
                 point2 = "We create streamlined prototypes to test core concepts, gather feedback, and iterate rapidly before full development."
                 point3 = "Our teams work across disciplines, breaking down silos to ensure a holistic approach to problem-solving."
                 point4 = "We embrace a culture of ongoing education, staying ahead of industry trends and emerging technologies."
                 />
             )}
             {currentPage === 3 && (
                 <ApproachTemp
                 header = "Design Thinking"
                 para = "We apply creative problem-solving to complex challenges "
                 heading1 = "Empathy-Driven Research"
                 heading2 = "Ideation Workshops"
                 heading3 = "Rapid Prototyping"
                 heading4 = "Iterative Testing"
                 point1 = "We immerse ourselves in the user's world, gaining deep insights that inform innovative solutions."
                 point2 = "We facilitate collaborative brainstorming sessions to generate diverse ideas and unique approaches."
                 point3 = "We quickly bring concepts to life, allowing for hands-on testing and refinement of ideas."
                 point4 = "We continuously test and improve our designs, ensuring they meet both user needs and business objectives."
                 />
             )}

<div className="-mt-[40px] sm:-mt-[140px] sm:ml-[200px] ml-[100px]
     sm:w-[200px] flex items-center ">
      {/* Left Arrow */}
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 0}
        className={`scale-150 ${
          currentPage === 0 ? "text-gray-400" : "text-gray-800"
        } transition-all duration-300`}
      >
        <svg
          xmlns="http:www.w3.org/2000/svg"
          className="h-[50px] w-[26px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Page Indicators */}
      <div className="flex items-center w-[100px] h-[14px] ml-5 gap-3">
        {[...Array(totalPages)].map((_, index) => (
          <span
            key={index}
            className={` h-3.5 w-3.5 scale-120 rounded-full ${
              currentPage === index ? "bg-red-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages - 1}
        className={`scale-150 ml-2.5 ${
          currentPage === totalPages - 1 ? "text-gray-400" : "text-gray-800"
        } transition-all duration-300`}
      >
        <svg
          xmlns="http:www.w3.org/2000/svg"
          className="h-[50px] w-[26px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      
    </div>
    </div>
    
  );
}

 