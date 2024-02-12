import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar'

export default function SignUp() {

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
    const response = await fetch('http://localhost:8080/home',{
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
    const response = await fetch('http://localhost:8080/home',{
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
            <div className="signUp">
                <Navbar/>
                <div className='main'>
                    <div className="headData">
                        <p>Contact Us</p>
                        <h1>Work For yourself, not by yourself, with gaspar insurance </h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit saepe accusamus dicta aliquid necessitatibus.</p>
                        <div className="btn">
                            <button>Read Me Now</button>
                            <a href="">+92 152345263</a>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="text" name="Fname" placeholder='First name*' required onChange={handleForm}/>
                            <input type="text" name="Lname" placeholder='Last name*' required onChange={handleForm}/>
                            <input  type="email" name="email" placeholder='Email address*' required onChange={handleForm} />
                            <input type="number" name="phone" placeholder='Phone number*' required onChange={handleForm}/>
                            <input  type="text" name="contact" placeholder='Best time to contact you?'onChange={handleForm}/>
                            <input  name="service" type="text" placeholder="What's your preferred method of contact? " onChange={handleForm}/>
                            <input  type="text" name="service2" placeholder="Do you have any additional information? " onChange={handleForm}/>
                            <button>Submit your message</button>
                            {users.map(user=><li key={user._id}>{user.username},{user.password}</li>)}
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex similique libero inventore voluptatum quae quia quibusdam voluptatibus labore <a href="">Read more</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
