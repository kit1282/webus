"use client"

import Footer from "../footer";
import Navbar from "../Navbar";
import Client from "../Pagefive/Client";
import Hero from "../Pagefive/Hero";
import ProjectInfo from "../Pagefive/ProjectInfo";
import ProjectsSection from "../Pagefive/Projectsec";


export default function Explore4() {
    const accordionItems = [
        {
          title: "Interactive Discovery Workshops",
          featureData: {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            sections: [
              { title: "Lorem Ipsum", items: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"] },
              { title: "Lorem Ipsum", items: [" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"] },
              { title: "Lorem Ipsum", items: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"] },
            ],
          },
          id: 1,
        },
        {
          title: "Prototyping",
          featureData: {
            description: "Rapidly visualize and test concepts before full development",
            sections: [
              { title: "Animation Design", items: ["Create interactive mockups to validate design concepts early"] },
              { title: "User Feedback", items: ["Iterate quickly based on user feedback and stakeholder input"] },
            ],
          },
          id: 2,
        },
        {
          title: "UX design and usability",
          featureData: {
            description: "Ensuring intuitive and efficient user experiences across all touchpoints",
            sections: [
              { title: "Animation Design", items: ["Conduct user research to inform design decisions"] },
              { title: "User Feedback", items: ["Create user personas and journey maps to guide the design process"] },
            ],
          },
          id: 3,
        },
        {
          title: "Design Systems",
          featureData: {
            description: "Developing consistent and scalable design languages for cohesive products",
            sections: [
              { title: "Animation Design", items: ["Create reusable UI components for efficient design and development"] },
              { title: "User Feedback", items: ["Establish design guidelines to ensure brand consistency"] },
            ],
          },
          id: 4,
        },
        {
          title: "User flow and wireframe",
          featureData: {
            description: "Mapping out logical user journeys and basic layout structures",
            sections: [
              { title: "Animation Design", items: ["Design intuitive navigation paths to improve user task completion"] },
              { title: "User Feedback", items: ["Create low-fidelity wireframes to establish content hierarchy"] },
            ],
          },
          id: 5,
        },
        {
          title: "User Testing",
          featureData: {
            description: "Gathering real user feedback to refine and optimize product designs",
            sections: [
              { title: "Animation Design", items: ["Conduct usability tests to identify pain points and areas for improvement"] },
              { title: "User Feedback", items: ["Use various testing methods including A/B testing and focus groups"] },
            ],
          },
          id: 6,
        },
      ];
    return (
        <>
            <Navbar />
            <Hero
                title="Product Discovery"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                imageSrc="/image/rectangle19.png"
                imageAlt="Image Alt Text"
                highlightText="Unlocking Your Product's,"
                secondaryText="True,"
                tertiaryText="Potential"
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