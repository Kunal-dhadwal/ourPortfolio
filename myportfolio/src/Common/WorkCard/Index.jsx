import React from 'react'
import "./workCard.css";
import pro1 from "../../assets/istockphoto-1360521209-170667a.jpg"
import { NavLink } from 'react-router-dom';
const Index = () => {
  return (
    <div className='project-card'>
            <img src={pro1} alt="images Pro" />
            <h2 className='project-title'>Project Title</h2>
            <div className='pro-details'>
                <p>This is text</p>
                <div className='pro-btns'>
                    <NavLink to="url.com" className="btn">
                        View
                    </NavLink>
                    <NavLink to="url.com" className="btn">
                        Source
                    </NavLink>
                </div>
            </div>
        </div>
  )
}

export default Index