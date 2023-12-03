import React from 'react';

import Navbar from './port/Navbar'
import Intro from './port/Intro'
import Skill from './port/Skill';
import Works from './xihan/Works';


import Footer from './xihan/Contact';
import Contact from './xihan/Contact';






 function App(){
  return (
    <div>
     
        <Navbar />
        <Intro />
        <Skill/>
        <Works/>
      
        <Footer />
      

  
    </div>
  );
};

export default App;
