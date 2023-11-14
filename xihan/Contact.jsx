import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";
import logo from "../assets/adobe.png";
import somo from "../assets/microsoft.png";
import romo from "../assets/walmart.png";

import icon from "../assets/youtube.png";
import lala from "../assets/facebook-icon.png";
import rala from "../assets/twitter.png";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8tbqx98",
        "template_i4eq0qh",
        form.current,"65r85ifvklkwevPQ8IMeZ")
      .then((result) => {
          console.log(result.text);
        },(error) => {
          console.log(error.text);
        });
  };

  return (
    <section className="contactPage">
      <div id="clinets">
        <h2 className="contactPageTitle">My Clients</h2>
        <p className="clientDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
          cupiditate minima. Iusto deleniti et mollitia eum sapiente.
        </p>

        <div className="clientImgs">
          <img src={logo} alt="" className="clientImg" />
          <img src={somo} alt="" className="clientImg" />
          <img src={romo} alt="" className="clientImg" />
        </div>
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil qusenod
          odit labore nostrum beatae tempore.
        </span>

        <form action="" className="contactForm" ref={form} onSubmit={sendEmail} >
        <input type="text" className="name" placeholder="Your Name" name="your_name" />

        <input type="text" className="email" placeholder="Your Email" name="your_email" />

        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
        > </textarea>
        
        <button type="submit" className="subBtn">
          submit
        </button>
        </form>

        <div className="links">
          <img src={icon} alt="" className="link" />
          <img src={lala} alt="" className="link" />
          <img src={rala} alt="" className="link" />
        
        </div>
      </div>
    </section>
  );
}

export default Contact;
