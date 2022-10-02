import React from 'react'
import "./AboutStyles.css";
import Footer from '../../Layout/Footer/Index.jsx'
import NavBar from '../../Layout/NavBar/Index';
import HeroImg2 from '../../Common/HeroImg2/HeroImg2'
const index = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="ABOUT." text="I'm a friendly Front-end and Backend Developer"/>
      <Footer/>

      </div>
  )
}

export default index