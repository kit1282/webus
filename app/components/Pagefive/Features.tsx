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
      <div className="flex gap-[200px] h-[360px] mt-5 ml-4 pt-0 pb-0">
        <div className="flex flex-col">
          <div className="flex">
          <h1 className="w-[271px] h-[40px] text-[40px] leading-[40px] font-medium text-left text-black">
            {title}
          </h1>
          
          </div>
          <p className="w-[270px] h-[120px] text-[25px] leading-[30px] font-normal text-left mt-6 text-black">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10">
          {sections?.map((section, index) => (
            <div key={index} className="flex flex-col w-[370px] h-[50px] mt-4">
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
