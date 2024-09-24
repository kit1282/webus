"use client"

import Footer from "./footer";
import Navbar from "./Navbar";
import Accord from "./Pagefive/Accord";

import Client from "./Pagefive/Client";
import Hero from "./Pagefive/Hero";
import ProjectInfo from "./Pagefive/ProjectInfo";
import ProjectsSection from "./Pagefive/Projectsec";

export default function Pagefive() {
    return (
        <>
            <Navbar />
            <Hero
                title="Custom Product Design"
                description="This is a custom description for the product design process."
                imageSrc="/image/rectangle19.png"
                imageAlt="Image Alt Text"
                highlightText="Creative Innovations,"
                secondaryText="remarkable,"
                tertiaryText="outcomes"
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