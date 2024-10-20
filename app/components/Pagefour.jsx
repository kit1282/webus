import Footer from "./Footer";
import Navbar from "./Navbar";
import Approach from "./pagefour/Approach";
import DesignService from "./pagefour/DesignService";
import Discovery from "./pagefour/Discovery";
import IntroFour from "./pagefour/Introfour";
import SmartProcess from "./pagefour/SmartProcess";

export default function PageFour() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <IntroFour />
      <Discovery />
      <DesignService />
      <SmartProcess />
      <Approach />
      <Footer />
    </div>
  );
}
