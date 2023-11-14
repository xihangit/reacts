
import React from "react";

import Navbar from './port/Navbar'
import Intro from './port/Intro'
import Skill from './port/Skill'
import Works from './xihan/Works'
import Contact from './xihan/Contact'
import Footer from './xihan/Footer'

function  App() {
  return (
    <div>
  <Navbar />
  <Intro />
  <Skill  />

  <Works />

  <Contact />
  <Footer />
    </div>
  );
}

export default App;
