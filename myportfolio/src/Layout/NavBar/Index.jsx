import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./NavBarStyles.css"
import { FaBars, FaTimes } from "react-icons/fa";
const Index = () => {
    const [clickHam, setClickHam] = useState(false);
    const [colorScroll, setColorScroll] = useState(false);
    const handleClickHam = () => setClickHam(!clickHam);

    const changeScrollColor = () => {
        if (window.scrollY >= 100) {
            setColorScroll(true)
        } else {
            setColorScroll(false)
        }
    };
    window.addEventListener("scroll", changeScrollColor);
    return (

        <div className={colorScroll ? 'Header Header-bg' : "Header"}>
            <Link to="/contactUs">
                <h1>Portfolio.</h1>
            </Link>
            <ul className={clickHam ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Project">Project</Link>
                </li>
                <li>
                    <Link to="/contactUs">Contact</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClickHam}>
                {clickHam ?
                    <FaTimes size={20} style={{ color: "#fff" }} /> :
                    <FaBars size={20} style={{ color: "#fff" }} />

                }
            </div>
        </div>
    )
}

export default Index