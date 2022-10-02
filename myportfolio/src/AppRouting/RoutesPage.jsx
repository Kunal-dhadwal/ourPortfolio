import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from "../App/HomePage/Index"
import AboutPage from "../App/AboutPage"
import ContactUsPage from "../App/ContactUsPage"
import ProjectPage from "../App/ProjectPage"

const RoutesPage = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<HomePage/>}> </Route>
    <Route path="/About" element={<AboutPage/>}> </Route>
    <Route path="/ContactUs" element={<ContactUsPage/>}> </Route>
    <Route path="/Project" element={<ProjectPage/>}> </Route>
   </Routes>
   </>
  )
}

export default RoutesPage;