import React, { useEffect, useState } from "react";
import "./App.css";

// AOS Library
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Project/Projects";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div id="home">
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <Navbar />
          <div className="px-8 md:px-10">
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
