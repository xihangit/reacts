import React from "react";

import uiDesign from "../assets/ui-design.png";
import webDesign from "../assets/website-design.png";
import appDesign from "../assets/app-design.png";
import "./skills.css"

const Skill = () => {
  return (

    <section id="skills" >
      <span className="skill Title"> what I do</span>
      <span className="skillDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
        unde distinctio numquam odit? Ab.
      </span>

        <div className="skillBars" >
      <div className="skillBar">
      <img src={uiDesign} alt="" className="skillBarImg" />
      <div className="skillBarText">
      <h1>UI Designer</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum.</p>



</div>

</div>
      <div className="skillBar">
      <img src={webDesign} alt="" className="skillBarImg" />

      <div className="skillBarText">
      <h1>Web Designer</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum.</p>
</div>
</div>

      

      <div className="skillBar">

      <img src={appDesign} alt="" className="skillBarImg" />

      < div className="skillBarText">

<h1>App Designer</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum.
      </p>
      </div>
      </div>
      </div>

    </ section >
  );
};

export default Skill;


