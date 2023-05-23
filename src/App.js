// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";
import Eve from "./Screens/Eve";
import About from "./Screens/About";
import WhoWeAre from "./Screens/WhoWeAre";
import WhatWeDo from "./Screens/WhatWeDo";
import WhyWeDoThis from "./Screens/WhyWeDoThis";
import Privacy from "./Screens/Privacy";
import Contact from "./Screens/Contact";
import Carrer from "./Screens/Carrer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Eve />} />
          <Route path="/about" element={<About />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/why-we-do-this" element={<WhyWeDoThis />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Carrer />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
