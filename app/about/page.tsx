import Navbar from "../components/Navbar";
import Data from "../components/pagetwo/Data";
import DesignProcess from "../components/pagetwo/DesignProcess";
import IntroTwo from "../components/pagetwo/Introtwo";
import Mindset from "../components/pagetwo/Mindeset";
import OfficeAddress from "../components/pagetwo/OfficeAddress";
import OurClients from "../components/pagetwo/Ourclients";
import OurPeople from "../components/pagetwo/Ourpeople";
import Quote from "../components/pagetwo/Quote";
import Service from "../components/pagetwo/Service";


export default function PageTwo() {
    return (
        <>
            <Navbar />
            <IntroTwo />
            <Quote />
            <Mindset />
            <Service />
            <DesignProcess />
            <Data />
            <OurPeople />
            <OurClients />
            <OfficeAddress />
        </>
    );
}