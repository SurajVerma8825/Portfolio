import React from "react";
import {
  AboutMe,
  Banner,
  Contact,
  Feature,
  Footer,
  FooterBottom,
  Navbar,
  Projects,
  Resume,
} from "./Index";

const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <Navbar />
      <Banner />
      <AboutMe />
       <Feature />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
      <FooterBottom /> 
    </div>
  );
};

export default App;
