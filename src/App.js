// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
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
import Error from "./Screens/404";
import Partner from "./Screens/Partner";
import Footer2 from "./Components/Footer2";
import Img4 from "./Assets/image5.svg";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { FloatingWhatsApp } from "react-floating-whatsapp";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <FloatingWhatsApp
          phoneNumber="+2347087780540" // Required
          accountName="HealthGO" // Optional
          avatar={Img4} // Optional
          initialMessageByServer="Hi there! How can I assist you?" // Optional
          statusMessage="Available" // Optional
          placeholder="Write here..." // Optional
          allowEsc={true} // Optional
          darkMode={true}
          // Explore all available props below
        />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home /> <Footer />
              </>
            }
          />
          <Route
            path="/events"
            element={
              <>
                <Eve /> <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About /> <Footer />
              </>
            }
          />
          <Route
            path="/who-we-are"
            element={
              <>
                <WhoWeAre /> <Footer />
              </>
            }
          />
          <Route
            path="/what-we-do"
            element={
              <>
                <WhatWeDo /> <Footer />
              </>
            }
          />
          <Route
            path="/why-we-do-this"
            element={
              <>
                <WhyWeDoThis /> <Footer />
              </>
            }
          />
          <Route
            path="/privacy"
            element={
              <>
                <Privacy /> <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact /> <Footer />
              </>
            }
          />
          <Route
            path="/careers"
            element={
              <>
                <Carrer /> <Footer />
              </>
            }
          />
          <Route
            path="/privacy"
            element={
              <>
                <Privacy /> <Footer />
              </>
            }
          />
          <Route
            path="/partner"
            element={
              <>
                <Partner /> <Footer2 />
              </>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
