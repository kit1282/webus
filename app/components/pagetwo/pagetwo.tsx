import Footer from "../footer";
import Navbar from "../subnavbar";
import SubNavbar from "../Navbar";
import DesignProcess from "./designProcess";
import Mindset from "./mindeset";
import OfficeAddress from "./officeAddress";
import OurClients from "./ourclients";
import OurPeople from "./ourpeople";
import Quote from "./quote";
import Service from "./service";
import IntroTwo from "./introtwo";
import Data from "./data";

export default function PageTwo(){
    return(
        <div className="overscroll-x-none">
            <SubNavbar/>
            <IntroTwo/>
             <Quote/>
             <Mindset/>
             <Service/>
             <DesignProcess/>
             <Data/>
             <OurPeople/>
             <OurClients/>
            <OfficeAddress/> 
            {/* <Footer/> */}
        </div>
    );
}