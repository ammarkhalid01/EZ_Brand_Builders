import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Page1 from '../Pages/page1/Page1'
import About from '../Pages/About/About'
import Services from '../Pages/Services/Services'
import Blog from '../Pages/Blog/Blog'
import NAVBAR_DATA from '../Components/Navbar/NAVBAR_DATA'
import SignUp from '../Pages/SignUp/SignUp'

export default function Router() {
  return (
    <>
      <Routes>
        <Route path={NAVBAR_DATA[0].navPath} element={<Page1 />} />
        {/* <Route path={NAVBAR_DATA[1].navPath} element={ <About/> }/>
        <Route path={NAVBAR_DATA[2].navPath} element={ <Services/> }/>
      <Route path={NAVBAR_DATA[3].navPath} element={ <Blog/> }/> */}
      <Route path={NAVBAR_DATA[4].navPath} element={<SignUp />} />
      </Routes>
    </>
  )
}
