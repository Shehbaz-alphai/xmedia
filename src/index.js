import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import Loader from "./Loader";
const root = createRoot(document.getElementById("root"));

const RootComponent = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (

      <BrowserRouter>
        {/* {loaded ? <App /> : <Loader />} */}
        <App />
      </BrowserRouter>
   
  );
};

root.render(<RootComponent />);

reportWebVitals();
