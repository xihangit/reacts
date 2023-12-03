import React from 'react'
import bg from '../assets/bom.jpg'
import { Link } from "react-scroll";
import btnImg from '../assets/hireme.png'
import './Intro.css'

const Intro = () => {
  return (
    <section className="intro">
    
    <div className="introContent">
    
     <span className="hello">Hellow,</span>

     <span className="introText">I am <span className="introName">Xihan</span><br/> website Desingner </span>

      <p className="introPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nihil.</p>
      

    <Link> <button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
    </div>

     <img src={bg}  alt="profile" className='bg' />

    </section>
  )
}

export default Intro
