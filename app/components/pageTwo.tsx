import Clients from "./pageone/clients";
import Navbar from "./navbar";
import Data from "./pagetwo/data";
import DesignProcess from "./pagetwo/designProcess";
import IntroTwo from "./pagetwo/introtwo";
import Mindset from "./pagetwo/mindeset";
import OfficeAddress from "./pagetwo/officeAddress";
import OurClients from "./pagetwo/ourclients";
import OurPeople from "./pagetwo/ourpeople";
import Quote from "./pagetwo/quote";
import Service from "./pagetwo/service";
import Footer from "./footer";

export default function PageTwo(){
    return(
        <div className="overflow-x-hidden">
            <Navbar/>
            <IntroTwo/>
            <Quote/>
            <Mindset/>
            <Service/>
            <DesignProcess/>
            <Data/>
            <OurPeople/>
            <OurClients/>
            <OfficeAddress/>
            <Footer/>
        </div>
    );
}