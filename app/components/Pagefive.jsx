"use client";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Accord from "./Pagefive/Accord";

import Client from "./Pagefive/Client";
import Hero from "./Pagefive/Hero";
import ProjectInfo from "./Pagefive/ProjectInfo";
import ProjectsSection from "./Pagefive/Projectsec";

export default function Pagefive() {
  const accordionItems = [
    {
      title: "UI design",
      featureData: {
        description:
          "Creating visually appealing and intuitive interfaces for seamless interactions.",
        sections: [
          {
            title: "Visual Design",
            items: [
              "Create aesthetically pleasing layouts, color schemes, and typography that align with brand identity and enhance user engagement.",
            ],
          },
          {
            title: "Interaction Design",
            items: [
              "Design intuitive user interactions and animations that guide users through the interface smoothly and enhance overall usability.",
            ],
          },
          {
            title: "Responsive Design",
            items: [
              "Ensure seamless user experiences across various devices and screen sizes, from mobile to desktop.",
            ],
          },
        ],
      },
      id: 1,
    },
    {
      title: "Prototyping",
      featureData: {
        description:
          "Rapidly visualize and test concepts before full development",
        sections: [
          {
            title: "Animation Design",
            items: [
              "Create interactive mockups to validate design concepts early",
            ],
          },
          {
            title: "User Feedback",
            items: [
              "Iterate quickly based on user feedback and stakeholder input",
            ],
          },
        ],
      },
      id: 2,
    },
    {
      title: "UX design and usability",
      featureData: {
        description:
          "Ensuring intuitive and efficient user experiences across all touchpoints",
        sections: [
          {
            title: "Animation Design",
            items: ["Conduct user research to inform design decisions"],
          },
          {
            title: "User Feedback",
            items: [
              "Create user personas and journey maps to guide the design process",
            ],
          },
        ],
      },
      id: 3,
    },
    {
      title: "Design Systems",
      featureData: {
        description:
          "Developing consistent and scalable design languages for cohesive products",
        sections: [
          {
            title: "Animation Design",
            items: [
              "Create reusable UI components for efficient design and development",
            ],
          },
          {
            title: "User Feedback",
            items: ["Establish design guidelines to ensure brand consistency"],
          },
        ],
      },
      id: 4,
    },
    {
      title: "User flow and wireframe",
      featureData: {
        description:
          "Mapping out logical user journeys and basic layout structures",
        sections: [
          {
            title: "Animation Design",
            items: [
              "Design intuitive navigation paths to improve user task completion",
            ],
          },
          {
            title: "User Feedback",
            items: [
              "Create low-fidelity wireframes to establish content hierarchy",
            ],
          },
        ],
      },
      id: 5,
    },
    {
      title: "User Testing",
      featureData: {
        description:
          "Gathering real user feedback to refine and optimize product designs",
        sections: [
          {
            title: "Animation Design",
            items: [
              "Conduct usability tests to identify pain points and areas for improvement",
            ],
          },
          {
            title: "User Feedback",
            items: [
              "Use various testing methods including A/B testing and focus groups",
            ],
          },
        ],
      },
      id: 6,
    },
  ];
  return (
    <>
      <Navbar />
      <Hero
        title="Product Design"
        description="At Webus, we transform complex challenges into intuitive, user-centric digital solutions. Our product design process blends creativity, strategy, and technology to craft experiences that captivate users and drive growth. Through research, prototyping, and refinement, we create products that exceed expectations. Whether you're a startup or established brand, our expert team brings your vision to life."
        imageSrc="/image/rectangle19.png"
        imageAlt="Image Alt Text"
        highlightText="Innovative designs,"
        secondaryText="extraordinary,"
        tertiaryText="results"
        accordionItems={accordionItems}
      />
      <ProjectsSection />
      <ProjectInfo />
      {/* <Accord/> */}
      {/* <AccordionComponent /> */}
      <Client />
      <Footer />
    </>
  );
}
