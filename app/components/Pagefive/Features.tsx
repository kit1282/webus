"use client"
import React from "react";



// Define the types for the props
interface Section {
  title: string;
  items: string[];
}

interface FeaturesProps {
  title: string;
  description: string;
  sections: Section[];
}

// Features component with typed props
const Features: React.FC<FeaturesProps> = ({ title, description, sections }) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row  w-[330px] sm:gap-[200px] h-[750px] sm:h-[360px]  sm:mt-5 sm:ml-4 sm:pt-0 sm:pb-0">
        <div className="flex flex-col">
          <div className="flex">
          <h1 className="sm:w-[271px] w-[330px] sm:h-[40px] h-[25px] sm:text-[40px] text-[25px] sm:leading-[40px] leading-[25px] font-medium text-left text-black">
            {title}
          </h1>
          
          </div>

          <p className="sm:w-[270px] w-[330px] sm:h-[120px] h-[60px] sm:text-[25px] text-[18px] sm:leading-[30px] leading-[30px] font-normal text-left sm:mt-6 -mt-4 text-black">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[90px] mt-5 sm:gap-x-[400px] sm:ml-[300px] ">
          {sections?.map((section, index) => (
            <div key={index} className="flex flex-col w-[330px] sm:w-[270px] h-[50px] mt-4">
              <h1 className="text-[16px] font-bold leading-[25px]  text-black">{section.title}</h1>
              <ul className="list-disc pl-4">
                {section.items.map((item, i) => (
                  <li key={i} className="text-[16px] font-normal leading-[25px]  text-black">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
</div>
      );
};

      export default Features;
