import React, { useRef, useState } from 'react'
import NAVBAR_DATA from './NAVBAR_DATA'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import logo from '../../Assets/logo.png'


export default function Navbar() {
    const nav_Hide = useRef();
    const closeNav = () => {
        nav_Hide.current.classList.remove("mobile-nav-links")
    }
    const showNav = () => {
        nav_Hide.current.classList.add("mobile-nav-links")
    }

    return (
        <>
            <nav>
                <div className="navbar">
                    <img src={logo} alt="" />
                    <div ref={nav_Hide} className='links'>
                        <ul>
                            <div className="nav-close" onClick={closeNav}>
                                <IoClose />
                            </div>
                            {/* {
                                NAVBAR_DATA.map((navbar, index) => {
                                    return (
                                        <li key={index}>
                                            <Link onClick={closeNav} to={navbar.navPath}>{navbar.navTitle}</Link>
                                        </li>
                                    )
                                })
                            } */}
                        </ul>
                    </div>
                    <div className="btn-nav">
                        <Link to="https://api.whatsapp.com/send/?phone=923201091220&text&type=phone_number&app_absent=0">
                            <div className="number-nav">
                                <FaWhatsapp />
                                <Link to="https://api.whatsapp.com/send/?phone=923201091220&text&type=phone_number&app_absent=0"><p>+92 320 1091 220 </p></Link>
                            </div>
                        </Link>
                        <Link to={NAVBAR_DATA[4].navPath}>
                            <button className="button">
                                <span>Sign Up </span>
                            </button>
                        </Link>
                    </div>
                    <div className="nav-bar" onClick={showNav}>
                        <FaBarsStaggered />
                    </div>
                </div>
            </nav>
        </>
    )
}
