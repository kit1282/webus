// import React from "react";
// import { GoPlus } from "react-icons/go";
// import Image from 'next/image';
// import {
//  Accordion,
//  AccordionHeader,
//  AccordionBody
// } from "@material-tailwind/react";
// import Features from "./Features";

// export default function Accord() {
//   const [open, setOpen] = React.useState(1);

//   const handleOpen = (value) => setOpen(open === value ? 0 : value);

//   // Example data for the Features component
//   const featureData1 = {
//     description:
//       "Creating visually appealing and intuitive interfaces for seamless interactions.",
//     sections: [
//       {
//         title: "Visual Design",
//         items: [
//           "Create aesthetically pleasing layouts, color schemes, and typography that align with brand identity and enhance user engagement.",
//         ],
//       },
//       {
//         title: "Interaction Design",
//         items: [
//           "Design intuitive user interactions and animations that guide users through the interface smoothly and enhance overall usability.",
//         ],
//       },
//       {
//         title: "Responsive Design",
//         items: [
//           "Ensure seamless user experiences across various devices and screen sizes, from mobile to desktop.",
//         ],
//       },
//       {
//         title: "Visual Design",
//         items: [
//           "Create aesthetically pleasing layouts, color schemes, and typography that align with brand identity and enhance user engagement.",
//         ],
//       },
//     ],
//   };

//   const featureData2 = {
//     description:
//       "  Rapidly visualize and test concepts before full development",
//     sections: [
//       {
//         title: "Animation Design",
//         items: ["Create interactive mockups to validate design concepts early"],
//       },
//       {
//         title: "User Feedback",
//         items: ["Iterate quickly based on user feedback and stakeholder input"],
//       },
//       {
//         title: "Responsive Design",
//         items: [" Reduce development costs by identifying issues early on"],
//       },
//       {
//         title: "Visual Design",
//         items: [
//           " Facilitate clearer communication with clients and team members",
//         ],
//       },
//     ],
//   };

//   const featureData3 = {
//     description:
//       "Ensuring intuitive and efficient user experiences across all touchpoints",
//     sections: [
//       {
//         title: "Animation Design",
//         items: [" Conduct user research to inform design decisions"],
//       },
//       {
//         title: "User Feedback",
//         items: [
//           " Create user personas and journey maps to guide the design process",
//         ],
//       },
//       {
//         title: "Responsive Design",
//         items: [" Implement best practices in  usability and accessibility"],
//       },
//       {
//         title: "Visual Design",
//         items: [" Perform usability testing to refine and optimize designs"],
//       },
//     ],
//   };
//   const featureData4 = {
//     description:
//       "  Developing consistent andscalable design languagesfor cohesive products",
//     sections: [
//       {
//         title: "Animation Design",
//         items: [
//           "Create reusable UI components for efficient design and development",
//         ],
//       },
//       {
//         title: "User Feedback",
//         items: ["Establish design guidelines to  ensure brand consistency"],
//       },
//       {
//         title: "Responsive Design",
//         items: ["Improve collaboration between  designers and developers"],
//       },
//       {
//         title: "Visual Design",
//         items: [
//           " Facilitate easier maintenance and updates of digital products",
//         ],
//       },
//     ],
//   };
//   const featureData5 = {
//     description:
//       " Mapping out logical user journeys and basic layout structures",
//     sections: [
//       {
//         title: "Animation Design",
//         items: [
//           "Design intuitive navigation paths to improve user task completion",
//         ],
//       },
//       {
//         title: "User Feedback",
//         items: [
//           "Create low-fidelity wireframes to establish content hierarchy",
//         ],
//       },
//       {
//         title: "Responsive Design",
//         items: ["Validate information architecture before visual design phase"],
//       },
//       {
//         title: "Visual Design",
//         items: [
//           " Collaborate with stakeholders to align on core functionality",
//         ],
//       },
//     ],
//   };
//   const featureData6 = {
//     description:
//       "Gathering real user feedback to refine and optimize product designs",
//     sections: [
//       {
//         title: "Animation Design",
//         items: [
//           "Conduct usability tests to identify pain points and areas for improvement",
//         ],
//       },
//       {
//         title: "User Feedback",
//         items: [
//           "Use various testing methods including A/B testing and focus groups",
//         ],
//       },
//       {
//         title: "Responsive Design",
//         items: ["Analyze user behavior data to inform design decisions"],
//       },
//       {
//         title: "Visual Design",
//         items: [
//           " terate designs based on user feedback for continuous improvement",
//         ],
//       },
//     ],
//   };

//   return (
//     <div className="sm:px-24 px-8 relative">
//       <Accordion open={open === 1} >
//         <AccordionHeader onClick={() => handleOpen(1)}>
//           UI design
//           <GoPlus  className={`sm:ml-[1100px] ml-[190px] text-red-600 ${ open === 1 ? "rotate-45 ": "rotate-0" } `}/>
//         </AccordionHeader>
//         <AccordionBody>
//           {/* Use the Features component with the first set of data */}
//           <Features {...featureData1} />
//         </AccordionBody>
//       </Accordion>

//       <Accordion open={open === 2}>
//         <AccordionHeader onClick={() => handleOpen(2)}>
//           Prototyping
//           <GoPlus  className={`sm:ml-[1075px] ml-[170px] text-red-600 ${ open === 2 ? "rotate-45 ": "rotate-0" } `}/>
//         </AccordionHeader>
//         <AccordionBody>
//           {/* Use the Features component with the first set of data */}
//           <Features {...featureData2} />
//         </AccordionBody>
//       </Accordion>

//       <Accordion open={open === 3}>
//         <AccordionHeader onClick={() => handleOpen(3)}>
//           UX design and usability
//           <GoPlus  className={`sm:ml-[960px] ml-[55px] text-red-600 ${ open === 3 ? "rotate-45 ": "rotate-0" } `}/>
//         </AccordionHeader>
//         <AccordionBody>
//           {/* Use the Features component with the second set of data */}
//           <Features {...featureData3} />
//         </AccordionBody>
//       </Accordion>

//       <Accordion open={open === 4}>
//         <AccordionHeader onClick={() => handleOpen(4)}>
//           Design Systems
//           <GoPlus  className={`sm:ml-[1030px] ml-[125px] text-red-600 ${ open === 4 ? "rotate-45 ": "rotate-0" } `}/>
//         </AccordionHeader>
//         <AccordionBody>
//           {/* Use the Features component with the third set of data */}
//           <Features {...featureData4} />
//         </AccordionBody>
//       </Accordion>

//       <Accordion open={open === 5}>
//         <AccordionHeader onClick={() => handleOpen(5)}>
//           User flow and wireframe
//           <GoPlus  className={`sm:ml-[950px] ml-[50px] text-red-600 ${ open === 5 ? "rotate-45 ": "rotate-0" } `}/>
//         </AccordionHeader>
//         <AccordionBody>
//           {/* Use the Features component with the third set of data */}
//           <Features {...featureData5} />
//         </AccordionBody>
//       </Accordion>
//       <Accordion open={open === 6}>
//         <AccordionHeader onClick={() => handleOpen(6)}>
//           User Testing
//           <GoPlus  className={`sm:ml-[1060px] ml-[160px] text-red-600 ${ open === 6 ? "rotate-45 ": "rotate-0" } `}/>
//         </AccordionHeader>
//         <AccordionBody>
//           {/* Use the Features component with the third set of data */}
//           <Features {...featureData6} />
//         </AccordionBody>
//       </Accordion>
    
//     <Image src="/image/18.png" alt="bg" width={50} height={50} className="absolute -inset-x-[20px] sm:-inset-x-[100px] inset-y-[0px] sm:inset-y-[460px] sm:w-[240px] sm:h-[340px]"/>

//     </div>
//   );
// }


import React from "react";
import { GoPlus } from "react-icons/go";
import Image from 'next/image';
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from "@material-tailwind/react";
import Features from "./Features";

export default function Accord({accordionItems}) {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  // Define accordion items


  return (
    <div className="sm:px-24 px-8 relative">
      {accordionItems.map(({ title, featureData, id }) => (
        <Accordion open={open === id} key={id}>
          <AccordionHeader onClick={() => handleOpen(id)} className="w-[330px] sm:w-[1270px] flex justify-between  ">
            <div className="w-[270px] sm:w-[1200px] ">{title}</div>
            <div><GoPlus className={`   text-red-600 ${open === id ? "rotate-45" : "rotate-0"}`} /></div>
          </AccordionHeader>
          <AccordionBody>
            <Features {...featureData} />
          </AccordionBody>
        </Accordion>
      ))}

      <Image src="/image/18.png" alt="bg" width={50} height={50} className="absolute -inset-x-[20px] sm:-inset-x-[100px] inset-y-[0px] sm:inset-y-[460px] sm:w-[240px] sm:h-[340px]" />
    </div>
  );
}
