import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Design from "./Pages/Design";
import LocomotiveScroll  from 'locomotive-scroll'
import { useRef,useEffect,useState } from "react";
import About from "./Pages/About";
import Contactus from "./Pages/Contactus";
import Branding from "./Pages/Branding";
import './locomotive-scroll.css'
import Toperbar from "./Components/Toperbar";
import Footer from "./Components/Footer";
import Loader from "./Loader";
import Development from "./Pages/Development";
function App() {
  const scrollRef = useRef(null);
  const [loaded,setloaded]=useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setloaded(true);
      },2000);
const scroll=new LocomotiveScroll({
  el:scrollRef.current,
  smooth:true,
});
return()=>{
  scroll.destroy();
}

  },[]);
  return (
    <div className="App">
     {loaded ? null:  <Loader/>}
  <main  ref={scrollRef} className="scroll-container">
    <Toperbar/>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/development" element={<Development />} />
        <Route path="*" element={<div>NOT FOUND</div>} />
      </Routes>
  
  </main>

     
    </div>
  );
}

export default App;
