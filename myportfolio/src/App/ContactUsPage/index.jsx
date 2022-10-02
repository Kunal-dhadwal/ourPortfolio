import React from 'react'
import "./ContactStyles.css";
import Footer from '../../Layout/Footer/Index.jsx'
import NavBar from '../../Layout/NavBar/Index';
import HeroImg2 from '../../Common/HeroImg2/HeroImg2'

const index = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="CONTACT." text="Let's have a chat"/>
      <Footer/>

      </div>
  )
}

export default index