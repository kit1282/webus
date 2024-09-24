import Navbar from "../components/Navbar";
import Data from "../components/pagetwo/data";
import DesignProcess from "../components/pagetwo/designProcess";
import IntroTwo from "../components/pagetwo/introtwo";
import Mindset from "../components/pagetwo/mindeset";
import OfficeAddress from "../components/pagetwo/officeAddress";
import OurClients from "../components/pagetwo/ourclients";
import OurPeople from "../components/pagetwo/ourpeople";
import Quote from "../components/pagetwo/quote";
import Service from "../components/pagetwo/service";


export default function PageTwo(){
    return(
        <>
            <Navbar />
            <IntroTwo />
            <Quote />
            <Mindset/>
            <Service/>
            <DesignProcess/>
            <Data/>
            <OurPeople/>
            <OurClients/>
            <OfficeAddress/>
        </>
    );
}