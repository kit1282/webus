import Cards from "./PageOne/Cards";
import CaseStudies from "./PageOne/CaseStudies";
import Clients from "./PageOne/Clients";
import Footer from "./Footer";
import Impact from "./PageOne/Impact";
import Intro from "./PageOne/Intro";
import ProjectIntro from "./PageOne/ProjectIntro";
import Expertise from "./PageOne/Expertise";
import Navbar from "./Navbar";
import Sidebar from "./SideBar";

export default function PageOne() {
  return (
    <div className=" relative ">
      <Sidebar />
      <Navbar />
      <Intro />
      <Cards />
      <Expertise />
      <ProjectIntro />
      <CaseStudies />
      <Impact />
      <Clients />
      <Footer />
    </div>
  );
}
