import React from 'react'
import "./ProjectStyles.css";
import Footer from '../../Layout/Footer/Index.jsx'
import NavBar from '../../Layout/NavBar/Index';
import HeroImg2 from '../../Common/HeroImg2/HeroImg2';
import { Card } from '../../Common/Cards/Card';
import WorkCard from '../../Common/WorkCard/Index';
const index = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works"/>
      <WorkCard/>
      <Card/>
      <Footer/>
      </div>
  )
}

export default index