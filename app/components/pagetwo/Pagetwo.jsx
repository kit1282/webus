import Footer from "../Footer";
import Navbar from "../Subnavbar";
import SubNavbar from "../Navbar";
import DesignProcess from "./DesignProcess";
import Mindset from "./Mindeset";
import OfficeAddress from "./OfficeAddress";
import OurClients from "./Ourclients";
import OurPeople from "./Ourpeople";
import Quote from "./Quote";
import Service from "./Service";
import IntroTwo from "./Introtwo";
import Data from "./Data";

export default function PageTwo() {
  return (
    <div className="overscroll-x-none">
      <SubNavbar />
      <IntroTwo />
      <Quote />
      <Mindset />
      <Service />
      <DesignProcess />
      <Data />
      <OurPeople />
      <OurClients />
      <OfficeAddress />
      {/* <Footer/> */}
    </div>
  );
}
