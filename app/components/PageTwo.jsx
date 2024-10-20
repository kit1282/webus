import Clients from "./PageOne/Clients";
import Navbar from "./Navbar";
import Data from "./pagetwo/Data";
import DesignProcess from "./pagetwo/DesignProcess";
import IntroTwo from "./pagetwo/Introtwo";
import Mindset from "./pagetwo/Mindeset";
import OfficeAddress from "./pagetwo/OfficeAddress";
import OurClients from "./pagetwo/Ourclients";
import OurPeople from "./pagetwo/Ourpeople";
import Quote from "./pagetwo/Quote";
import Service from "./pagetwo/Service";
import Footer from "./Footer";

export default function PageTwo() {
  return (
    <div className="overflow-x-hidden">
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
      <Footer />
    </div>
  );
}
