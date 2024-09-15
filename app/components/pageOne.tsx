import Cards from "./pageone/cards";
import CaseStudies from "./pageone/caseStudies";
import Clients from "./pageone/clients";
import Footer from "./footer";
import Impact from "./pageone/impact";
import Intro from "./pageone/intro";
import ProjectIntro from "./pageone/projectIntro";
import Expertise from "./pageone/expertise";
import Navbar from "./Navbar";




export default function PageOne(){
    return(
        <div className=" relative "> 
            <Navbar/>
            <Intro/>
            <Cards/>
            <Expertise/>
            <ProjectIntro/>
            <CaseStudies/>
            <Impact/>
            <Clients/>
            <Footer/>
        </div>
    );
}
