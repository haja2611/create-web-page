import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Hack from "./harii/Hack";
import Contact from "./components/Contact";
import Careers from "./components/careers";
import Servip from "./Howerpic/Servicespage/Servip";
import Infonatica from "./Howerpic/consulting/Infonatica";
import Sales from "./Howerpic/consulting/Sales";
import Online from "./Howerpic/Traing/Online";
import RedHad from "./Howerpic/consulting/RedHad";
import Navbar1 from "./navbar/Navbar1";

function App() {
  return (
    <div className="App">
      <>
        <Navbar1 />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hack />} />
            <Route path="/Contact Us" element={<Contact />} />
            <Route path="/Careers" element={<Careers />} />
            <Route path="/About Us" element={<Hack />} />
            <Route path="/Services" element={<Servip />} />
            <Route path="/Informatica" element={<Infonatica />} />
            <Route path="/Salesforce" element={<Sales />} />
            <Route path="/RedHat" element={<RedHad />} />
            <Route path="/Online Training" element={<Online />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
