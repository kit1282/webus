import Footer from "./Footer";
import Navbar from "./Navbar";
import ClientSuccess from "./pagethree/Clientsuccess";
import Subpart from "./pagethree/Subpart";

export default function PageThree() {
  return (
    <div>
      <Navbar/>
      <ClientSuccess />
      <Subpart />
      <Footer />
    </div>
  );
}
