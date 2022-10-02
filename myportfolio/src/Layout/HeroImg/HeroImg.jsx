import React from 'react'
import "./HeroImgStyles.css"
import IntroImg from "../../assets/altumcode.jpg"
import { Link } from 'react-router-dom'
const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={IntroImg} alt="intro" />
      </div>
      <div className='content'>
        <p>HI, I'M A MERN STACK DEVELOPER.</p>
        <h1>Mern Stack Developer.</h1>
        <div>
          <Link to="/project"
            className="btn">Projects
          </Link>
          <Link to="/contactUs"
            className="btn btn-light">Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg;