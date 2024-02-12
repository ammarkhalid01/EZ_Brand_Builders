import React from 'react'
import NAVBAR_DATA from '../Navbar/NAVBAR_DATA'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { SiGooglemybusiness } from "react-icons/si";
import { useEffect, useState } from 'react';



export default function Footer() {
    const [form, setForm] = useState({});
  const [users, setUsers] = useState([]);

  const handleForm = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    // e.preventDefault();
    const response = await fetch('http://localhost:8080/demo',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await response.json();
   console.log(data);
  }

  const getUsers = async ()=>{
    const response = await fetch('http://localhost:8080/demo',{
      method:'GET',
    })
   const data = await response.json();
   setUsers(data);
  }

  useEffect(()=>{
    getUsers();
  },[])

    return (
        <>
            <div className="footerCom">
                <div className="main">
                    <div className="head">
                        <h2>Signup our newsletter to get update
                            information, news, insights or promotions.</h2>
                        <div className="input">
                            <input type="text" placeholder='Enter Email' />
                            <button>SignUp</button>
                        </div>
                    </div>
                    <div className="content">
                        <div className="left">
                            <h5>Find out how we can help you
                                scale your business and take it to
                                new heights.</h5>
                            <p>Simply fill this form and get into contact with us today!</p>
                            <div className="links-icon">
                                <Link to="https://www.youtube.com/channel/UCFaQ3CeycqLReIhIs498u2Q" ><FaYoutube /></Link>
                                <Link to="https://www.facebook.com/profile.php?id=61554111733727"> <FaFacebook /></Link>
                                <Link to="https://www.linkedin.com/company/ez-brand-builders"> <FaLinkedin /></Link>
                                <Link> <SiGooglemybusiness /></Link>
                            </div>
                        </div>
                        {/* <div className="mid">
                            <h5>Quick Links</h5>
                            <ul>
                                {
                                    NAVBAR_DATA.map((val) => {
                                        return (
                                            <li>
                                                <NavLink to={val.navPath} hre>{val.navTitle} </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div> */}
<form onSubmit={handleSubmit}>
                        <div className="right">
                            <div className="twoDiv">
                                <input type="text" name="Fname" onChange={handleForm} placeholder='First Name' />
                                <input type="text" name="Lname" onChange={handleForm} placeholder='Last Name' />
                            </div>
                            <input type="text" name="email" onChange={handleForm} placeholder='Email' />
                            <input type="text" name="phone" onChange={handleForm} placeholder='Phone Number' />
                            <input type="text" name="service" onChange={handleForm} placeholder='What kind of service do you need?' />
                            <textarea name="message" onChange={handleForm} placeholder='Message' ></textarea>
                            <button type="submit">Send Message</button>
                            {users.map(user=><li key={user._id}>{user.username},{user.password}</li>)}
                        </div>
</form>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="bottom">
                    <p>Copyright © 2023 <Link to="/">Software House</Link> , All rights reserved.</p>
                </div>
            </div>
        </>
    )
}
