import Footer from "./footer";
import Navbar from "./navbar";
import Approach from "./pagefour/approach";
import DesignService from "./pagefour/designService";
import Discovery from "./pagefour/discovery";
import IntroFour from "./pagefour/introfour";
import SmartProcess from "./pagefour/smartProcess";


export default function PageFour(){
    return (
        <div className="overflow-x-hidden">
         <Navbar/>
        <IntroFour/>
          <Discovery/>
        <DesignService/>
        <SmartProcess/>
        <Approach/>   
        <Footer/>
        </div>
    );
}