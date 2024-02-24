import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Design from "./Pages/Design";
// import LocomotiveScroll from "locomotive-scroll";
import { useRef, useEffect, useState } from "react";
import About from "./Pages/About";
import Contactus from "./Pages/Contactus";
import Branding from "./Pages/Branding";
// import "./locomotive-scroll.css";
import Toperbar from "./Components/Toperbar";
import Footer from "./Components/Footer";
import Development from "./Pages/Development";
import Uiux from "./Pages/Uiux";
import Blog from "./Pages/Blog";
function App() {
  // const scrollRef = useRef(null);
  useEffect(() => {
 
    // const scroll = new LocomotiveScroll({
    //   el: scrollRef.current,
    //   smooth: true,
    // });
 
  }, []);
  return (
    <div className="App">
     
      <main  className="scroll-container">
        <Toperbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/development" element={<Development />} />
          <Route path="/uiux" element={<Uiux/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="*" element={<div>NOT FOUND</div>} />
        </Routes>
         <Footer/>
      </main>
    </div>
  );
}

export default App;
